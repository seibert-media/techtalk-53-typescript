import { type } from "node:os";

interface Person {
    name: string;
    lastName: string;
    age: number;
    skills: string[];
}

const yolorina: Person = {
    name: 'Yolorina',
    lastName: 'Swaggins',
    age: 21,
    skills: []
}

type Getters<T> = {
    [Property in keyof T as `get${Capitalize<string & Property>}`]: () => T[Property];
}

type PersonWithGetter = Getters<Person>;


