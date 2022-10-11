// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
    this.name = name,
    this.age = age
    this.stomach = []
// this.name and this.age are parameter instances that will have arguments passed through
// this.stomach is the instance that creates the empty array
}

Person.prototype.eat = function(edible){
// Here we are creating a method called .eat by using the Person function and prototype syntax = to function and passing edible as a parameter.
if(this.stomach.length < 10){
  this.stomach.push(edible)
  }
// if the amount of edible is the array of stomach is less than 10 than .push (or add) edible to the stomach array.
}

Person.prototype.poop = function(){
  this.stomach = [];
// Here we create a method called .poop and say that when Person poops the .stomach array will be emptied

// We want to create the empty array again within the function to overwrite the full array above when this method is ran.
}

Person.prototype.toString = function() {
  return `Hello my name is ${this.name} and I am ${this.age} years old`
}


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, mpg) {
    this.model = model;
    this.milesPerGallon = mpg;
    this.tank = 0;
    this.odometer = 0;
}

Car.prototype.fill = function(gallons) {
    this.tank = this.tank + gallons;
}

Car.prototype.drive = function(distance) {
    
}


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  // to subClass is to .call another constructor function. You do this by using the name of the other name.call(this, param, param ect if needed) 
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
// this constructor has inherited Persons attributes, name and age
}
// Baby method  =  new object ( Person method )
Baby.prototype = Object.create(Person.prototype);
// This syntax allows the Baby to inherit the Persons methods.


// Baby.prototype.play is like saying nameofconstructorfunction.method.nameofmethod = function()
Baby.prototype.play = function() {
      return ` ${this.name} age ${3} likes to play with ${this.favoriteToy}`
}





/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Window binding - is a global binding when .this has no context to grab, so it go to the global level.
  2. implicit binding - comes from withing a object in a function and grabs from within the function. 
  3. explicit binding has .call to bind a new object to a function.
  4. new binding - is a type of function templet that can be used at a later time when declaring variables with different values.
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
