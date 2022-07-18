// 根据类型推导机制自动推导
const preson1 = {
  firstName: 'Wu',
  lastName: 'Young Dark',
  age: 21
}


// 手动指定类型
const person2: {
  firstName: string,
  lastName: string,
  age: number
} = {
  firstName: 'Wu',
  lastName: 'Young Dark',
  age: 21
}

// 赋值不匹配的类型会报错
person2.age = true; // 不能将类型“boolean”分配给类型“number”。


// 访问未定义的变量会报错
/**
 * 在js上访问未定义的变量不回报错
 * 而在 ts上访问，则在编写代码的时候即可以发现错误
 * 这样是变量访问变得更加安全
 */
console.log(person2.weight); // 类型“{ firstName: string; lastName: string; age: number; }”上不存在属性“weight”。

// 避免使用object、Object、{} 关键字去指定类型，例如
const person3: object = {
  firstName: 'Wu',
  lastName: 'Young Dark',
  age: 21
}
// 使用关键字去指定类型 相当于指定一个空的对象，并不能确定内部情况，所以访问变量也会报错
console.log(person3.age); // 类型“object”上不存在属性“age”。ts