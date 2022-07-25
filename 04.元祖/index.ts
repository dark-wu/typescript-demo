// 创建一个元祖 长度为2 且 第一项必须是string
let person1: [string, number] = ['ddd', 3];
// 假如对对应位置的类型进行不同类型的赋值会报错
person1[0] = 3;
// 不能对越界的下标进行访问或赋值
person1[2] = true; // 长度为 "2" 的元组类型 "[string, number]" 在索引 "2" 处没有元素。

// 可以使用push推入符合类型的值
person1.push(4) // 不报错
person1.push(true); // 报错，类型“boolean”的参数不能赋给类型“string | number”的参数。
person1.push(null); // 报错

// ------------

let person2: [number, string];

person2 = [1, 'ddd']; // 赋值需提供所有指定的项的值，而且需要指定类型

// ------------
// 和数组的区别

// 创建一个联合数组
let array: (string | number)[] = [1, 1, 1, 1, 'ddd', 888];


// 总结：1.声明语句不同，2.联合数组赋值可以任意长度，而且类型不用一一对应