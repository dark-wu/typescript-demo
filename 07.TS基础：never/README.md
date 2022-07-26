# 基本数据类型-never

## 定义
当一个函数永远无法执行到最后（无法执行完成或执行到函数结束），例如函数内部抛出错误，或者函数中存在死循环，那么应该把它定义为never

## 声明
```ts
function throwError1(msg: string, errCode: number): never {
  throw {
    msg,
    errCode,
  }
}
```

## 区别于void
1.当一个函数返回空值，或者没有返回值。应该定义为void
2.当一个函数永远无法执行到最后（无法执行完成或执行到函数结束）。应该定义为never

## 参考链接
[TypeScript never 类型](https://cloud.tencent.com/developer/article/1594872)

