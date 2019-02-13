"use strict";
let num = 123;
let str = 'hello world';
let bool = false;
let tup = ['lishuai', 343];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
let list1 = [1, 2, 3];
let list2 = [1, 2, 3];
let notSure = 4;
notSure.ifItExists();
// okay, ifItExists might exist at runtime
notSure.toFixed();
// okay, toFixed exists (but the compiler doesn't check)
let prettySure = 4;
// prettySure.toFixed(); 
// Error: Property 'toFixed' doesn't exist on type 'Object'.
function warnUser() {
    console.log("This is my warning message");
}
let u = undefined;
let n = null;
let aaa = 3;
// aaa.length()
// properyies don't exist in number
