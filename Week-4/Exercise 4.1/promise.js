let STATE = {
    "FULFILLED": "FULFILLED",
    "PENDING": "PENDING",
    "REJECTED": "REJECTED",
}

module.exports = function CustomPromise(callback) {
    let onResolve;
    let onReject;

    let currentState = STATE.PENDING;
    let value = undefined;
    let isCalled = false;

    _resolve = (val) => {
        currentState = STATE.FULFILLED;
        value = val;

        if (typeof onResolve === "function") {
            onResolve(value)
            isCalled = true;
        }
    }

    _reject = (error) => {
        currentState = STATE.REJECTED;
        value = error;

        if (typeof onReject === "function") {
            onReject(value)
            isCalled = true;
        }
    }

    this.then = (callback) => {
        onResolve = callback
        if (currentState === STATE.FULFILLED && !isCalled) {
            isCalled = true;
            onResolve(value)
        }
        return this
    }

    this.catch = (callback) => {
        onReject = callback
        if (currentState === STATE.REJECTED && !isCalled) {
            isCalled = true;
            onReject(value)
        }
        return this
    }

    try {
        callback(_resolve, _reject)
    } catch (error) {
        _reject(error)
    }
}