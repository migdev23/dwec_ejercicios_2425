function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this._age = age;
    this.eyeColor = eye;
    this.language = "";

    Object.defineProperty(this, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
    });
}

const myFather = new Person("John", "Doe", 50, "blue");
myFather.edad = 5;
console.log("My father is " + myFather.edad);
