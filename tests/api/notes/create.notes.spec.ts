import { apiTest } from "../../fixtures/apiTestFixtures";
import { v4 as UUID } from 'uuid';

/*
    Cases are identical, just as an example. For real purposes, obviously change the test data!
*/

let authToken: string | null = null;

apiTest.beforeAll(async ({ request, assertionHelper }) => {
    const uniqueEmail = `${UUID()}@email.com`;
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

    await apiTest.step('Then I should be able to successfully login', async () => {
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
});

apiTest.beforeEach(async ({ request, assertionHelper }) => {
    if (!authToken) {
        throw new Error("Auth token is missing. Test cannot proceed.");
    }

    await apiTest.step('Verify token is still valid', async () => {
        const response = await request.get(`${process.env.API_BASE_URL}/users/profile`, {
            headers: {
                'x-auth-token': authToken!
            }
        });
        assertionHelper.hardAssertEquals(response.status(), 200, `Expected status code to be 200, but was ${response.status()}`);
    });
});

apiTest('As a logged in user I want to successfully create a new note', async ({ request, assertionHelper }) => {
    const testCases = [
        { title: UUID(), description: UUID(), category: 'Home', expected: 'Success' },
        { title: UUID(), description: UUID(), category: 'Work', expected: 'Failure' },
        { title: UUID(), description: UUID(), category: 'Personal', expected: 'Failure' },
        { title: UUID(), description: UUID(), category: 'Home', expected: 'Success' },
    ];

    for (const { title, description, category, expected } of testCases) {
        await apiTest.step('Given I create a new note', async () => {
            const response = await request.post(`${process.env.API_BASE_URL}/notes`, {
                headers: {
                    'x-auth-token': authToken!
                },
                data: {
                    title: title,
                    description: description,
                    category: category
                }
            });
            assertionHelper.hardAssertEquals(response.status(), 200, `Expected status code to be 200, but was ${response.status()}`);
        });
    }
});
