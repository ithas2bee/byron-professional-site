# Website Operations Documentation

Guides:
- [Environment overview](environment-overview.md)
- [Ubuntu host and Docker](ubuntu-host-and-docker.md)
- [Cloudflare Tunnel and DNS](cloudflare-tunnel-dns.md)
- [GitHub Actions deployments](github-actions-deployments.md)
- [Operations and troubleshooting](operations-troubleshooting.md)
- [Environment inventory](environment-inventory.md)

| Environment | Branch | Container | Port | Public URL |
|---|---|---|---:|---|
| Development | `development` | `byron-professional-site-dev` | 8085 | LAN access |
| Staging | `staging` | `byron-professional-site-staging` | 8086 | https://staging.byronlencrerot.com |
| Production | Not configured | Not configured | — | Not verified |

Keep environment workflows, images, containers, and ports separate. Never commit credentials, tunnel tokens, or private keys. The Cloudflare Tunnel is shared with another application; do not recreate it for routine website changes.
