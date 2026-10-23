# Ubuntu Host and Docker

The Ubuntu host runs separate Docker containers for development and staging. The Dockerfile uses this pattern:

```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
EXPOSE 80
```

Build the Astro static output before building the image.

| Environment | Image | Container | Mapping |
|---|---|---|---|
| Development | `byron-professional-site:dev` | `byron-professional-site-dev` | `8085:80` |
| Staging | `byron-professional-site:staging` | `byron-professional-site-staging` | `8086:80` |

Useful checks:

```bash
docker ps --format 'table {{.Names}}\t{{.Image}}\t{{.Ports}}'
docker logs --tail 100 byron-professional-site-dev
docker logs --tail 100 byron-professional-site-staging
curl -I http://localhost:8085/
curl -I http://localhost:8086/
```

Prefer GitHub Actions for routine deployments. If manual deployment is necessary, verify the checkout branch, build the correct environment image, replace only the matching container, and test its local HTTP response. Never remove both environments or use the development image tag for staging. Never print or commit runner credential files.
