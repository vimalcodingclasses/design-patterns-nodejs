import { GUIFactory } from "./GUIFactory";
import { masterFactory } from "./MasterFactory";

const factory: GUIFactory = masterFactory('Windows');
const button = factory.createButton();
const checkbox = factory.createCheckbox();

console.log(button.paint());
console.log(checkbox.render());