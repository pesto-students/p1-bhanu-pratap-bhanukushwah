function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }

    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }
    return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?

/* Answer :- The above function will log the message as "Count is 0". As javascript is a synchronous language
So it will go line by line. It will first declare and initalize the count variable with 0 and then it create a declaration
of the increment function which will increase the value of the count then in the next line we are assigning the message variable
the count value which is zero at that time and inside log function we are logging out the message. The important part is here 
we are not logging the message value which is initialized and stored and not recalculating so it will always return Count is 0.
*/