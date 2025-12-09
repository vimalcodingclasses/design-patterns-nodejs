import { BaseHandler } from "./BaseHandler";

export class ValidationHandler extends BaseHandler {
    handle(request: any) {
        console.log('ValidationHandler: Validating request payload...');
        if (request.isAuthenticated && request.data.length > 5) {
            console.log('ValidationHandler: Payload is valid.');
            // Pass control to the next handler
            return super.handle(request);
        } else if (!request.isAuthenticated) {
            // Already handled in the previous chain, but good for safety
            return super.handle(request);
        } else {
            console.log('ValidationHandler: Payload too short. Terminating chain.');
            return { success: false, message: 'Data length too short' };
        }
    }
}