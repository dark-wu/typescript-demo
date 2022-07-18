# 基本数据类型-number、string、boolean

## 安装
### 1. 全局安装typescript
```
npm i -g typescript
```
### 2. 全局安装ts-node（ts文件node运行器）
```
npm i -g ts-node
```

>mac下全局安装包没有权限？如
```
npm WARN checkPermissions Missing write access to /usr/local/lib/node_modules
npm ERR! code EACCES
npm ERR! syscall access
npm ERR! path /usr/local/lib/node_modules
npm ERR! errno -13
```
解决办法：修改文件权限
```
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
```

## 声明
### 直接声明
>因为ts具有类型推导的机制
```ts
let number1 = 1
let bool1 = false
let string1 = 'aaa'
```
### 指定类型
```ts
let number2: number = 1
let bool2: boolean = false
let string2: string = 'bbb'
```
指定类型后，不能更改数据类型，比如说重新赋值string1 = false，会抛出一个错误
```
bool1 = 'aaa'
// 不能将类型"string"赋值给类型"boolean"
```

## 运行
1. 可以使用tsc index.ts命令把index.ts文件转为index.js文件
>好处：可以看到ts文件编译后成js文件的代码
```
tsc index.ts
node index.js
```
2. 全局安装ts-node，直接ts-node index.ts执行
```
ts-node index.ts
```
>ps:运行报错如有下图所示的报错
```
return new TSError(diagnosticText, diagnosticCodes);
           ^
TSError: ⨯ Unable to compile TypeScript:
```
解决办法
```
sudo npm i -D tslib @types/node
```
