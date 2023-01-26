import React, {ChangeEvent, useState} from 'react';
import style from "./login.module.scss"
import {Input, Space, Button, message} from 'antd'
import './login.less'
import {captchaAPI, loginAPI} from "../../request/api";

const Login = () => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [verifyCode, setVerifyCode] = useState("")

    const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
    }

    const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const verifyCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setVerifyCode(e.target.value)
    }

    const gotoLogin = async () => {
        console.log(userName, password, verifyCode)
        //验证是否有空值
        if (!userName.trim() || !password.trim() || verifyCode.trim()) {
            alert("please enter complete information")
            return
        }
        //发起登入请求
        let loginAPIRes = await loginAPI({
            username: userName,
            password: password,
            code: verifyCode,
            uuid: localStorage.getItem("uuid") as string
        })

        if(loginAPIRes.code === 200){
            message.success('login successfully')
            localStorage.setItem("token", loginAPIRes.token)
        }

    }

    const captchaImage = async () => {
        //验证码的请求
        let res = await captchaAPI()
        if (res.code === 200) {
            //1.修改img

            //2.保存uuid给login的时候用
            localStorage.setItem("uuid", res.uuid)
        }


    }


    return (
        <div className={style.loginPage}>
            <div className={style.loginBox}>
                <div className={style.title}>
                    <h1>Login to Admin System</h1>
                </div>

                <div className={style.form}>
                    <Space direction='vertical' size='middle' style={{display: 'flex'}}>
                        <Input placeholder='please enter your username' onChange={usernameChange}/>
                        <Input.Password placeholder='please enter your password' onChange={passwordChange}/>

                        {/*验证码*/}
                        <div className="captchaBox">
                            <Input placeholder='verification code' onChange={verifyCodeChange}/>
                            <div className="captchaImg" onClick={captchaImage}>
                                <img src="https://yqfile.alicdn.com/img_95f11f98a62d10fbbf61579454fd56f6.png" alt=""/>
                            </div>
                        </div>

                        <Button type="primary" block onClick={gotoLogin}>Login</Button>
                    </Space>

                </div>
            </div>
        </div>
    );
};

export default Login;
