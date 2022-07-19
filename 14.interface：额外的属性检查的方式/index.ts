interface Person {
    // [prop: string]: any,
    name: string,
    age: number,
}
// 都不会报错
// const tom1: Person = {
//     name: 'Tom',
//     age: 18,
//     gender: '男',
//     test: 'test',
// }

function getInfo(person: Person) {
    return `${person.name}是${person.age}岁`;
}
const tom2 = {
    name: 'Tom',
    age: 18,
    gender: '男',
    test: 'test',
}

getInfo(tom2);