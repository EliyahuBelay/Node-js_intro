const EventEmitter = require('events');
const fs = require('fs');

 class MyClass11 extends EventEmitter{
     constructor(){
         super()
         this.onListenFile()
     }
     onListenFile(){
         this.on("listenFile",(fileName)=>{
             fs.writeFile(fileName,"i am listening",(err,result)=>{
                 if(err) throw err
             })
         })
     }
     emitListenFile(fileName){
         this.emit("listenFile",fileName)
     }
 }

 module.exports = new MyClass11();