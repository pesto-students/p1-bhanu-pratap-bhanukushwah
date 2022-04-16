function createStack() {
    let items = []
    return {
        push(item) {
            items.push(item)
            console.log(items)
        },
        pop() {
            items.pop()
            console.log(items)
        }
    }
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items)


/* In the previous implement we were returning the whole info event the items array which can be directly accessed by anyone and also
can be modified which breaks encapsulation. 

In the current implementation we fixed the issue by declaring items array as an local function vairable which has limited scope to the current
function and the inner functions also can access that value as per concept of closure. But now no one can direclty update or read the items array.
 */