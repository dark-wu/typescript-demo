# 函数类型和参数

## 在JavaScript中声明的方式
```ts
// 函数声明
function add(x, y) {
    return x + y;
}
// 函数表达式
const add1 = function (x, y) {
    return x + y;
}

```
## 在TypeScript中声明的方式
ts通常可以推导返回值的类型，返回值的类型制定可省略
### 每个函数单独制定类型
```ts
// 函数声明
function add2(x: number, y: number): number {
    return x + y;
}
// 函数表达式
const add3 = function (x:number, y:number) {
    return x + y;
}
```
### 使用interface或type来抽取公共类型
```ts
// interface
interface Add {
    (x: number, y: number): number
}
// type
type Add1 = (name: string, age: number) => number
// 使用
let myAdd: Add = function (x, y) {
    return x + y;
}
let myAdd1: Add1 = function (x, y) {
    return x + y;
}
```

## 函数参数
### 可选参数
```ts
// 可选参数放在确定参数的后面
function add(x: number, y?: number) {
    return y ? x + y : x;
}
```
### 默认参数
```ts
// 默认参数可以放在确定的参数前面
function add2(x: number, y: number = 0) {
    return x + y;
}
// 或者y的类型制定可以不用写，ts会进行类型推导
function add2(x: number, y = 0) {
    return x + y;
}
// 默认参数在确定参数前面的调用示例
function add2(x = 0, y: number) {
    return x + y;
}
add2(undefined, 1);
```
### 剩余参数
```ts
// 剩余参数的类型需要用数组去指定类型
function add3(x: number, y: number, ...rest: number[]) {
    let restSum = rest.reduce((prev, cur) => prev + cur);
    return x + y + restSum;
}
```
