function createObject() {
    return Object.create(null);
}

const Obj = createObject();
console.log(Obj);
console.log(Object.getPrototypeOf(Obj));