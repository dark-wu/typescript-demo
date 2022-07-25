# 接口-额外（绕开）的类型检查

## 方式
绕开类型检查的方式有以下几种：
1. 指定任意类型（或者说是使用索引签名）
2. 类型断言
3. 鸭式辨型法

## 索引签名
```ts
interface Person {
    [prop: string]: any,
}
// 都不会报错
const tom: Person = {
    name: 'Tom',
    age: 18,
    gender: '男',
    test: 'test',
}
```

## 类型断言
意为告诉程序很清楚自己在干什么，则程序也不会作类型检查。
### <类型> 值
```ts
interface Person {
    name: string,
    age?: number,
    gender: string,
}
const tom: Person = <Person> {
    name: 'Tom',
    age: 18,
    gender: '男',
    test: 'test', // 不会报错
}
```
### 值 as 类型
用的比较多的使用as方法
```ts
interface Person {
    name: string,
    age?: number,
    gender: string,
}
const tom: Person = {
    name: 'Tom',
    age: 18,
    gender: '男',
    test: 'test', // 不会报错
} as Person
```

## 鸭式辨型法
即具备接口的基本特征即可
```ts
// 实际应用的常见方式
function getInfo(person: Person) {
    return `${person.name}是${person.age}岁`;
}
const tom = {
    name: 'Tom',
    age: 18,
    gender: '男',
    test: 'test',
}
getInfo(tom);
```


