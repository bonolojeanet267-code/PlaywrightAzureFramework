class ApiClient {

    constructor(request) {
        this.request = request;
        this.baseUrl = "https://restful-booker.herokuapp.com";
    }

    async get(endpoint) {
        return await this.request.get(`${this.baseUrl}${endpoint}`);
    }

    async post(endpoint, body, headers = {}) {
        return await this.request.post(`${this.baseUrl}${endpoint}`, {
            data: body,
            headers
        });
    }

    async put(endpoint, body, headers = {}) {
        return await this.request.put(`${this.baseUrl}${endpoint}`, {
            data: body,
            headers
        });
    }

    async patch(endpoint, body, headers = {}) {
        return await this.request.patch(`${this.baseUrl}${endpoint}`, {
            data: body,
            headers
        });
    }

    async delete(endpoint, headers = {}) {
        return await this.request.delete(`${this.baseUrl}${endpoint}`, {
            headers
        });
    }
}

module.exports = ApiClient;