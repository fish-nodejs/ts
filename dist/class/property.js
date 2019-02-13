"use strict";
// 接口确定了一个类必须有哪些属性和方法，有用！
// Java的设计真的工程化
// 对于接口中的属性和方法，类必须： 在类中声明，在构造函数中初始化
class Person {
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log(this.name);
    }
}
Person.count = 0;
class Chinese extends Person {
}
