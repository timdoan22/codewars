// Multiply numeric property values by 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function mulitplyNumeric(obj) {
    Object.keys(obj).forEach(function (key) {
        if (obj[key] > 0) {
            obj[key] *= 2
        }
    })
}

mulitplyNumeric(menu)
console.log(menu)