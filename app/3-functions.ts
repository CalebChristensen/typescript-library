const params = (numOne: number, numTwo: number, numThree: number) : number => { 
  return numOne + numTwo + numThree 
}

params(1,2,3) 

function demoFunction(someNum) {
  return someNum;
}

demoFunction(1); //We can call the function with a number as the argument.
demoFunction("stuff");//We can call the function with a string as an argument.
// demoFunction(1, "stuff"); we could add this in JS. But not TS

// | TYPE SAFETY IN ARGUMENTS |
function addNumbers(numOne: number, numTwo: number){
  return numOne + numTwo;
}
// 1-Works
addNumbers(1, 2);

// 2- Errors
// addNumbers(1,2,3):
// addNumbers(1,2,3,"Foo");

function sayHello(name: string) : string { //We create a type for our parameter, a string. || We use the colon followed by a type to denote a return type.
  return name;
}

sayHello("Kenn"); //We call the function and pass in a string argument. The argument satisfies the return type. So this function works.
// sayHello(1); //We call the function and pass in the wrong return type. The argument does not satisfy the return type, and so this would break.

function userInfo(username: string, password: string) : boolean {
  if (username === 'elevenfifty' && password === 'Letmein1234!') {
    return true
  }else{
    return false
  }
}
userInfo('true', 'true');

function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string){ //the someString parameter is optional.
  console.log(someString);
  return numOne + numTwo;
}
//If you hover over the function call you'll notice the type on someString? is a union type of string | undefined. If a value is passed in, it should be of type string. If a value is not passed in, it is of a type undefined.
addNumbersWithOptional(1,2); //Since someString is optional, it does not require an argument when the function is called.
addNumbersWithOptional(1,2, "This is optional"); //We can also call the function with an argument provided for someString

function fullNameOptional(first: string, last: string, middle?: string) :any {
  if(middle === '' || undefined){
    return first + last;
  }else{
    return first + middle + last;
  }
}

console.log(fullNameOptional('Caleb',' Christensen', ''));