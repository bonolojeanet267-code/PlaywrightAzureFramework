const { test, expect } = require("@playwright/test");
const { bookingData } = require("../../utils/testData");

test("Update an existing booking", async ({ request }) => {
    // Replace this with a valid booking ID
    const bookingId = 1;

    const response = await request.put(`/booking/${bookingId}`, {
        headers: {
            Cookie: `token=${process.env.API_TOKEN}`,
            "Content-Type": "application/json"
        },
        data: bookingData
    });

    expect(response.ok()).toBeTruthy();

    const responseBody = await response.json();
    expect(responseBody.firstname).toBe(bookingData.firstname);
    expect(responseBody.lastname).toBe(bookingData.lastname);
});