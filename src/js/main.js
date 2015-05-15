import TestClass from 'modules/TestClass';

$(function () {
    var t = new TestClass('Testing this thing');
    t.sayName();
    t.setAge(35);
    t.sayAge();

    console.log('Everything working ok?');
});

export default {};
