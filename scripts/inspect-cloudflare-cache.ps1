param()

$ErrorActionPreference = 'Stop'
$secureToken = Read-Host 'Cloudflare API token (hidden)' -AsSecureString
$tokenPointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureToken)

try {
    $token = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($tokenPointer)
    if ($token -notmatch '^cfut_[A-Za-z0-9_-]+$') {
        throw 'The supplied value does not look like a Cloudflare API token.'
    }

    $headers = @{ Authorization = "Bearer $token" }
    $zoneResponse = Invoke-RestMethod -Uri 'https://api.cloudflare.com/client/v4/zones?name=kc-induction.com' -Headers $headers
    $zone = $zoneResponse.result | Where-Object { $_.name -eq 'kc-induction.com' } | Select-Object -First 1
    if (-not $zone) {
        throw 'Zone not found. The token may need Zone > Zone > Read permission.'
    }

    Write-Output "ZONE: $($zone.name)"
    Write-Output "ZONE ID: $($zone.id)"

    $rulesUri = "https://api.cloudflare.com/client/v4/zones/$($zone.id)/rulesets/phases/http_request_cache_settings/entrypoint"
    try {
        $rulesResponse = Invoke-RestMethod -Uri $rulesUri -Headers $headers
        Write-Output "CACHE RULESET ID: $($rulesResponse.result.id)"
        if ($rulesResponse.result.rules.Count -eq 0) {
            Write-Output 'CACHE RULES: none'
        } else {
            $rulesResponse.result.rules |
                Select-Object id, description, expression, action, action_parameters, enabled |
                ConvertTo-Json -Depth 20
        }
    } catch {
        if ([int]$_.Exception.Response.StatusCode -eq 404) {
            Write-Output 'CACHE RULESET: none (404)'
        } else {
            throw
        }
    }
} catch {
    Write-Error $_.Exception.Message
} finally {
    if ($tokenPointer -ne [IntPtr]::Zero) {
        [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($tokenPointer)
    }
    Remove-Variable token, secureToken, headers -ErrorAction SilentlyContinue
}
