# playwright-typescript-example-project


ENV=test npx playwright test
ENV=acceptance npx playwright test
ENV=development npx playwright test


ENV=test npx playwright test --project=webkit
ENV=test npx playwright test --project=chromium
ENV=test npx playwright test --project=firefox