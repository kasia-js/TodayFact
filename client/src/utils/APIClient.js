class APIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async getJSON(path) {
        const response = await fetch(`${this.baseURL}/${path}`);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    }

    getFacts(month, day) {
        return this.getJSON(`facts/${month}/${day}`);
    }

    getFrequent() {
        return this.getJSON('frequent');
    }

}

const baseURL = process.env.BASE_URL || '';

const client = new APIClient(baseURL);
export default client;