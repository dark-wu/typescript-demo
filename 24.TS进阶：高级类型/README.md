# 高级类型

ts为了保证语言的灵活性， 从而引进的语言特性
## 交叉类型
交叉类型将多个类型合并为一个新类型，新类型具有这多个类型的所有特性，通常在对象混入（mixin）的场景使用交叉类型。交叉类型使用 & 分隔每一个类型。
```ts
interface IPerson {
    name: string;
    height: number;
}
interface IMan {
    age: number;
    height: string;
}
type Driver = IPerson & IMan & { weighet: string };

const driver: Driver = {
    name: 'Tom',
    age: 18,
    weight: 100,
    height: 180, // number & string = never; Type 'number' is not assignable to type 'never'.
}
```

## 联合类型

## 索引类型

## 映射类型

## 条件类型