const EventEmitter = require('events');
const fs = require("fs");

class MyClass14 extends EventEmitter{
    constructor(){
        super()
        this.onArraySmall()
    }
    onArraySmall(){
        this.on("listen",(array)=>{
            let newArray = [];
            array.forEach(element => {
                if (element < 18) {
                    newArray.push(element)
                }
            });
            fs.writeFile("./myFile14.txt",newArray.toString(),(err,result)=>{
                if(err) throw err
            })
        })
    }
    editArraySmall(array){
        this.emit("listen",array)
    }
}

module.exports = new MyClass14();