const EventEmitter = require('events');

class MyClass extends EventEmitter{
    constructor(){
        super()
        this.onPrintName()
        this.onDoNow()
        this.onPrintNames()
    }
    onPrintName(){
        this.on('printName',(data)=>{
            console.log(`HELLO THERE ${data}`);
        })
    }
    emitPrintName(data){
        this.emit('printName',data)
    }
    onDoNow(){
        this.on("doNow",(data)=>{
            console.log(data);
        })
    }
    emitDoNow(data){
        this.emit("doNow",data)
    }
    onPrintNames(){
        this.on("printNames",(data,num)=>{
            for (let i = 0; i < num; i++) {
                console.log(data);
            }
        })
    }
    emitPrintNames(data,num){
        this.emit("printNames",data,num)
    }
}


module.exports = new MyClass();
