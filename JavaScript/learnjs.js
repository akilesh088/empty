// function submit(){
//             alert('Hello');
//             console.log('world');
// }
// console.log('Hello');

//                                  // Variables
//                                  // let introduced in ES6

// var vname='hodor';
//     vname='jj';
// let lname='Hodor';
//     lname='jj';
// const pi=3.14;
//     // pi=9; no reassigning

//     console.log(vname,lname,pi);

//                                     // Arrow function:

// const add=(a,b) => {return a+b };
// console.log(add(4,5))



// const people={ name:"bob",age:20};
// const{name,age}=people;
// console.log(people.name,people);

// const arr1=[1,2,3,4];
// const arr2=[...arr1,5,6,7,8];
// console.log(arr1,arr2);

//                                       //  REST in function

// function sum(...num){
//     return num.reduce((acc,num)=> acc+num ,0);
// }
// console.log(sum(1,2,3,4,56,));

//                                            // Objects in js

// const O1={name:'kk',age:63};
// const O2=new Object();
// O2.name='hh';
// O2.age=65;

// const PersonDetails={
//     name:'Akil',
//     age:21,
//     car:{
//         car1:'Nissan',
//         model:1999
//     }
// };

// console.log(PersonDetails.car.car1,PersonDetails.car.model);

// const pdetails=Object.values(PersonDetails);
// document.getElementById("pdetails").innerHTML=pdetails;

// console.log(Object.entries(PersonDetails));
// console.log(Object.keys(PersonDetails));

                                        // Variables  (let,var,const)

// function varEx(){
//     var x=10;
//     console.log("Function block "+x);

//     if(true){
//         var x=20;
//         console.log("If block "+x);
//     }

//     console.log( "Reassigning is possible "+x);

// }
// varEx();

// function letEx(){
//     let x=10;
//     console.log("Function block "+x);

//     if(true){
//         let x=20;
//         console.log("If block "+x);
//     }

//     console.log( "Reassigning is not possible "+x);

// }
// letEx();

// function constEx() {
//     const z = 30;
//     console.log("Function block "+z); // Output: 30

//     // z = 40; //Cannot reassign a const variable.

//     if (true) {
//         const z = 50; //  Allowed because it's a new z in a different block
//         console.log("If block "+z); // Output: 50
//     }

//     console.log( "Reassigning is not possible "+z); // Output: 30 (Original z remains unchanged)
// }

// constEx();


//                                               // Datatypes
//                     // Primitive                                    

// // String 

// let n='oop';
// console.log(typeof(n));

// // Number

// let f=38;
// console.log(typeof(f));

// // Boolean

// let t=true;
// console.log(typeof(t));

// // Bigint

// let n1=23432969238402356n;
// console.log(typeof(n1));

// // Symbol

// let u= Symbol('id');
// console.log(typeof u);

//                      // Non-Primitive

// // Objects

// let me={name:'akil', age:22};
// console.log(typeof me);

// let fruit=['apple','mango','guava'];
// console.log(typeof fruit);

                                             //  Type conversion

                  //Implicit conversion

//String

// console.log("4"  +3);
// console.log( "4"+true);

// // Number
// // Except '+' everthing convert to number by default. 

// console.log("10" - 5); 
// console.log("5" * "2"); 
// console.log("100" / "10"); 
// console.log("5" - true); 

// // Boolean conversion

// console.log(Boolean("Hello")); 
// console.log(Boolean(""));
// console.log(Boolean(0)); 
// console.log(Boolean(1)); 
// console.log(Boolean([]));
// console.log(Boolean(null));

//                      //Explicit conversion

// // convert to String

// console.log(String(100));
// console.log(String(true));
// console.log((1234).toString());

// //convert to Number

// console.log(Number("123"));
// console.log(Number("123asd"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(parseInt("43.65"));
// console.log(parseFloat("54.97"));

// // convert to Boolean

// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean("Hello"));
// console.log(Boolean(""));
// console.log(Boolean([]));
// console.log(Boolean([1,2,3]));
// console.log(Boolean(null)); 

                                      //Hoisting
                                      
// using variables before declaration

// console.log(x);
// var x=0;

// console.log(y);  //cause reference error
// let y=0;

// console.log(z);//error in code
// const z=0;

                                       //Function in js

//Function declaration

// function gr(){
//     console.log('hello');
// }

// // function Expression

// const greet= function(){
//     console.log('greetings');
// };


// // Arrow functions

// const greeting=()=>{
//     console.log('hello!');
// };


// gr();
// greet();
// greeting();

//                                       //lexical and closure
//          // Lexical scope

// //child can access variables in parent functions

// function outer(){
//     let a=5;

//     function inner(){
//         let b=4;
//         console.log('inner func is accesing variable from its parent func');
//         console.log(a+b);
//     }

//     inner();
// }

// outer();
 
//         // Closure
// // child can access and holds on to the inner function.
// // here data is encapsulated as a private variable
// // we can only change value of value by only callin the methods. 

// function outer1(){
//     let count=0;

//     return function inner1(){
//         count++;
//         console.log(count);
//     };
// };

// const counter=outer1();

// counter();
// counter();
// counter();

                                                                  //classes and inheritance


// class Animal{
//     constructor(name){
//         this.name=name;
//     }
//     speak(){
//         console.log(`${this.name} is barking`);

//     } 
// }
// class Dog extends Animal{
//     speak(){
//         console.log(`${this.name} barks`);
//     }
// }
// const dog=new Dog("Hima");
// const animal=new Animal("Trex");
// animal.speak();
// dog.speak();

                                    //Objects and prototypes

        // Basic Object
const student1={
    name:'akil',
    id:'501',
    major:'ECE'
};

        //Object prototype

function employee(fname,lname,age,role){
this.fname=fname;
this.lname=lname;
this.age=age;
this.role=role;
this.lang='English';//Default property for all new object created
};


        //adding a new function as property

employee.prototype.name=function(){
    return this.fname+" "+this.lname;
};

const employee1=new employee('hari','sudhan',22,'backend');
const employee2=new employee('siva','kumar',23,'backend');

        //adding new property
    
employee.prototype.exp=8;

        //Object methods 

let details=Object.entries(employee1);

console.log(details);
console.log(employee1.exp);
console.log(employee2.name());


let employee3=Object.assign(employee1,employee2);
let detail3=Object.entries(employee3);

console.log(detail3);


           // Getter and setter in objects

function student(fname,lname,dob,major){
    this.fname=fname,
    this.lname=lname,
    this.dob=dob,
    this.course=major,
    this.fullname="",
    Object.defineProperty(this,'fullname',{
        get: function(){
            return this.fname+" "+lname;
        }
    });
};
let stu1=new student('sri','nath',2003,'ECE');
console.log(Object.entries(stu1));

                                        