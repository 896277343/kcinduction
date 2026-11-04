# Transposh headless multilingual setup

The frontend supports English at unprefixed URLs plus Arabic, Russian, Spanish,
German, and Korean at `/ar`, `/ru`, `/es`, `/de`, and `/ko`. English slugs remain
stable in every locale. Arabic pages use right-to-left document direction.

Install the matching Transposh Headless REST adapter on the WordPress site and
set the same private secret on WordPress and this Next.js deployment. The secret
must be at least 24 characters and must never use a `NEXT_PUBLIC_` prefix.

```dotenv
TRANSPOSH_API_URL="https://your-wordpress-site.example"
TRANSPOSH_HEADLESS_SECRET="replace-with-at-least-24-random-characters"
PUBLISHED_LOCALES="en,ar,ru,es,de,ko"
```

For a safe first release, use `PUBLISHED_LOCALES="en"`, verify the private API,
then publish the translated locales. If the API is unavailable, the site keeps
working and falls back to the original English copy.

After changing visible page copy, refresh the source catalog and verify types:

```bash
npm run i18n:extract
npm run build
```
