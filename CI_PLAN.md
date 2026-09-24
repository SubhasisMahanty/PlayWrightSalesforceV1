# Playwright GitHub Actions CI plan

## Goal
Run all Playwright tests in a Linux Docker container on GitHub Actions using free CI resources.

## Project setup
1. Initialize git repository if needed:
   ```bash
   git init
   git branch -M main
   ```
2. Create a GitHub repository and push the project.
3. Add the workflow file at `.github/workflows/playwright-ci.yml`.

## Workflow behavior
- Trigger on push and pull request to `main`/`master`.
- Runs inside the official Playwright Docker image.
- Installs dependencies with `npm ci`.
- Runs all tests with `npx playwright test`.
- Uploads the HTML report and test results as artifacts even on failure.

## Why Docker / Linux container is recommended
- Mirrors real CI environment for Playwright.
- Works well with browser dependencies.
- Free and supported on GitHub-hosted runners.
- Minimal setup for open-source projects.

## Local validation before pushing
```bash
npm install
npx playwright install --with-deps
npx playwright test
```

## Optional improvements
- Add browser matrix (`chromium`, `firefox`, `webkit`).
- Add test sharding for large suites.
- Publish HTML report to GitHub Pages or artifact storage.
- Add Slack/email notifications.

## Basic trigger example
```yaml
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
```

## Important notes
- For this project, the report file is configured through `reporting-labs.config.ts`.
- CI should run in headless mode, so the config uses `headless: !!process.env.CI`.
- The repo should be pushed to GitHub before the workflow can run.
