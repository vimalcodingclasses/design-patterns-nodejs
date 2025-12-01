import { GUIFactory } from "./GUIFactory";
import { Button } from "./IButton";
import { Checkbox } from "./ICheckbox";
import { WindowsButton } from "./WindowsButton";
import { WindowsCheckbox } from "./WindowsCheckbox";

export class WindowsFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton();
    }
    createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}