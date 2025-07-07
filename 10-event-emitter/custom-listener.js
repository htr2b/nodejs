const EventEmitter = require('events')
class customEmitter extends EventEmitter {
    constructor() {
        super()
        this.greeting = 'Hello'
    }

    greet(name) {
        this.emit('greet', `${this.greeting} ${name}! How are you?`)
    }
}
const emitter = new customEmitter()
emitter.on('greet', (data) => {
    console.log(data)
})
emitter.greet('Onur')
