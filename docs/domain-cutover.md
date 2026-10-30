# www.kc-induction.com cutover

The canonical site is `https://www.kc-induction.com`. `kcinduction.com` is the temporary deployment domain. Changing DNS alone is not sufficient: the target Nginx virtual host and TLS certificate must also accept the new hostname.

1. Run `bash deploy.sh` on the Linux build server. Confirm that the deployment health checks pass. Do not change DNS yet.
2. In Baota on `94.249.174.172`, add `www.kc-induction.com` and `kc-induction.com` to the site that proxies to `127.0.0.1:3000`. Make sure its Nginx `server_name` includes both names. Keep `kcinduction.com` available during verification.
3. Install a valid TLS certificate for both new names. Check the existing Cloudflare redirect/page rules so they do not send visitors back to the old WordPress origin. Choose `www.kc-induction.com` as the canonical host; redirect the apex to `www` permanently.
4. Point both Cloudflare DNS records for `kc-induction.com` and `www.kc-induction.com` to `94.249.174.172`. After the new host is healthy, redirect `kcinduction.com` permanently to the equivalent path on `www.kc-induction.com`.
5. Check the home page, `/products`, `/contact`, `/privacy-policy`, `/robots.txt`, `/sitemap.xml`, a WebP image, and representative old URLs such as `/5th-generation-digital-induction-heating-power-supply/`. Confirm that old URLs resolve to relevant new pages.
6. Submit one clearly labelled real test inquiry and confirm the entry appears in `inquiry.sf6sf6.com`. Do not treat the success page alone as proof of delivery.
7. Update Google Ads final URLs and sitelinks to the relevant new paths on `www.kc-induction.com`. Verify both domains in Search Console and submit the new sitemap.

The old WordPress site contains account, page-builder, and style-guide URLs without equivalent content. Do not redirect these to the home page. Review any remaining old content, downloads, and backlinks before shutting down the old server.
