class TestClass {

    constructor(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }

    sayName() {
        console.log('My name is "' + this.name + '"');
    }

    sayAge() {
        var age = this.age || 555;
        console.log('My age is ' + age);
    }
}

export default TestClass;
