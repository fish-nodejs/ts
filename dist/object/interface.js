"use strict";
class Adult {
    constructor(name) {
        this.name = name;
    }
}
let p;
// OK, because of structural typing
p = new Adult('lishuai');
// 这种面向接口的编程真的好，
// 完美保留字面量写法的灵活，解决了带来的随意性
