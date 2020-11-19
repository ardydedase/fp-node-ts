// index.ts

import { Logger } from './Logger'
import { Payment } from './Payment'

const myLogger: Logger = new Logger()

myLogger.log('Starting the payment processor app.')
console.log('Log count: ' + myLogger.count.toString())

const myPayment: Payment = new Payment()
myPayment.process(100)

console.log('Log count: ' + myLogger.count.toString())
