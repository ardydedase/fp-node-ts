// Logger.ts

export class Logger {
    private logs: object[]
    // Use the `Logger` type
    private static instance: Logger

    // Use a private constructor
    private constructor() {
        this.logs = []
    }

    get count(): number {
        return this.logs.length
    }

    // Ensure that there is only one instance created
    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger()
        }        
        return Logger.instance
    }    

    log(message: string) {
        const timestamp: string = new Date().toISOString()
        this.logs.push(
            { message, timestamp }
        )
        console.log(`${timestamp} - ${message}`)
    }
}
