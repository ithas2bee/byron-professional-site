# Environment Overview

The site is a static Astro application. `npm run build` generates `dist/`; Docker copies those files into Nginx Alpine, which serves them on container port 80.

## Development
- Branch: `development`
- Workflow: `.github/workflows/deploy-dev.yml`
- Image: `byron-professional-site:dev`
- Container: `byron-professional-site-dev`
- Host port: `8085`

## Staging
- Branch: `staging`
- Workflow: `.github/workflows/deploy-staging.yml`
- Image: `byron-professional-site:staging`
- Container: `byron-professional-site-staging`
- Host port: `8086`
- Public URL: https://staging.byronlencrerot.com

## Production
Production deployment is not verified/configured in this guide. The root domain is registered, but do not assume a production container or route exists.

## Known paths
- Development checkout: `/home/lencrerot/Development/Sites/byron-professional-site`
- Staging checkout: `/home/lencrerot/Staging/Sites/byron-professional-site`
- Personal website runner: `/home/lencrerot/actions-runner-personal-site`

The staging checkout should track `staging`; development should track `development`. Confirm current branches before manual operations.
