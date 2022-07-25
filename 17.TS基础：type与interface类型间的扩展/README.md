# type与interface类型间的扩展

## interface扩展interface
```ts
interface P1 {
    name: string
}
interface P2 extends P1 {
    age: number
}

```
## interface扩展type
```ts
type P1 = {
    name: string
}

interface P2 extends P1 {
    age: number
}
```

## type扩展interface
通过交叉类型的形式
```ts
interface P1 {
    name: string
}

type P2 = P1 & {
    age: number
}
```

## type扩展type
通过交叉类型的形式
```ts
type P1 =  {
    name: string
}

type P2 = P1 & {
    age: number
}
```

## 总结
1. interface去扩展其他，使用extends
2. type去扩展其他，使用&（交叉类型）

