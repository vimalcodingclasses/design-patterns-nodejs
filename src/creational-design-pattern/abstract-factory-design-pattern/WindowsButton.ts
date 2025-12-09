import { Button } from "./IButton";

export class WindowsButton implements Button {
    paint(): string {
        return "Rendering a standard Windows Button.";
    }
}