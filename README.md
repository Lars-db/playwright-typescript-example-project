# playwright-typescript-example-project


ENV=test npx playwright test
ENV=acceptance npx playwright test
ENV=development npx playwright test


ENV=test npx playwright test --project=webkit
ENV=test npx playwright test --project=chromium
ENV=test npx playwright test --project=firefox


ENV=test npx playwright test --project=api                   # Runs only API tests
ENV=test npx playwright test --project=ui --project=webkit   # Runs only UI tests
