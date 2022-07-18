# 枚举类型-数字枚举、字符串枚举、异构枚举


## 声明
使用enum关键字进行声明
```ts
// 默认声明对应数字0 1 2 3
enum Color1 {
    red, // 0
    green, // 1
    yellow, // 2
    blue, // 3
}
console.log(Color1.green) // 1
```

## 类型
### 数字枚举
```ts
// 具有自增的特性
enum Color2 {
    purple = 8, // 不影响下面的自增
    red = 4,
    green, // 5
    yellow, // 6
    blue, // 7
}
console.log(Color1.green) // 5
```
### 字符串枚举
```ts
enum Color3 {
    purple = 'purple',
    red = 'red',
    green = 'green',
    yellow = 'yellow',
    blue = 'blue',
}
console.log(Color1.green) // 5
```

### 异构枚举
```ts
enum Color4 {
    purple = 'purple',
    red = 'red',
    green= 3,
    yellow, // 4
    blue = 8,
}
console.log(Color1.yellow) // 4
```
