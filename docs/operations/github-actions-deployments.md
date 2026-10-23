# GitHub Actions Deployments

| Branch | Workflow | Container | Port |
|---|---|---|---:|
| `development` | `.github/workflows/deploy-dev.yml` | `byron-professional-site-dev` | 8085 |
| `staging` | `.github/workflows/deploy-staging.yml` | `byron-professional-site-staging` | 8086 |

Each workflow triggers on pushes to its branch. Merging a pull request into a branch updates that branch and triggers its deployment.

The staging workflow checks out code, sets up Node.js 22, runs `npm ci` and `npm run build`, builds `byron-professional-site:staging`, replaces only `byron-professional-site-staging` on port 8086, then checks `http://localhost:8086/`. The initial run succeeded; GitHub showed one warning annotation despite the successful job.

The self-hosted runner is named `byron-professional-site` and installed at `/home/lencrerot/actions-runner-personal-site`. Confirm its labels in repository Settings → Actions → Runners; do not assume labels. If multiple runners match `runs-on: self-hosted`, GitHub may select any eligible runner.

Normal process: develop on a feature branch, open a PR into the intended environment branch, review and merge, inspect the Actions run, then smoke-test the deployed site. Keep workflows branch-specific and never store credentials in YAML.
