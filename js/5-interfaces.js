var lassie = {
    name: 'Lassie',
    numberOfLegs: 4,
    numberofPups: 0,
    isReallySmart: true
};
console.log(lassie);
function sayHello(name) {
    var someNum = 1 + 2;
    var someOtherNum = 1 + 2;
    return name;
}
var Apples = /** @class */ (function () {
    function Apples() {
    }
    Apples.prototype.setTimeOfPurchase = function (d) {
        console.log("Apples purchsed on ", d);
    };
    return Apples;
}());
var myApples = new Apples(); //We then create a new instance of the Apples class and call the setTimeOfPurchase() method.
myApples.setTimeOfPurchase(new Date(Date.now()));
//# sourceMappingURL=5-interfaces.js.map