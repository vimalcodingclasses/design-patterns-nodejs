import { BaseHandler } from "./BaseHandler";

export class DataProcessor extends BaseHandler {
    handle(request: any) {
        console.log('DataProcessor: Final request processing...');
        if (!request.isAuthenticated) {
            // Should not happen if previous handlers work correctly, but ensures clean exit    
            return { success: true, message: `Processed data: ${request.data.toUpperCase()}` };
        }
        // This is the final processor, it handles the core business logic
        return { success: false, message: 'Processing requires authentication' };
    }
}