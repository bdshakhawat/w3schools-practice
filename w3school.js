// Javascript Function


// Function Syntax
// function muFunc(names,time){
//     console.log(names + " am sleeping from " + time);
// }
// muFunc('Rahim', '10pm');
// muFunc('Karim', '11pm');
// muFunc('Jasim', '12pm');
// console.log("My name is Shakhawat");

// Function Return (Return means get out form the function)
// function myFunc(profession,designation){
//     console.log('I am a physics ' +   profession + " and working as a " + designation);
//     return profession + designation;
//     // Return should be the last statement in a function
//     console.log(3);
//     // Here this last console.log(3) will not be printed
// }
// myFunc('Teacher', 'Lecturer');
// let x=myFunc('Teacher','Lecturer');

// Local Scope(the variable decleared inside a function is known as local variable and can't be accsed from out side the function scope)
// function local() {
//     // let carName = "volvo";
//     var carName = "volvo"
//     console.log(carName);
// }
// local();
// console.log(carName);



// Javascript Object
// const car = {
//     name: "Fiat",
//     model: 500,
//     weight: "900kg",
//     color: "white",
//     start: function(){
//         this.drive();
//         console.log("The car has started");

//     },
//     drive: function(){
//         console.log("Car is driving");
//     }

// }

// Accessing the object properties
// console.log(car.weight); 
// console.log(car['model']);
// output 900kg
// To call the function 
// car.start();

// Object literal
// let x=5;
// console.log(x);
// console.log(typeof x);
// output 5  Number
// let x = new Number(5);
// console.log(typeof x);
// output object

// Basic syntax of Class(Class is a template of creating an object )
class car {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    run() {
        console.log(this.name + ' is running');
    }
}
// Creating a real class 
const BMW = new car('bmw', 1998);
BMW.run();















