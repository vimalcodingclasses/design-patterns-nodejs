import { Button } from "./IButton";

export class MacOSButton implements Button {
    paint(): string {
        return "Rendering a sleek MacOS Button.";
    }
}