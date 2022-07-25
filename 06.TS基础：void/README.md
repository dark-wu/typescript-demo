# 基本数据类型-void

## 定义
void在ts代表空指

## 声明
```ts
let void1: void;
```

## 特点
### void只能赋值为null或undefined
```ts
void1 = null;
void1 = undefined;
```
### 赋值为其他类型会报错
```ts
void1 = 6; // 不能将类型“number”分配给类型“void”
```
## 使用场景
```ts
// 鼠标悬浮函数名可看到function printResult(): void
function printResult() {
    console.log('111')
}
// 或者手动指函数返回值
function printResult2(): void {
    console.log(222);
}
```


