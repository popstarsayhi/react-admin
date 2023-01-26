
//验证码响应的类型约束
interface CaptchaAPIres{
    msg:string,
    img:string,
    code:number,
    captchaEnable:boolean,
    uuid:string
}

//登入请求的类型约束
interface loginAPIReq{
    username:string,
    password:string,
    code:string,
    uuid:string
}

//登入响应的类型约束
interface loginAPIRes{
    msg:string,
    code:number,
    token:string
}