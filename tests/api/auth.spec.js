const { test, expect } = require("@playwright/test");
const { generateToken } = require("../../utils/authHelper");

test("Generate authentication token", async ({ request }) => {

    const token = await generateToken(request);

    expect(token).toBeTruthy();

    console.log(token);
});