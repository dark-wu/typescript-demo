interface Person1 {
    name: string,
    age: number,
    [prop: string]: any,
}

const tom:Person1 = {
    name: 'Tom',
    age: 20,
    mang: 1,
    sayHi: () => 'Hi'
}