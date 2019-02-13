function log(): void{
  console.log('hello world')
}

function sum(arr: Array<number>): number{
  let sum = 0
  arr.forEach(element => {
    sum += element
  })
  return sum
}
// sum([1,2,3,4])