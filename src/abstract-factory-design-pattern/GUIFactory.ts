import { Button } from "./IButton";
import { Checkbox } from "./ICheckbox";

export interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}