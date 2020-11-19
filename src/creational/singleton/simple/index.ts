// index.ts

import { loggerSingleton, Logger } from './Logger'
import { Payment } from './Payment'

// Retrieve the Singleton instance
const myLogger: Logger = loggerSingleton

myLogger.log('Starting the payment processor app.')
console.log('Log count: ' + myLogger.count.toString())

const myPayment: Payment = new Payment()
myPayment.process(100)

console.log('Log count: ' + myLogger.count.toString())