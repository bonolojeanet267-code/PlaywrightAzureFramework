const { test, expect, request } = require("@playwright/test");
const { bookingData } = require("../../utils/testData");
const { generateToken } = require("../../utils/authHelper");

test("Update an existing booking", async () => {

    const apiContext = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com"
    });

    // Generate a fresh token
    const token = await generateToken(apiContext);

    console.log("Generated Token:", token);

    const bookingId = 1;

    const response = await apiContext.put(`/booking/${bookingId}`, {
        headers: {
            Cookie: `token=${token}`,
            "Content-Type": "application/json"
        },
        data: bookingData
    });

    console.log("Status:", response.status());

    const body = await response.text();
    console.log("Body:", body);

    expect(response.ok()).toBeTruthy();

    const responseBody = JSON.parse(body);

    expect(responseBody.firstname).toBe(bookingData.firstname);
    expect(responseBody.lastname).toBe(bookingData.lastname);

    await apiContext.dispose();
});