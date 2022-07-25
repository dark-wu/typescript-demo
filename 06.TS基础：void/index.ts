let void1: void;
void1 = null;
void1 = undefined;

// 赋值其他类型 报错
void1 = 6; // 不能将类型“number”分配给类型“void”

// 使用场景
function printResult() {
    console.log('111')
}