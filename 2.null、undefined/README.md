# 基本数据类型-null、undefined

## 声明
### 直接声明
```
let x = null
let y = undefined
```

### 指定类型
```
let xx: null = null
let yy: undefined = undefined
```

## 重新赋值
```
// 不会报错
x = 'aaa'
// 会报错
xx = 'aaa'
```

## 结论
ts具有类型推导机制，对于let声明，原始类型及其子集只能推导到原始类型，而null和undefined只能推导到any，当指定类型赋值时为指定类型，不能更改

