// 根据typescript类型推导机制自动推导
let arr1 = [1, 2, 3, 4, 5];

let arr2 = [1, 'ddd'];

// ----------
// 手动指定数据类型

let arr3: number[] = [1, 2, 3, 4, 5];

let arr4: (string | number | boolean)[] = [1, 'ddd', true];

let arr5: any[] = [1, 'ddd', false, null];

// ----------
// 利用泛型创建数组
let arr6: Array<number> = [1, 2, 3, 4, 5];


// ----------
// 修改指定数据类型的数据会报错

arr3[2] = 'ddd'