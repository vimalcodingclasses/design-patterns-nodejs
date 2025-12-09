import { CreditCardStrategy } from "./CreditCardStrategy";
import { PayPalStrategy } from "./PayPalStrategy";
import { BankTransferStrategy } from "./BankTransferStrategy";

import { PaymentProcessor } from "./PaymentProcessor";

// Credit Card Payment
const creditCardPayment = new CreditCardStrategy();
const processor1 = new PaymentProcessor(creditCardPayment);
processor1.executePayment(100.00);

// PayPal payment
const payPalPayment = new PayPalStrategy();
const processor2 = new PaymentProcessor(payPalPayment);
processor2.executePayment(200.00);

// BankTransfer payment
const bankTransfer = new BankTransferStrategy();
const processor3 = new PaymentProcessor(bankTransfer);
processor3.executePayment(300.00);
