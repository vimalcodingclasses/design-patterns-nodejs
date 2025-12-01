import { GUIFactory } from "./GUIFactory";
import { Button } from "./IButton";
import { Checkbox } from "./ICheckbox";
import { MacOSButton } from "./MacOSButton";
import { MacOSCheckbox } from "./MacOSCheckbox";

export class MacOSFactory implements GUIFactory {
    createButton(): Button {
        return new MacOSButton();
    }
    createCheckbox(): Checkbox {
        return new MacOSCheckbox();
    }
}