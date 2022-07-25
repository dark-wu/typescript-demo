# 基本数据类型-any

## 声明
### 直接声明
```ts
// 直接声明不赋值 ts类型推导机制自动推导为any类型
let anyValue;
```

### 指定类型
```ts
let anyValue: any;
```

## 特点
### 可以赋值为任意类型，编写的时候不会报错
```ts
anyValue = 1;
anyValue = true;
anyValue = '222';
anyValue(); // 运行时会报错
```

## 结论
1.ts中any类型和js的使用相同
2.之所以保留any类型，是为了可以在不必要的类型中去进行强制，缩短开发的时间
3.日常中应该慎用any类型，对any类型的使用确定好边界，以防滥用
