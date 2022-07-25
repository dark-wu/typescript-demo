# 泛型-泛型约束

## 示例

### 示例1
```ts
/**
 * 定义一个泛型函数 loggingIdentity，在函数中打印参数的length属性并返回参数
 */
interface ILength {
    length: number;
}
function loggingIdentity<T extends ILength>(value: T): T {
    console.log(value.length);
    return value;
}
loggingIdentity('hello'); // 正常运行
loggingIdentity(1024); // 报错
```

### 示例2
```ts
/**
 * 定义一个泛型函数 getProperty，检查对象的某个属性名是否存在
 */
function getProperty<T, K extends keyof T>(value: T, key: K): T[K] {
    return value[key];
}
const data = {
    code: '0',
    msg: ''.
}
getProperty(data, 'code'); // 正常运行
getProperty(data, 'message'); // 报错
```
