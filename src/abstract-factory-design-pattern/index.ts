import { GUIFactory } from "./GUIFactory";
import { MacOSFactory } from "./MacOSFactory";
import { WindowsFactory } from "./WindowsFactory";

// The client application context function
function runApplication(factory: GUIFactory) {
    // Client code uses the Abstract Factory to get abstract products
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();

    // Client code interacts with abstract products
    console.log(button.paint());
    console.log(checkbox.render());
}

// --- Application Initialization ---

// 1. Choose the family (factory) based on environment/config
const OS = process.env.OS_TYPE || 'Windows';
let factory: GUIFactory;

if (OS === 'MacOS') {
    factory = new MacOSFactory();
} else {
    factory = new WindowsFactory();
}

// 2. Run the application with the chosen family
runApplication(factory);

// If OS='MacOS' output:
// Rendering a sleek MacOS Button.
// Rendering a sleek MacOS Checkbox.

// If OS='Windows' output:
// Rendering a standard Windows Button.
// Rendering a standard Windows Checkbox.