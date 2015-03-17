import TestClass from 'modules/TestClass';

$(function () {
    var wtf = new TestClass('Lord Est');
    wtf.sayName();
    wtf.setAge(35);
    wtf.sayAge();
});

export default {};
