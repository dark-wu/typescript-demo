# 接口


## 定义
对行为进行抽象，对对象进行描述，使用 interface 关键字进行定义

## 声明
```ts
interface Person {
    name: string, // 对属性类型进行描述
    age: number,
    gender: string,
}

const tom: Person = {
    name: 'Tom',
    age: 18,
    gender: '男',
    test: 'test', // 会报错 接口形状中没有声明
}

```
注意：规定类型后，增加、减少或者不同类型的属性都会报错，需要以接口的形状保持一致。

## 属性分类
分为以下几种类型：
1. 普通属性
2. 可选属性
3. 只读属性
4. 任意属性：索引签名
```ts
interface Person {
    name: string, // 普通属性
    readonly age: number, // 只读属性
    gender?: string, // 可选属性
    [prop: string]: any, // 任意属性
}
const tom: Person = {
    name: 'Tom',
    age: 18, // 重新修改会报错 因为是只读属性
    gender: '男', // 可以没有
    test: 'test', // 不会报错 以为接口中有定义任意属性
}
```
注意：任意属性中指定的类型，需要是其他类型的父集，不然其他类型会报错，或者指定已知的类型：
```ts
interface Person {
    name: string,
    readonly age: number,
    gender?: string,
    [prop: string]: string | number,
}
```

