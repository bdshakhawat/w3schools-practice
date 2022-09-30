// Javascript Function


// Function Syntax
function muFunc(names,time){
    console.log(names + " am sleeping from " + time);
}
muFunc('Rahim', '10pm');
muFunc('Karim', '11pm');
muFunc('Jasim', '12pm');
console.log("My name is Shakhawat");

// Function Return (Return means get out form the function)
function myFunc(profession,designation){
    console.log('I am a physics ' +   profession + " and working as a " + designation);
    return profession + designation;
    // Return should be the last statement in a function
    console.log(3);
    // Here this last console.log(3) will not be printed
}
myFunc('Teacher', 'Lecturer');
let x=myFunc('Teacher','Lecturer');

// Local Scope(the variable decleared inside a function is known as local variable and can't be accsed from out side the function scope)
function local() {
    // let carName = "volvo";
    var carName = "volvo"
    console.log(carName);
}
local();
console.log(carName);



// 









