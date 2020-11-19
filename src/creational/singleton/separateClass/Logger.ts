// Logger.ts

export class Logger {
    private logs: object[]
    constructor() {
        this.logs = []
    }

    get count(): number {
        return this.logs.length
    }

    log(message: string) {
        const timestamp: string = new Date().toISOString()
        this.logs.push(
            { message, timestamp }
        )
        console.log(`${timestamp} - ${message}`)
    }
}

// Singleton class we have added below.

export class Singleton {
    // Use the `Logger` type
    private static instance: Logger
    // Use a private constructor
    private constructor() {}

    // Ensure that there is only one instance created
    public static getInstance(): Logger {
        if (!Singleton.instance) {
            Singleton.instance = new Logger()
        }        
        return Singleton.instance
    }
}