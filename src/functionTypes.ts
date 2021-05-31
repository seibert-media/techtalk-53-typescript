type HttpFunciton = (url: string, params: {user: string, token: string}) => string;

const get: HttpFunciton = (url, params) => {
    return ''
}

const post: HttpFunciton = (url, params) => {
    return ''
}

const fufu = false;
const ffunction = fufu?get:post;
ffunction()