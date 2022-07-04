// Sum object properties

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const sumObject = obj =>
    Object.values(obj).reduce((a, b) => {
        return a + b
    }, 0)

console.log(sumObject(salaries))