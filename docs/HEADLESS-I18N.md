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

Transposh's WordPress "Translate All" action covers WordPress content, not the
Next.js page-copy catalog in `messages/source.json`. The private REST endpoint
creates and stores missing translations when called. To pretranslate the catalog
before visitors open localized pages, run this from the repository on the server:

```bash
node scripts/warm-transposh-translations.mjs --dry-run
node --env-file=/etc/kcinduction/kcinduction.env scripts/warm-transposh-translations.mjs ar
node --env-file=/etc/kcinduction/kcinduction.env scripts/warm-transposh-translations.mjs
```

The single-language command is a first check; the final command covers Arabic,
Russian, Spanish, German, and Korean. Each batch has at most 50 strings. A failed
batch stops the script, while successful translations remain in WordPress and can
be reused on the next run. Once complete, use the WordPress revalidation plugin
to clear Next.js's cached translations.

After changing visible page copy, refresh the source catalog and verify types:

```bash
npm run i18n:extract
npm run build
```
