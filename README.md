# playwright-typescript-example-project


ENV=test npx playwright test
ENV=acceptance npx playwright test
ENV=development npx playwright test


ENV=test npx playwright test --project=webkit
ENV=test npx playwright test --project=chromium
ENV=test npx playwright test --project=firefox


ENV=test npx playwright test --project=api   # Runs only API tests
ENV=test npx playwright test --project=ui    # Runs only UI tests


ENV=test npx playwright test --project=webkit --project=ui  # Runs only UI tests on webkit
ENV=test npx playwright test --project=ui --project=chromium # Runs only UI tests on chromium
ENV=test npx playwright test --project=ui --project=firefox # Runs only UI tests on firefox

