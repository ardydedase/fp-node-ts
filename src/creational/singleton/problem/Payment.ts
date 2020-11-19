// Payment.ts

import { Logger } from './Logger'

export class Payment {
    private paymentLogger: Logger = new Logger()
    constructor() {
        this.paymentLogger.log('Payment instance constructed.')
    }

    public process(amount: number) {
        this.paymentLogger.log('Processing payment: ' + amount.toString())
    }
}