'use strict'

var x=10;
var y=10.5;
var s="Shiv"
var z="Hello"
var isBreak=false
var noval;
var someVal= null

var obj = {} //Object
console.log(obj +' type is'+ typeof obj)

console.log("10"-10)

console.log(x)
console.log(typeof x)

console.log(y)
console.log(typeof y)

console.log(z)
console.log(typeof z)

console.log(isBreak)
console.log(typeof isBreak)

console.log(noval)
console.log(typeof noval)

console.log(null)
console.log(typeof null)

console.log('Value of '+  x +' and type of is '+ typeof x);
console.log('Value of '+  y +' and type of is '+ typeof y);
console.log('Value of '+  z +' and type of is '+ typeof z);
console.log('Value of '+  isBreak +' and type of is '+ typeof isBreak);


var person={
    name:'Shivam',
    age:20,
    isEmployed:true
}

console.log(person)

// short hand notation of object

var x1={}

var per={
    name:'Shivam',
    age:20,
    isEmployed:true
}

console.log(per.name===person.name)

console.log(x1===obj)


// long hand notation of creating object

var newObj = new Object();

console.log(newObj)


newObj.fname='Shukla'
newObj.cname='JAVA_FULL_STACK'
newObj.isWorking=true

console.log(newObj)

console.log(newObj.cname)

console.log('-------------------------------------------')
            
console.log(1==='1') //false

console.log(1=='1') //true
            
console.log(2!=='2') //true

