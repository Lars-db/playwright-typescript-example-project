import { RegexEnum } from "../../../enums/regexEnums";
import { apiTest } from "../../fixtures/apiFixtures";
import { v4 as UUID } from 'uuid';

apiTest('As a new user I want to successfully create an account and verify account details', async ({ request, assertionHelper, regexHelper }) => {
    const uniqueEmail = `${UUID()}@email.com`;
    let authToken: string | null = null;
    const name: string = 'John Doe';

    await apiTest.step('Given I create a new account', async () => {
        const response = await request.post(`${process.env.API_BASE_URL}/users/register`, {
            data: {
              name: name,
              email: uniqueEmail,
              password: 'password'
            }
          });

        assertionHelper.hardAssertEquals(response.status(), 201, `Expected status code to be 201, but was ${response.status()}`);
    });

    await apiTest.step('Then I should be able to successfully login with this new user', async () => {
        const response = await request.post(`${process.env.API_BASE_URL}/users/login`, {
            data: {
              email: uniqueEmail,
              password: 'password'
            }
        });

        assertionHelper.hardAssertEquals(response.status(), 200, `Expected status code to be 200, but was ${response.status()}`);

        const responseBody = await response.json();
        authToken = responseBody.data?.token;
        assertionHelper.hardAssertEquals(!!authToken, true, 'Expected token to be present in the response');
    });

    await apiTest.step('And I should be able to fetch my account details', async () => {
        const response = await request.get(`${process.env.API_BASE_URL}/users/profile`, {
            headers: {
                'x-auth-token': authToken!
            }
        });

        assertionHelper.hardAssertEquals(response.status(), 200, `Expected status code to be 200, but was ${response.status()}`);

        const profileData = await response.json();

        assertionHelper.softAssertEquals(profileData.success, true, 'Expected success to be true');
        assertionHelper.softAssertEquals(profileData.status, 200, 'Expected status to be 200');
        assertionHelper.softAssertEquals(profileData.message, 'Profile successful', 'Expected message to match "Profile successful"');
        assertionHelper.softAssertTrue(regexHelper.validateRegex(profileData.data.id, RegexEnum.ID_PATTERN), 'Expected id to be a valid UUID');
        assertionHelper.softAssertEquals(profileData.data.name, name, `Expected name to match ${name}`);
        assertionHelper.softAssertTrue(regexHelper.isValidEmail(profileData.data.email), 'Expected email to be a valid email format');
    });
});
