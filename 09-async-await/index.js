function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}

// async function asyncDelay() {
//     console.log('Async/Await example started')
//     await delay(2000)
//     console.log('This message is displayed after a 2-second delay')
//     await delay(2000)
//     console.log('Async/Await example completed')
// }
// asyncDelay()

async function divideAsync(num1, num2) {
    try {
        if (num2 === 0) {
            throw new Error('Cannot divide by zero')
        }
        return await console.log(num1 / num2)


    } catch (error) {
        console.error('Error:', error.message)
    }
}
divideAsync(10, 2)