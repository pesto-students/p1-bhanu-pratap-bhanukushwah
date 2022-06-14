const doTask = () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve("Task 1 completed.")
            }, 2000)
        } catch (error) {
            reject(error)
        }
    })
}

const doTask2 = () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve("Task 2 completed.")
            }, 2000)
        } catch (error) {
            reject(error)
        }
    })
}

const doTask3 = () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve("Task 3 completed.")
            }, 2000)
        } catch (error) {
            reject(error)
        }
    })
}

async function main() {
    const result1 = await doTask()
    console.log(result1)
    const result2 = await doTask2()
    console.log(result2)
    const result3 = await doTask3()
    console.log(result3)
}

main()

async function* generatorFunction() {
    yield console.log(await doTask())
    yield console.log(await doTask2())
    yield console.log(await doTask3())
}


let generator = generatorFunction()
generator.next()
generator.next()
generator.next()