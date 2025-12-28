import { appMediator } from './AppMediator';

export class AnalyticsService {
    constructor() {
        appMediator.on('user:registered', this.trackSignup);
    }

    private trackSignup = async (user: any) => {
        console.log(`[AnalyticsService] Uploading data to Mixpanel for user ${user.id}...`);
    }
}