// 7 primitives in JS

// Null Type
typeof null === "object";

// Undefined Type
let unknown;

// Boolean Type
const isActive = true;

// Number Type
let number = 5;

// BigInt Type
const Range = BigInt(0, number);

// String Type
const string = "Hello World";

// Symbol Type
const mySymbol1 = Symbol("description");
const mySymbol2 = Symbol("description");
console.log(mySymbol1 === mySymbol2);

//arrays
let myarray = ['overridellllllllllll'];

//objects
const mygroup = {
    groupmember1: "devon",
    groupmember2: "alex",
    groupyear: 2026,
    name() {
        let x = "Testing"
        return x
    }

    ////displaymygroup: function() 
     ///   {console.log('our group is ${this.groupmember1} ${this.groupmember2} ${this.groupyear}');
    ///}
};
let xyz = mygroup.name;
document.getElementById('text').textContent = mygroup.name();