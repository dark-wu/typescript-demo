# 泛型

## 定义
泛型 是程序设计语言的一种风格或范式。泛型允许我们在强类型语言中编写代码时使用一种一些以后才指定的类型，在实例化时作为参数指明这些类型。

我们可以理解为：泛型就是指定一个表示类型的特殊变量，用它替代某个实际的类型用于编程，然后通过实际调用时传入或推导出的类型来对变量进行替换，从而达到使用泛型适应不同类型的目的。

简单来说，区别于平时我们对值进行编程，泛型是对类型进行编程。
## 常见的类型变量以及它代表的含义
```ts
/**
 * T（Type） 通常用作定义对象的类型
 * K（Key） 表示对象中的键类型
 * V（Value） 表示对象中的值类型
 * E（Element）表示对象中的元素类型
 */
```
## 泛型的种类

### 泛型函数
```ts
// 定义
// 第一个T会将类型链式传递给参数类型和返回类型
export function identity<T>(value: T): T {
    return value;
}
// 调用
// 1.显示定义类型变量
identity<number>(1024);
// 2.自动推导类型
identity(1024);
```
### 泛型接口
```ts
// 定义
export interface IResponseData<T> {
    code: string;
    mag: string;
    info: T;
}
export interface IMenuData {
    system: string;
    username: string;
}
// 使用
const data: IResponseData<IMenuData> = yield getMenuList({ username: 'Tom' });
```
### 泛型类
```ts
// 定义
class ArrayList<T> {
    private data: T[] = [];
    public push(value: T): void {
        this.data.push(value);
    }
    public pop(): void {
        this.data.pop();
    }
    public clear(): void {
        this.data = [];
    }
}
// 使用
const numberList = new ArrayList<number>();
numberList.push(1);
```