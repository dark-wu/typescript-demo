// 直接声明不赋值 ts类型推导机制自动推导为any类型
let anyValue;

// 可以赋值为任意类型的值 不会报错
anyValue = 1;
anyValue = true;
anyValue = '222';
anyValue(); // 运行时会报错