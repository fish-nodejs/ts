export default interface IndexedArray {
  [index: number]: string;
  // 虽然index array 都应该有length
  // 但是为了保持TS的风格，还是应该显示的声明一下
  length: number
}