export class HttpRequest {
    constructor(
        private method: any,
        private url: any,
        private headers: any,
        private body: any,
        private queryParams: any
    ) {
        this.method = method;
        this.url = url;
        this.headers = headers;
        this.body = body;
        this.queryParams = queryParams;
    }

    send() {
        // In a real application, this would use 'fetch' or 'axios'
        console.log(`\n--- Sending Request ---`);
        console.log(`Method: ${this.method}`);
        console.log(`URL: ${this.url}`);
        console.log(`Query Params: ${JSON.stringify(this.queryParams)}`);
        console.log(`Headers: ${JSON.stringify(this.headers)}`);
        if (this.body) {
            console.log(`Body: ${JSON.stringify(this.body)}`);
        }
        console.log(`------------------------\n`);
    }
}