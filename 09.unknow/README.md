# 基本数据类型-unknow


## 声明
```ts
let unknownVale: unknown;
```

## 特点
### 无法保证为确定的类型
```ts
unknownVale = 1;
unknownVale = 'false',
unknownVale = '222';
```

### 会保证类型的安全
```ts
// 不确定是函数的时候 调用会报错
unknownVale(); // 类型 "{}" 没有调用签名。
unknownVale.toUpperCase(); // 类型“unknown”上不存在属性“toUpperCase”。
```

### 做类型判断后再使用不会报错
```ts
if (typeof unknowValue === 'function') {
    unknowValue(); // 不会报错
}

if (typeof unknowValue === 'string') {
    unknownVale.toUpperCase();  // 不会报错
}
```

## 结论
1.无法保证为确定的类型
2.会保证类型的安全