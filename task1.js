const obj = {
    a: 1,
    hello: 2,
    '': 3,
    123: 4,
    var: 5,
};

function printOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ": " + obj[key]);
        }
    }
}

printOwnProperties(obj);
