let STATE = {
    "FULFILLED": "FULFILLED",
    "PENDING": "PENDING",
    "REJECTED": "REJECTED",
}

class CustomPromise {
    constructor(callback) {
        this.state = STATE.PENDING
        this.value = undefined
        this.error = undefined
        this.isCalled = false

        this.onResolve = this.onResolve.bind(this)
        this.onReject = this.onReject.bind(this)

        try {
            callback(this.onResolve, this.onReject)
        } catch (error) {
            this.onReject(error)
        }
    }

    onResolve(value) {
        this.state = STATE.FULFILLED
        this.value = value
    }

    onReject(error) {
        this.state = STATE.REJECTED
        this.error = error
    }

    then(callback) {
        if (this.state === STATE.FULFILLED && !this.isCalled) {
            this.isCalled = true;
            callback(this.value);
        }

        return this
    }

    catch(callback) {
        if (this.state === STATE.REJECTED && !this.isCalled) {
            this.isCalled = true;
            callback(this.error);
        }

        return this
    }
}

module.exports = { CustomPromise }