import { GUIFactory } from "./GUIFactory";
import { MacOSFactory } from "./MacOSFactory";
import { WindowsFactory } from "./WindowsFactory";

export const masterFactory = (type: string): GUIFactory => {
    switch (type) {
        case 'Mac':
            return new MacOSFactory();
        case 'Windows':
            return new WindowsFactory();
        default:
            throw new Error(`${type} not found`);
    }
}