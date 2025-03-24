"use strict";
let number = [2, 3, 5];
console.log(number);
let person = { name: "rahi", age: 24 };
console.log(person.age);
function add(a, b) {
    return a + b;
}
console.log(add(5, 5));
let value = "rahi";
//value=10
console.log(value);
var Role;
(function (Role) {
    Role[Role["Admin"] = 100] = "Admin";
    Role[Role["User"] = 500] = "User";
    Role[Role["Guest"] = 400] = "Guest";
})(Role || (Role = {}));
console.log(Role.User);
let Person = ["Abd", 5];
console.log(Person);
let userid1 = 123;
let userid5 = "22-46947-1";
console.log(userid5);
let val;
val = 2;
//val="Rahi"
console.log(val);
let sta;
sta = "success";
console.log(sta);
let u1 = { name: "rahi", age: 10 };
console.log(u1);
function add1(value) {
    return value;
}
let num = add1("sssss");
console.log(add1(20));
console.log(num);
function add2(value, second) {
    return [value, second];
}
let num2 = add2(10, "shehryar");
console.log(num2);
class abd {
    constructor(value) {
        this.ab = value;
    }
    getData() {
        return this.ab;
    }
}
let nData = new abd(100);
console.log(nData);
console.log(nData.getData());
let nData1 = new abd("ZGH");
console.log(nData1.getData());
//# sourceMappingURL=typ.js.map