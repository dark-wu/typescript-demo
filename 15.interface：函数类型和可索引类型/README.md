# 接口-函数类型和可索引类型

## 函数类型
### 定义
为函数限制类型：
1. 使用interface
2. 直接为参数指定类型，返回值可进行类型推导
### 使用interface
```ts
interface GetInfo {
    (name: string, age: number): string
}
let getInfo: GetInfo = (name, age) => {
    return name;
}
```
### 直接为参数指定类型
常用这种方式
```ts
let getInfo = (name: string, age: number) => {
    return name;
}
```

## 可索引类型
同上一章所说的任意类型
```ts
interface Person {
    [prop: string]: string
}
let person: Peron = {
    test: '111', // 不会报错
}

```

