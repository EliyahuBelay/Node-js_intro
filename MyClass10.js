const EventEmitter = require('events');

class MyClass10 extends EventEmitter{
    constructor(){
        super()
        this.onListen()
    }
    onListen(){
        this.on("listening",()=>{
            console.log("i am listening");
        })
    }
    emitListen(){
        this.emit("listening")
    }
}

module.exports = new MyClass10();