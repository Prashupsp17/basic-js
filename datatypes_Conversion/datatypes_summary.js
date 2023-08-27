// Stack and Heap Memory in Js


// Stack (primitive) , Heap (Non-primitive)

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);