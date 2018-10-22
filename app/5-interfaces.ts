interface Animal {
  name: string;
  numberOfLegs: number;
}

let lassie: Animal = {
  name: 'Lassie',
  numberOfLegs: 4,
  numberofPups: 0,
  isReallySmart: true
}
console.log(lassie)

function sayHello(name: string) : string {
  let someNum = 1 + 2;
  let someOtherNum = 1+ 2;
  return name;
}

interface Product {
  name: string;
  price: number;
  setTimeOfPurchase(d: Date);
}

class Apples implements Product { //Notice that we are implementing an interface on the class. Since we are implementing our interface on the class, we are imposing its shape. Which means the calss will be required to hold the properties and methods of the interface. When we implement it, it will show an error until we add those things.
  name: 'Apples';
  price: 5.50;

  setTimeOfPurchase(d: Date) { //We implement the setTimeOfPurchase() method in the class, and provide a basic implementation of by logging the date to the console.
    console.log("Apples purchsed on ", d);
  }
}

let myApples: Apples = new Apples(); //We then create a new instance of the Apples class and call the setTimeOfPurchase() method.
myApples.setTimeOfPurchase(new Date(Date.now()));