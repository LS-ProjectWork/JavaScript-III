/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When a function is in the global scope, the 'this' keyword will point to the window.
* 2. When the "this" keyword is used inside an object, it points to that object.
* 3. When the "this" keyword is used on a constructor function, it is referring to the object that will be created
and is returned by the constructor function.
* 4. Whenever the "call" or "apply" methods are used on a constructor function, the "this" keyword refers 
to an object that is explicitly stated.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function introduce(name) {
    console.log(this);
    return `Hello, my name is ${name}`
}

introduce('John');

// Principle 2

// code example for Implicit Binding
const guard = {
    commander: 'King George IV',
    weapon: 'sword',
    orders: function() {
      return `Here are the new orders from ${this.commander}: 'Prepare my ${this.weapon}.'`
    }
  }
  
  console.log(guard.orders())

// Principle 3

// code example for New Binding
function Birthday(date){
    this.date = date;
    this.age = function() {
        return `My birthday is ${this.date}`;
    }
}

const jessica = new Birthday('May 23rd');
console.log(jessica.age());

// Principle 4

// code example for Explicit Binding
const jordan = {
    age: 23
}

function howOldAreYou(){
    debugger;
    return `I am ${this.age} years old.`
}

console.log(howOldAreYou.call(jordan))