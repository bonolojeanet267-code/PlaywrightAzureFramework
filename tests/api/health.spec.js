const { test, expect } = require("@playwright/test");
const ApiClient = require("../../utils/apiClient");

test("Verify booking endpoint is available", async ({ request }) => {

    const api = new ApiClient(request);

    const response = await api.get("/booking");

    expect(response.status()).toBe(200);
});