# 基本数据类型-数组

## 声明
### 直接声明
#### typescript会根据类型推导机制自动推导
```ts
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 'ddd'];
```

### 手动指定数据类型
```ts
let arr3: number[] = [1, 2, 3, 4, 5];
let arr4: (string | number | boolean)[] = [1, 'ddd', true];
let arr5: any[] = [1, 'ddd', false, null];
```

### 利用泛型进行声明
```ts
let arr6: Array<number> = [1, 2, 3, 4, 5];
```
## 对指定类型的值进行其他类型的赋值
```ts
// 会报错
arr3[2] = 'ddd'
```
