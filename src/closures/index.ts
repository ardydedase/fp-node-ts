const createGreeting = () => {
    const _name = 'John Doe'
    return () => console.log(`Hello ${_name}`)
}

const greeter: Function = createGreeting()
greeter()