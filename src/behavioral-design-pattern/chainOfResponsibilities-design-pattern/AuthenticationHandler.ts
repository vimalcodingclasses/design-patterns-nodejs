import { BaseHandler } from "./BaseHandler";

export class AuthenticationHandler extends BaseHandler {
    handle(request: any) {
        console.log('AuthenticationHandler: Checking credentials...');
        if (request.user !== 'admin' && request.password !== 'pass') {
            console.log('AuthenticationHandler: Authentication failed. Terminating chain.');
            // Stop propagation by returning the result directly
            return { success: false, message: 'Invalid Credentials' };
        }

        request.isAuthenticated = true;
        console.log('AuthenticationHandler: Access granted.');
        // Pass control to the next handler
        return super.handle(request);
    }
}
