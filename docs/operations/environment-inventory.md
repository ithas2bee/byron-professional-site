# Environment Inventory and Verification Checklist

## Confirmed
- Repository: `ithas2bee/byron-professional-site`
- Application: Astro static site; build output `dist/`
- Docker web server: Nginx Alpine
- Branches: `development`, `staging`
- Development image/container: `byron-professional-site:dev` / `byron-professional-site-dev`
- Staging image/container: `byron-professional-site:staging` / `byron-professional-site-staging`
- Host ports: development 8085; staging 8086
- Staging URL: https://staging.byronlencrerot.com
- Tunnel display name: `ubuntu-server-tunnel`
- Runner name: `byron-professional-site`
- Runner directory: `/home/lencrerot/actions-runner-personal-site`

## Verify before infrastructure changes
- [ ] Current branch and commit in both checkouts.
- [ ] Runner labels in GitHub Settings → Actions → Runners.
- [ ] Runner systemd service name/status.
- [ ] Container health and restart policies.
- [ ] Current DNS and published route values.
- [ ] Whether production routing has intentionally been configured.
- [ ] Backup, monitoring, and recovery procedures.

Never store tunnel tokens, runner credentials, private keys, access tokens, or passwords here. Update these docs in the same PR as relevant infrastructure changes, and mark unverified values rather than guessing.
