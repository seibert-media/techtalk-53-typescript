interface SimpleTest {
    fufu: string;
    dafuq: string;
    yolo?: number;
} //pls change in should render method

interface ChildTest {
    abs: number;
    swaggins: SimpleTest[];
  }

type Primitve = number | boolean | string | undefined | null;

type PropertySaveFlagMapping<T> = {
    [P in keyof T]-?: T[P] extends Primitve? boolean:
     T[P] extends (infer U)[]? PropertySaveFlagMapping<U>:
     PropertySaveFlagMapping<T[P]>;
}

const childTestNeedsSave: PropertySaveFlagMapping<ChildTest> = {
    abs: false,
    swaggins: {
        fufu: false,
        dafuq: true,
        yolo: true
    }
}

const shouldSimpleTestRerender: PropertySaveFlagMapping<SimpleTest> = {
    fufu: true,
    dafuq: false,
    yolo: false
}

function shouldRender(before: SimpleTest, after: SimpleTest): boolean {
    return shouldSimpleTestRerender['fufu']
}