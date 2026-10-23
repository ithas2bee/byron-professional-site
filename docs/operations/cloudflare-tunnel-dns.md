# Cloudflare Tunnel and DNS

The public staging hostname is `staging.byronlencrerot.com`. Its Cloudflare published application route points to `http://localhost:8086`, where Docker maps host port 8086 to the staging Nginx container's port 80.

The DNS record name is `staging`; its target is the UUID-based `cfargotunnel.com` hostname for the existing tunnel, with proxying enabled. The tunnel display name is `ubuntu-server-tunnel`.

Request path:

```text
Browser HTTPS -> Cloudflare DNS/proxy -> Cloudflare Tunnel
-> localhost:8086 -> staging Nginx container -> static Astro files
```

Cloudflare handles public HTTPS; HTTP on localhost is expected for this origin configuration.

Verify the tunnel is Healthy, the published route points to `http://localhost:8086`, the DNS record targets the existing tunnel, and https://staging.byronlencrerot.com loads. Never document or expose tunnel tokens. The tunnel is shared with another application, so do not delete/recreate it or alter unrelated routes.
