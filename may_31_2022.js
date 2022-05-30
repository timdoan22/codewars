Check for emptiness

const isEmpty = obj => Object.keys(obj).length === 0 ? true : false

const schedule = {
    name: "John"
}

console.log(Object.keys(schedule).length)
console.log(isEmpty(schedule))