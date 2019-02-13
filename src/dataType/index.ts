let num: number = 123
let str: string = 'hello world'
let bool: boolean = false

let tup: [string, number] = ['lishuai', 343]

enum Color {Red, Green, Blue}
let c: Color = Color.Green

let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

let notSure: any = 4;
notSure.ifItExists(); 
// okay, ifItExists might exist at runtime
notSure.toFixed(); 
// okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
// prettySure.toFixed(); 
// Error: Property 'toFixed' doesn't exist on type 'Object'.

function warnUser(): void {
  console.log("This is my warning message");
}

let u: undefined = undefined;
let n: null = null;

let aaa = 3
// aaa.length()
// properyies don't exist in number