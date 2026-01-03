// The 3rd party service (Adaptee)
export class StripeLikeService {
    public makeTransaction(tConfig: { total: number; isoCode: string }): void {
        console.log(
            `[StripeLikeService] Processing payment of ${tConfig.total} ${tConfig.isoCode}`
        );
    }
}