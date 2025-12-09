/**
 * IHandler Interface: Defines the methods for building the chain and handling requests.
 */
export interface IHandler {
    setNext(handler: any): any;
    handle(request: any): any; // 'any' here is flexible, it could be a specific Response type
}