import React from 'react';
export default function Login(props){
    function login(){
        props.history.push('/');
    }
    return(
        <div>
        <div className="contentheader">
            <div className="t"><a href="/">主页</a><span>/&nbsp;登录</span></div>
        </div>
        <div className="Login">    
            <p>
                <span >用户名</span>
                <input className="logininput" type="text"/>
            </p>
            <p>
                <span>密&nbsp;&nbsp;&nbsp;码</span>
                <input className="logininput" type="password"/>
            </p>
            <p>
                <button className="loginbutton" onClick={login}>登录</button>
            </p>
        </div>
        </div>
    )
}