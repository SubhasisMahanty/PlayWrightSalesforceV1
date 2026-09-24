import 'reporting-labs/auto';   // records every request.* / page.request call in the report (remove to switch off)
import type { ReportingLabsOptions } from 'reporting-labs';

const config: ReportingLabsOptions = {

  // ── Look ─────────────────────────────────────────────────────────────────────
  title: 'My app – regression',                       // shown in the header
  metadata: {                                         // chips in the header; `build` also labels the run in the trend
    env: process.env.TEST_ENV ?? 'uat',
  
  },
  env: { 'App version': '2.4.0', 'Test data': 'staging-seed-12' },   // extra rows on the Environment card

  // ── Output ───────────────────────────────────────────────────────────────────
  outputFolder: './playwright-report/reporting-labs',                 // where index.html and copied attachments go
  outputFile: 'index.html',
  emitJson: true,                                // also write report.json (used by `reporting-labs merge` for sharded runs)
  embedAttachments: true,                          // inline screenshots as base64: one file, opens anywhere
  embedLimit: 2 * 1024 * 1024,                     // attachments bigger than this (bytes) are copied as files
  embedVideos: false,                              // true = videos inside the HTML too (bigger file, no folder issues)
  announce: true,                                  // print the report path after the run
  open: 'on-failure',                              // open the report in the browser: 'on-failure' | 'always' | 'never'; never in CI
  warnMissingMeta: true,                           // after the run, list tests that have no meta() in the console

  // ── Test details ─────────────────────────────────────────────────────────────
  // Values come from meta({ priority, severity, owner, feature, epic, story, ... }) in your tests.
  //
  // dimensions: which meta keys get their own tab in the Breakdown chart and a dropdown filter on the
  // Tests page. Default: priority, severity, feature, owner. Add your own key when you want a chart
  // for it, e.g. meta({ team: 'web' }) + 'team' here = a "Team" tab showing pass/fail per team.
  // Keys like epic and story do not need to be here: they show as chips and links on every test anyway.
  // dimensions: ['priority', 'severity', 'feature', 'owner', 'team'],
  //
  // dimensionOrder: the order values appear in those charts and filters. Priority (P0..P4) and
  // severity (blocker..trivial) are already ordered. Set this only for your own values,
  // e.g. { severity: ['high', 'medium', 'low'] } or { team: ['web', 'api', 'mobile'] }.
  // dimensionOrder: { severity: ['high', 'medium', 'low'] },
  // links: {                                         // turn meta keys into links; {id} is the value
  //   story: 'https://acme.atlassian.net/browse/{id}',
  //   epic: 'https://acme.atlassian.net/browse/{id}',
  //   issue: 'https://acme.atlassian.net/browse/{id}',
  // },
  // maskKeys: ['otp', 'pan'],                        // extra keys to mask as **** (passwords, tokens, cookies already are)
  // editorLinks: true,                               // "Open in VS Code" on every test; default: on locally, off in CI
  bdd: true,                                      // style Given/When/Then steps as Gherkin; default: auto-detect

  // ── Run history and trend ────────────────────────────────────────────────────
  history: {
    enabled: true,
    file: 'reporting-labs.history.json',           // kept next to playwright.config; commit it or cache it in CI
    keep: 30,                                      // runs to remember
  },

  // ── Widgets on the overview (hide what you do not need) ──────────────────────
  // Failure clusters and the Trend chart are always shown.
  widgets: {
    runStrip: true,        // pass/fail strip under the header
    outcome: true,         // outcome ring
    attention: true,       // "Needs attention" list
    dimensions: true,      // breakdown by priority / severity / feature / owner
    timeline: true,        // timeline by worker
    durations: true,       // duration spread
    tags: true,            // tag cloud
    slowest: true,         // slowest tests
    projects: true,        // per-project results
    flaky: true,           // flakiest tests over the run history
    environment: true,     // Playwright, Node, OS, browsers, CI, commit
    skipped: false,         // skipped tests with reasons
  },

  
};

export default config;
