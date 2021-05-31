const fu = {
    a: 'a',
    b: 'b',
    d: 0
}

interface TestInterface {
    a: string;
    b: string;
    c: number;
}

const dafuq = {
    ...fu,
    c: 1
}

const array1 = [2, 8] as const;

array1.push(9);
array1 = [10, ...array1];

function doSomething(arr: readonly number[]) {

}

doSomething(array1)

console.log(dafuq.d);
