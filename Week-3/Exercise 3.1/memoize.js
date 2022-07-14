/**
 * Memoize 
 * @param {fuction} reducer - function that will perform some computation and return the result.
 */
function memoize(reducer) {
    let cachedResults = []

    return (...args) => {
        let cacheKey = args.map(arg => '>' + arg.toString()).join("")

        let computedResult = cachedResults.find((result) => Object.keys(result)[0] === cacheKey)

        if (!computedResult) {
            computedResult = reducer(...args)
            cachedResults.unshift({ [cacheKey]: computedResult })
        }
        return computedResult
    }
}

/**
 * Addition function
 * @param {number} a 
 * @param {number} b 
 * @returns  sum of the arguments
 */
function add(a, b) {
    return a + b
}

// create the memoized add function
const memoizeAdd = memoize(add)


// some of the examples
console.log(memoizeAdd(1, 2))
console.log(memoizeAdd(1, 2))
console.log(memoizeAdd(1, 2))
console.log(memoizeAdd(2, 2))
