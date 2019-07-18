//Named Function

var x=10;
x="Hello";
var y=20;

console.log("Addition of "+x+'and'+y+ addNums(x,y));

function addNums(x,y)
{
    console.log(x+y) //void_function
    return x+y;
}
console.log("Addition of "+x+'and'+y+ addNums(12,12));

console.log('Addition of strings' + addNums('Learning ','JS'))

console.log('Addition of Adition' + addNums('12','45'))

console.log('Addition is' + addNums('Hello'))
console.log(typeof addNums)


console.log('-----------------------------------------------------------------------------')
// Anonymous Function ---  function which has no name, it can also has parameters


var res=function(){
    console.log('Anonymous Function')
}

res();  //function variable

//IIFE -- Immediately Invoke Function Expressions


(function(a,b){
        console.log(a-b)
 })(78,45)


// constructure function CAPITAL O

var a1=[]
console.log(a1)
var arr=[2,3,45,45,12] //Array Shorthand notation

for(var a in arr){
    console.log(arr[a]);
}

var a2=new Array()
console.log(a2)


function Employee(eid,fname,lname){
    this.eid=eid
    this.fname=fname
    this.lname=lname
}

//using function prototype

//Employee.prototype.age=22

var e1= new Employee(101,'Shivam','Shukla')
//e1.age
e1.age=23
console.log(e1)