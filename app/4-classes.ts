class Person {
  firstName: string;
  lastName: string;

  sayHello(){
    console.log("Hello", this.firstName, this.lastName)
  }
}

let david:  Person = new Person()

david.firstName = 'David'
david.lastName = 'Whitt'

david.sayHello();

class Football {
  quarterBack: string;
  quarterBackRating: number;
  starter: boolean;
  superBowls: null;
}

let lions: Football = new Football()

lions.quarterBack = 'Matthew Stafford'
lions.quarterBackRating = 158.3
lions.starter = true
lions.superBowls = null

class Game {
  constructor(name: string, maker: string){
    this.gameName = name;
    this.gameMaker = maker;
  }
  gameName: string;
  gameMaker: string;
}

let battleship: Game = new Game('Battleship', 'Hasbro');

class Vehicle {
  type: string;
  make: string;
  model: string;
  manufactureYear: number;
  runs: boolean;
  topSpeed: number;
}

class Automobile extends Vehicle {
  isSelfDriving: boolean;
}

// | EXAMPLE ONE |
let myCar: Automobile = new Automobile(); //The extends keyword declares that the class is going to inherit all of the properties and methods from another class. This is called subclassing. Both Motorcycle and Automobile inherit from Vehicle.
myCar.isSelfDriving = false; //Note that these are properties declared in the subclass. The Motorcycle class does not have access to the isSelfDriving property  and the Automobile class does not have access to easyToDoWheelie.
myCar.topSpeed = 200; //These are properties from the parent class, the Vehicle class. They are inherited properties.
myCar.make = "Volvo";

// | EXAMPLE TWO |
class Motorcycle extends Vehicle {
  easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;

// | Create a class with two subclasses that share properties and include unique ones |
class Animal {
  spots: boolean;
  size: string;
  height: number;
}

class Bear extends Animal {
  eatsMeat: boolean;
}

let brownBear: Bear = new Bear();
brownBear.eatsMeat = true;
brownBear.size = 'Large';

class Tiger extends Animal {
  isAwesome: boolean;
}

let bengalTiger: Tiger = new Tiger();
bengalTiger.spots = false;
bengalTiger.isAwesome = true;

// | Property Types and Accessors |
// class Store {
//   constructor(name: string, city: string){
//     this.name = name;
//     this.city = city;
//   }
//   name: string;
//   city: string;
// }

// let ikea: Store = new Store('Ikea', 'Fishers');

class Store { //We add a public accessor.
  constructor(public name: string, public city: string){} //With this approach we don't have to do all of the bindings for our properties inside of our constructor.
}
let ikea: Store = new Store('Ikea', 'Fishers');

class Employee extends Person{ //We have a class called Employee that extends Person
  private _salary: number; //We create a private property, denoted by the private keyword. It is common practice to see private properties in classes start with an underscore. This is not required. It is just common convention.

  getSalary(): string { //We have a method called getSalary() that retuns a string. Inside the method, we perform so low level business logic of converting the salary number value to a string in the return statement.
    return this._salary.toString();
  }
  setSalary(newSalary: number){ //We have  amethod called setSalary that takes in a number. It sets the value of the private property to the value that is passed in as an argument. These are both number types.
    this._salary = newSalary;
  }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0; THIS BREAKS
let salaryResult: string = newEmployee.getSalary();
console.log("The salary is:", salaryResult);
