const { test, expect } = require("@playwright/test");
const ApiClient = require("../../utils/apiClient");
const { bookingData } = require("../../utils/testData");

test("Create booking", async ({ request }) => {

    const api = new ApiClient(request);

    const response = await api.post("/booking", bookingData);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.booking.firstname).toBe("Bonolo");
    expect(body.booking.lastname).toBe("Jeanet");
});