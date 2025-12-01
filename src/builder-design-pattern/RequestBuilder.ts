import { HttpRequest } from "./HttpRequest";

export class RequestBuilder {
    private headers: any;
    private body: any;
    private queryParams: any;

    constructor(
        private method: any,
        private url: any
    ) {
        if (!method || !url) {
            throw new Error("Method and URL are required to start the request.");
        }
        this.method = method;
        this.url = url;
        this.headers = {};
        this.body = {};
        this.queryParams = {};
    }

    // Builder methods (step-by-step configuration)

    withHeader(key: any, value: any) {
        this.headers[key] = value;
        return this; // Crucial for chaining
    }

    withJsonBody(data: any) {
        this.body = data;
        this.headers['Content-Type'] = 'application/json';
        return this;
    }

    withQueryParam(key: any, value: any) {
        this.queryParams[key] = value;
        return this;
    }

    // The final construction method
    build() {
        // The builder passes its internal state to the Product's constructor
        return new HttpRequest(
            this.method,
            this.url,
            this.headers,
            this.body,
            this.queryParams
        );
    }
}