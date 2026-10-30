param(
    [ValidateSet('Inspect', 'Create', 'Remove')]
    [string]$Action = 'Inspect'
)

$ErrorActionPreference = 'Stop'
$zoneId = 'ddca827a24f712c7632efb185bee9315'
$apiRoot = "https://api.cloudflare.com/client/v4/zones/$zoneId/rulesets"
$entrypoint = "$apiRoot/phases/http_request_cache_settings/entrypoint"
$description = 'KC homepage HTML 120s origin-header test'
$expression = '(http.host eq "www.kc-induction.com" and http.request.uri.path eq "/" and http.request.method eq "GET" and http.request.uri.query eq "" and not has_key(http.request.headers, "rsc") and not has_key(http.request.headers, "cookie"))'

$secureToken = Read-Host 'Cloudflare API token (hidden)' -AsSecureString
$tokenPointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureToken)

try {
    $token = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($tokenPointer)
    if ($token -notmatch '^cfut_[A-Za-z0-9_-]+$') {
        throw 'The supplied value does not look like a Cloudflare API token.'
    }
    $headers = @{ Authorization = "Bearer $token" }

    $ruleset = $null
    try {
        $ruleset = (Invoke-RestMethod -Uri $entrypoint -Headers $headers).result
    } catch {
        if ([int]$_.Exception.Response.StatusCode -ne 404) { throw }
    }

    $currentRules = if ($ruleset) { @($ruleset.rules) } else { @() }
    $matching = @($currentRules | Where-Object { $_.description -eq $description -and $_.expression -eq $expression })
    Write-Output "Action: $Action"
    Write-Output "Existing cache rule count: $($currentRules.Count)"
    Write-Output "Matching KC test rule count: $($matching.Count)"

    if ($Action -eq 'Inspect') {
        $currentRules | Select-Object id, description, expression, enabled, action_parameters | ConvertTo-Json -Depth 12
        return
    }

    if ($Action -eq 'Create') {
        if ($matching.Count -gt 0) {
            Write-Output 'The exact test rule already exists; no change made.'
            return
        }
        if ($currentRules.Count -gt 0) {
            throw 'Other cache rules now exist. Review them before adding this test rule.'
        }

        $rule = @{
            expression = $expression
            description = $description
            action = 'set_cache_settings'
            action_parameters = @{ cache = $true }
            enabled = $true
        }
        if ($ruleset) {
            $uri = "$apiRoot/$($ruleset.id)/rules"
            $body = $rule | ConvertTo-Json -Depth 12
        } else {
            $uri = $apiRoot
            $body = @{
                name = 'KC homepage cache test'
                kind = 'zone'
                phase = 'http_request_cache_settings'
                rules = @($rule)
            } | ConvertTo-Json -Depth 12
        }
        $created = Invoke-RestMethod -Method Post -Uri $uri -Headers $headers -ContentType 'application/json' -Body $body
        if (-not $created.success) { throw 'Cloudflare did not confirm rule creation.' }
        Write-Output 'Created one homepage-only Cache Rule without an Edge TTL override.'
        Write-Output "Ruleset ID: $($created.result.id)"
        return
    }

    if ($matching.Count -ne 1) {
        throw 'The exact KC test rule was not found; nothing was removed.'
    }
    $deleteUri = "$apiRoot/$($ruleset.id)/rules/$($matching[0].id)"
    $removed = Invoke-RestMethod -Method Delete -Uri $deleteUri -Headers $headers
    if (-not $removed.success) { throw 'Cloudflare did not confirm rule removal.' }
    Write-Output 'Removed only the matching KC homepage test rule.'
} catch {
    Write-Error $_.Exception.Message
} finally {
    if ($tokenPointer -ne [IntPtr]::Zero) {
        [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($tokenPointer)
    }
    Remove-Variable token, secureToken, headers -ErrorAction SilentlyContinue
}
