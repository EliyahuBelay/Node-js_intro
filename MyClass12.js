const EventEmitter = require('events');
const fs = require("fs");


class MyClass12 extends EventEmitter{
    constructor(){
        super()
        this.onGetFileNData()
    }
    onGetFileNData(){
        this.on("listen",(fileName,somedata)=>{
            fs.writeFile(fileName,somedata.toString(),(err,result)=>{
                if(err) throw err
            })
        })
    }
    emitGetFileNData(fileName,somedata){
        this.emit("listen",fileName,somedata)
    }
}

module.exports = new MyClass12();