let fibonacci = {
    currentValue: 0,
    nextValue: 0,

    [Symbol.iterator]() {
        return this
    },

    next() {
        if (this.nextValue === 0) {
            this.nextValue = 1;
            return { value: 0, done: false }
        }

        nextCalculatedValue = this.currentValue + this.nextValue
        this.currentValue = this.nextValue;
        this.nextValue = nextCalculatedValue;

        return { value: this.currentValue, done: this.currentValue > 10 }
    }
}

for (x of fibonacci) {
    console.log(x)
}