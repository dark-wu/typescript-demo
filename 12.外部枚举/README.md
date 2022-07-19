# 外部枚举

## 作用
对已经定义存在的枚举对象，可用于编译时对上下文变量校验的一个检查

## 定义
使用 declare enum 关键字进行定义

## 声明
```ts
declare enum Color1 = {
    green, 
    black,
    yellow,
}
// 使用
let colorArr = [Color1.green, Color1.black, Color1.yellow]
```

## 特点
### 编译后不会存在文件当中
```ts
// 如上面代码编译成js后：
let colorArr = [Color1.green, Color1.black, Color1.yellow]
```
