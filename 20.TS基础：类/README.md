# 类

## 定义
```ts
class Person {
    name: string;
    age: number;
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getInfo () {
        return this.name + this.age;
    }
}
```

## 类的继承
extends关键字
```ts
// 父类
class Person {
    name: string;
    age: number;
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getInfo () {
        return this.name + this.age;
    }
}
// 子类（不能继承私有方法和属性）
class Woman extends Person {
    gender: string = '女',
    getInfo1 () {
        return this.gender;
    }
}
let woman = new Woman('Jerry', 18);
console.log(woman.name); // Jerry
console.log(woman.gender); // 女
```
## 修饰符
### public
公有的-所有地方都可以访问到
```ts
// 父类
class Person {
    public name: string;
    age: number;
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getInfo () {
        return this.name + this.age;
    }
}
// 子类
class Woman extends Person {
    gender: string = '女',
    getInfo1 () {
        return this.gender;
    }
}
```
### protected
受保护的-在被定义的类或子类中可以访问，不能在实例中进行获取
```ts
// 父类
class Person {
    protected name: string;
    age: number;
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getInfo () {
        return this.name + this.age;
    }
}
// 子类
class Woman extends Person {
    gender: string = '女',
    getInfo1 () {
        return this.gender + this.name; // name可以获取到
    }
}
let woman = new Woman；
console.log(woman.name); // 不能获取到
```
### private
私有的-只能在被定义的类中访问到，可以通过父类的方法进行访问
```ts
class Person {
    private name: string;
    age: number;
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getInfo () {
        return this.name + this.age;
    }
}
// 子类
class Woman extends Person {
    gender: string = '女',
    getInfo1 () {
        return this.gender + this.name; // 不能获取到
    }
}
let woman = new Woman；
console.log(woman.name); // 不能获取到
```
## 类的静态属性和方法 static
只能通过类名去访问 不能通过实例去访问
```ts
class Person {
    name: string;
    age: number;
    static gender: string;
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getInfo () {
        return this.name + this.age;
    }
    static getInfo1() {
        return 'static info';
    }
}
let woman = new Person('Jerry', 18);
console.log(woman.gender); // 报错 获取不到
console.log(Person.gender); // 可以访问到
console.log(woman.getInfo1()); // 报错 获取不到
console.log(Person.getInfo1()); // 可以访问到

```

## 抽象类和方法 abstract
1. 抽象类：作为一个基类去使用，无法创建实例，主要用于给子类去继承
2. 抽象方法：子类必须实现父类的抽象方法
```ts
abstract class Person {
    name: string;
    age: number;
    abstract speak(): void;
}
class Woman extends Person {
    speak() {
        console,log('Hello');
    }
}
console.log(new Woman()); // 可以创建实例
console.log(new Person()); // 不能创建实例
```