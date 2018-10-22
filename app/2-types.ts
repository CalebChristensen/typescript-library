
/******************
 * 01 - Declaration
 ******************/

 let username: string = 'instructor'
 let instructorId: number = 9
 const password: string = 'letmein1'

/*****************
 * 02 - Basic Types
 *******************/

 let arr: string[];
 arr = ['yes', 'maybe', 'no']

 let numbers: Array<number> = [1,2,3,4,5]

 let quints: [number, string] = [3, 'tom']

 let whatever: any = '12345'

 whatever = 12345

 function kellyIsAwesome(): void {
   console.log( 'hi, kelly' )
 }

 function calebIsAwesome(): string {
   return 'hi, caleb'
 }

 const hopeIsAwesome = (): string => 'hope, you are awesome'

/****************
 * 03 - Union Types
 ****************/
let options: number | null;
let x: number | string;
let y: number | null;

x = '1234';
x = 1234;