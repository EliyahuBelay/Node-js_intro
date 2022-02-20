const EventEmitter = require('events');
const fs = require("fs");


class MyClass13 extends EventEmitter{
    constructor(){
        super()
        this.onArray()
    }
    onArray(){
        this.on("listen",(arrayData)=>{
            fs.writeFile("./myFile13.txt",arrayData.toString(),(err,result)=>{
                if(err) throw err
            })
        })
    }
    emitArray(arrayData){
        this.emit("listen",arrayData);
    }
}

module.exports = new MyClass13();