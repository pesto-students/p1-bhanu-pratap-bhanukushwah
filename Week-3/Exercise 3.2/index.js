let person = {
    firstName: 'Bhanu',
    lastName: 'Kushwah',

    fullName: function () {
        return this.firstName + ' ' + this.lastName
    }
}

console.log(person.fullName()) // It will return Bhanu Kushwah as it refers to the objects 'this'

let displayFullName = person.fullName
console.log(displayFullName()) // this will return undefined as it now refers to global context which doesn't have firstName and lastName

let displayFullNameWithBind = person.fullName.bind(person)
console.log(displayFullNameWithBind()) // this will return Bhanu Kushwah as now this bind method create a new function where this refers to the parameter passed in the parenthesis


function displayWelcomeMessage(organization) {
    return `Hi ${this.firstName}, Welcome to the ${organization}!`
}

console.log(displayWelcomeMessage('Pesto')) // here "this" refers to global context and doesn't have firstName'

let displayWelcomeMessageWithCall = displayWelcomeMessage.call(person, 'Pesto') // in call we can pass args as arg1, arg2, arg3
console.log(displayWelcomeMessageWithCall) // Hi Bhanu, Welcome to the Pesto!

let displayWelcomeMessageWithApply = displayWelcomeMessage.apply(person, ['Pesto']) // when we use apply the second parameter is an array of arguments
console.log(displayWelcomeMessageWithApply) // Hi Bhanu, Welcome to the Pesto!

