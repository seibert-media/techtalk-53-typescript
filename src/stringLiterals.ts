type TestUnionType = 'left' | 'right' | 'bottom' | 'top';

const yolo: TestUnionType = 'left';

const testUnionTypeMap: {[P in TestUnionType]: boolean} = {
    left: true,
    right: true,
    bottom: true,
    top: true
}

function isUnionType(param: string): param is TestUnionType {
    return param in testUnionTypeMap;
}

function needsUnionType(param: string): TestUnionType {
    if(isUnionType(param)) {
        return param;
    }
    throw new Error()
}
