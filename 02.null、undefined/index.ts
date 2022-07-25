/**
 * ts具有类型推导机制
 * 对于let声明，原始类型及其子集只能推导到原始类型
 * 而null和undefined只能推导到any
 */

let x = null
let y = undefined

const xx = null
const yy = undefined

let xxx: null = null
let yyy: undefined = undefined

// x = 'aaa'
// xx = 'aaa'