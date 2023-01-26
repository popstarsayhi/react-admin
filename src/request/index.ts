import axios from "axios";

//创建axios实例
const instance = axios.create({
    //基本请求路径的抽取
        baseURL: "http://xue.cnkd1.cn:23683",
    //这个事件是每次请求的过期时间，认为20s之后这个请求就是失败的
    timeout: 20000
    }
)

//请求拦截器
instance.interceptors.request.use(config=>{
    return config
}, err=>{
    return Promise.reject(err)
})

//响应拦截器
instance.interceptors.response.use(res=>{
    return res.data
}, err=>{
    return Promise.reject(err)
})


export default instance
