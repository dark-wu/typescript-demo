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
联合类型就是声明的类型并不确定，可以为多种类型中的一种。联合类型使用 | 分隔每一种类型。
```ts
// 基础类型的联合类型
let a: number | string = 'hello';

// 字面量类型
let key: 'code' | 'msg' | 'info' = 'info';

// 对象的联合类型
interface IDog {
    name: string
}
interface ICat {
    age: number;
}
type Pet = IDog | ICat;
const myPet: Pet = {
    name: 'wangcai',
};
myPet.age = 1; // Property ‘age' does not exist on type 'IDog'. 因为已经类型推导确定是IDog
```

## 索引类型
索引类型可以实现对象的查询和访问。然后再分配泛型约束，就可以建立对象、对象属性、属性值之间的约束关系。
```ts
// keyof T 示例
interface IData {
    a: number;
    b: number;
    c: number;
}
let key: keyof IData; // key是IData中的一种

// T[K] 示例
let value: IData['a'] = 1; // 必须赋值为number类型

// K extends U -泛型约束

// 综合示例 
const data = {
    a: 1,
    b: 2,
    c: 3,
}
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key]);
}
console.log(getValues(data, ['a', 'b', 'c']));
```
## 映射类型
映射类型。就是TS提供了从旧类型中创建新类型的一种方式。新类型会以相同的形式去转换旧类型里的每个属性。
```ts
// 定义一个旧接口
interface IPeople {
    name: string;
    age: number;
    gender: 'male' | 'female';
}
// 示例：把IPeople中的属性变成可选的
// 使用 [key in keys] 语法
type IPeoplePartial = {
    [key in keyof IPeople]?: IPeople[key]
}

// 使用泛型语法
// Partial也是TS内置的工具映射类型 不写也不会报错
type Partial<T> = {
    [K in keyof T]: T[K];
}
type IPeoplePartial = Partial<IPeople>;
```

## 条件类型
条件类型是一种由表达式所决定的类型。
```ts
// 语法
// T extends U ? X : Y

type A = string extends string | number ? true : false;

// 嵌套的条件 把类型条件收拢到非常精确的范围
type TypeName<T> = 
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends null ? "null" :
    T extends Function ? "function" : "object";
type T1 = TypeName<string>; // 'string'
type T2 = TypeName<string[]>; // 'object'

// 分布式条件类型-条件类型的一种特性
// 语法：(A | B) extends U : X : Y
// 相当于： ((A extends U : X : Y) | (B extends U : X : Y)的联合类型
type T3 = TypeName<string | string[]> // "string" | "object"

// 实现类型的过滤
type Wihtout<T, U> = T extends U ? never : T;

// 拆解过程，相当于
// Wihtout<'a', 'a' | 'e'> | Wihtout<'b', 'a' | 'e'> | Wihtout<'c', 'a' | 'e'>
// never | b | c
// b | c
type T4 = Wihtout<'a'| 'b' | 'c', 'a' | 'e'>; // 'b' | 'c'

// 过滤null和undefined
type NotNull<T> = Wihtout<T, null | undefined>
typpe T5 = NotNull<string | null | undefined> // string

// ts官方也实现了Without和NotNull的条件类型
type T6 = Exclude<'a'| 'b' | 'c', 'a' | 'e'>; // 'b' | 'c'
type T7 = NonNullable<string | null | undefined> // string
```
