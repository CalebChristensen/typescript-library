var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log("Hello", this.firstName, this.lastName);
    };
    return Person;
}());
var david = new Person();
david.firstName = 'David';
david.lastName = 'Whitt';
david.sayHello();
var Football = /** @class */ (function () {
    function Football() {
    }
    return Football;
}());
var lions = new Football();
lions.quarterBack = 'Matthew Stafford';
lions.quarterBackRating = 158.3;
lions.starter = true;
lions.superBowls = null;
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    return Game;
}());
var battleship = new Game('Battleship', 'Hasbro');
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
// | EXAMPLE ONE |
var myCar = new Automobile(); //The extends keyword declares that the class is going to inherit all of the properties and methods from another class. This is called subclassing. Both Motorcycle and Automobile inherit from Vehicle.
myCar.isSelfDriving = false; //Note that these are properties declared in the subclass. The Motorcycle class does not have access to the isSelfDriving property  and the Automobile class does not have access to easyToDoWheelie.
myCar.topSpeed = 200; //These are properties from the parent class, the Vehicle class. They are inherited properties.
myCar.make = "Volvo";
// | EXAMPLE TWO |
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;
// | Create a class with two subclasses that share properties and include unique ones |
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bear = /** @class */ (function (_super) {
    __extends(Bear, _super);
    function Bear() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bear;
}(Animal));
var brownBear = new Bear();
brownBear.eatsMeat = true;
brownBear.size = 'Large';
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tiger;
}(Animal));
var bengalTiger = new Tiger();
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
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    } //With this approach we don't have to do all of the bindings for our properties inside of our constructor.
    return Store;
}());
var ikea = new Store('Ikea', 'Fishers');
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newEmployee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0; THIS BREAKS
var salaryResult = newEmployee.getSalary();
console.log("The salary is:", salaryResult);
//# sourceMappingURL=4-classes.js.map