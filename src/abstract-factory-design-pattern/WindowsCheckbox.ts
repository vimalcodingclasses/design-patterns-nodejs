import { Checkbox } from "./ICheckbox";

export class WindowsCheckbox implements Checkbox {
    render(): string {
        return "Rendering a standard Windows Checkbox.";
    }
}