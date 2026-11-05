# Operations and Troubleshooting

## First checks

```bash
docker ps --format 'table {{.Names}}\t{{.Image}}\t{{.Ports}}'
curl -I http://localhost:8085/
curl -I http://localhost:8086/
docker logs --tail 100 byron-professional-site-dev
docker logs --tail 100 byron-professional-site-staging
```

## GitHub Actions failure
1. Open the failed run and expand the first failed step.
2. Identify whether checkout, Node setup, `npm ci`, Astro build, Docker build, container replacement, or HTTP verification failed.
3. Check container status and logs before retrying if replacement may have partially run.

## Public staging failure
1. Test `curl -I http://localhost:8086/`.
2. Check staging container status and logs.
3. Confirm the Cloudflare Tunnel is Healthy.
4. Confirm the route hostname and origin `http://localhost:8086`.
5. Confirm the `staging` DNS record targets the existing tunnel and is proxied.
6. Only then investigate caching or browser issues.

Before stopping or replacing a container, verify its exact name. Do not run broad Docker cleanup commands. Do not change shared tunnel routes unless evidence points to routing. Never print secrets.
