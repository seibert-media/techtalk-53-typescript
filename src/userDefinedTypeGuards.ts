type InputElement= {
    type: 'input';
    name: string;
    value: string;
}

type ButtonElement = {
    type: 'button';
    name: string;
    action: string;
}

function isButtonElement(param: InputElement | ButtonElement): param is ButtonElement {
    return param.type === 'button';
}

type Both = InputElement & ButtonElement;


function fufu(param: InputElement | ButtonElement) {
    if (param.type === 'button') {
        param.action
    } else {
        param.value
    }
}