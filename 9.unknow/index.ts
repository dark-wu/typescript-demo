// 声明
let unknownVale: unknown;

unknownVale = 1;
unknownVale = 'false',
unknownVale = '222';

unknownVale(); // 类型 "{}" 没有调用签名。
unknownVale.toUpperCase(); // 类型“unknown”上不存在属性“toUpperCase”。