function hasDuplicate(array) {
    let uniqueValues = new Set(array)

    return uniqueValues.size !== array.length
}

console.log(hasDuplicate([1, 2, 3]))