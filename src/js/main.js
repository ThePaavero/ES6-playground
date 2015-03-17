import TestClass from 'modules/TestClass';

$(function () {
    var t = new TestClass('Lord Est');
    t.sayName();
    t.setAge(35);
    t.sayAge();
});

export default {};
