
function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}

// console.log('Promises example started')
// delay(2000).then(() => {
//     console.log('This message is displayed after a 2-second delay')
// }).then(() => {
//     console.log('Promise example completed')
// })

function divide(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject(new Error('Cannot divide by zero'))
        } else {
            resolve(num1 / num2)
        }
    })
}

console.log('Division example started')
divide(10, 2).then(result => {
    console.log('Result:', result)
}).catch(error => {
    console.error('Error:', error.message)
}).finally(() => {
    console.log('Division example completed')
})
