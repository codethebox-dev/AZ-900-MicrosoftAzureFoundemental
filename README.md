# AZ-900: Azure Fundamentals Documentation

[![GitHub Pages](https://img.shields.io/badge/docs-live-brightgreen)](https://myorg.github.io/az-900-docs)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Jekyll](https://img.shields.io/badge/built%20with-Jekyll-red.svg)](https://jekyllrb.com)

A complete, beginner-friendly documentation site for the **Microsoft Azure Fundamentals (AZ-900)** certification exam. Built with Jekyll and deployed via GitHub Pages.

## Live site

**https://myorg.github.io/az-900-docs**

## Contents

| Path | Description |
|------|-------------|
| `modules/module-01-cloud-concepts.md` | Cloud computing, deployment models, IaaS/PaaS/SaaS |
| `modules/module-02-core-services.md` | Azure regions, resource groups, VMs, storage |
| `modules/module-03-security.md` | Shared responsibility, Defender, IAM, RBAC |
| `labs/lab-01-create-vm.md` | Hands-on: Create a VM in the Azure Portal |
| `practice-questions.md` | 10 interactive practice questions |
| `glossary.md` | Key AZ-900 terms and definitions |

## Run locally

```bash
# Install Ruby (3.2+) and Bundler first
gem install bundler

# Clone the repo
git clone https://github.com/myorg/az-900-docs.git
cd az-900-docs

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Open http://localhost:4000/az-900-docs/
```

## Deploy to GitHub Pages

1. Push to `main` branch
2. GitHub Actions automatically builds and deploys the site
3. Go to **Settings → Pages** to confirm the live URL

Or enable Pages manually:
- Settings → Pages → Source: **GitHub Actions**

## Customise for your org

1. Replace `myorg` with your GitHub organisation name in `_config.yml`
2. Update `url` and `baseurl` in `_config.yml`
3. Add your org name to footer content

## License

MIT License — free to use, fork, and adapt for your own study materials.

---

> This project is not affiliated with or endorsed by Microsoft. AZ-900 is a trademark of Microsoft Corporation.
