const CustomPromise = require('./promise')

function getNumber() {
    return Math.floor(Math.random() * 10000)
}


const promise = new CustomPromise((resolve, reject) => {
    let number = getNumber()

    if (number % 5 === 0) {
        resolve(`The number ${number} is divisible by 5`)
    } else {
        reject(`The number ${number} is not divisible by 5`)
    }
})

promise.then((value) => {
    console.log("value", value)
}).catch((error) => {
    console.log("error", error)
}) 