// index.ts

import { Logger } from './Logger'
import { Payment } from './Payment'

// Retrieve the Singleton instance
const myLogger: Logger = Logger.getInstance()

myLogger.log('Starting the payment processor app.')
console.log('Log count: ' + myLogger.count.toString())

const myPayment: Payment = new Payment()
myPayment.process(100)

console.log('Log count: ' + myLogger.count.toString())
