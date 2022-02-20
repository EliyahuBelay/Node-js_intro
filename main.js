
// new way
// import fs from 'fs';

// old way
const fs = require('fs')


// mission 1
const someFunc = () => {
    let array = []
    for (let i = 1; i <= 14; i++) {
        array.push(i);
    }
    fs.writeFile('./myFile.txt', `${array}`, () => { })
}
// someFunc();

// mission 4
// fs.readFile('./myFile.txt',(err,result)=>{
//     if (err) throw err

//     console.log(result.toString());
// })

//mission 4 other one
const Print = () => {
    let arrayNames = ["eli", "ali", "bom", "alat"];
    fs.writeFile('./myFile.txt', arrayNames.toString(), (err, result) => {
        if (err) throw err
    })

    fs.readFile('./myFile.txt', (err, result) => {
        if (err) throw err

        let namesArray = result.toString().split(",")
        namesArray.forEach(element => {
            if (element[0].toUpperCase() == "A") {
                console.log(element);
            }
        });
    })
}
// Print();

// mission 5
const Print5 = () => {
    let numArray = [];
    for (let i = 0; i < 12; i++) {
        numArray.push(Math.floor(Math.random() * 101))
    }

    let divineBy3 = []
    numArray.forEach(element => {
        if (element % 3 == 0) {
            divineBy3.push(element)
        }
    });
    fs.writeFile('./myFile.txt', `${divineBy3}`, (err, result) => {
        if (err) throw err
    })

    fs.readFile('./myFile.txt', (err, result) => {
        if (err) throw err
        let numBiggerThan50 = result.toString().split(",")
        numBiggerThan50.forEach(element => {
            if (element > 50) {
                console.log(element);
            }
        });
    })
}
// Print5();


// mission 2
// let array = ["eli","beli","bom","ba","klat"]
// console.log(array);

// mission 3
// for (let i = 0; i < 16; i++) {
//     let num = Math.floor(Math.random()*11)
//     if(num%2 == 0){
//         console.log(num);
//     }
// }

////////////////////////////////////////////////


