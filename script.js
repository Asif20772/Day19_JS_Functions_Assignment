let x = -210
if(x>0) {
    console.log('The number is positive and value is', x);

}
else {
    if(x==0) {
        console.log('The number is zero');
    }
    else
    console.log('The number is negative and value is :', Math.abs(x));
}

console.log('FUNCTIONS');

// function fullname(fname, mname, lname) {
//     return fname+' '+mname+' '+lname
//     }
// let x1 = 'Asif'
// let y1 = 'Ahmad'
// let z1 = 'Khan'

//     console.log("My Full name is", fullname(prompt("Enter your frist name"),prompt('Enter your middle name'),prompt('Enter your last name')));

console.log('ARROW FUNCTION');


let arrow = (n) => n*n
console.log((arrow(3)));


console.log('Areas Assignment');
let Cricle_Area = (radius) => 3.14*radius**2
console.log(Cricle_Area(prompt('Enter Radius of circle?')), "is the Area of the circle");

let Rectangle_Area = (l,w) => l*w
console.log(Rectangle_Area(prompt('Enter length of rectangle?'), prompt('Enter width of rectangle')), "is the Area of the Rectangle");

let Triangle_Area = (h,b) => (h*b)/2
console.log(Triangle_Area(prompt('Enter Height of Triangle?'), prompt('Enter Base of Triangle')), "is the Area of the Triangle");

console.log('Temperature Conversions');

let ToFahrenheit = (c) => (c*(9/5)) + 32
console.log(ToFahrenheit(prompt('Enter the temperature in celcius')), 'is the temperature in Fahrenheit');

let Tocelcius = (f) => ((f-32)*5)/9
console.log(Tocelcius(prompt('Enter the temperature in Fahrenheit')), 'is the temperature in Celcius');