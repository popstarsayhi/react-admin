import request from "./index";

//请求中：请求参数和返回值的类型都需要进行约束


//验证码请求
export const captchaAPI = ():Promise<CaptchaAPIres> =>
    request.get('/prod-api/captchaImage')

//登入请求
export const loginAPI = (params:loginAPIReq):Promise<loginAPIRes> =>
    request.get('/prod-api/login',params)