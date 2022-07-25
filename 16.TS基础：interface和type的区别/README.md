# interface和type的区别

## type的使用范围更广
type：类型别名
```ts
// 可以用来定义基本类型
type str = string
type str1 = string | number
// 可以直接使用
let str2: str1 = 2

```

## 两者都可用于描述对象或函数，语法不同
### 使用interface
```ts
// 对象
interface Person {
    name: string,
    age?: number,
}
// 函数
interface GetInfo {
    (name: string, age: number): string
}
```
### 使用type
区别中多了=号
```ts
// 对象
type Person1 = {
    name: string,
    age?: number,
}
// 函数
type GetInfo1 = (name: string, age: number) => string
```

## type：可用于类型联合，interface：可用于类型合并
### 类型联合
```ts
type p1 = {
    name: string
}
type P2 = {
    age: numer
}
type P3 = p1 | P2
let person: P3 = {
    name: 'Tom', 
    age: 18,
    gender: '男', // 会报错 P3中没有这种类型
}
```
### 类型合并
相同的interface会进行类型的合并
```ts
interface P4 {
    name: string
}
interface P4 {
    age: number
}
let person1: P4 = {
    name: 'Tom', 
    age: 18,
}
```
同时需要注意的点：
```ts
interface P4 {
    name: string
}
interface P4 {
    name: number, // 会报错 不能给相同的属性值赋值不同的类型
    age: number
}
let person1: P4 = {
    name: 'Tom', 
    age: 18,
}
```

