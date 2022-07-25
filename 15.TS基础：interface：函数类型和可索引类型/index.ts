interface Person3 {
    [prop: string]: string,
}

const tom3: Person3 = {
    test: '1',
    2: '34'
}

interface GetInfo {
    (name: string, age: number): string
}