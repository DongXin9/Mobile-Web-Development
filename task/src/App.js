import React, { Component } from 'react';
import { HashRouter as Router,Route,Switch,Redirect,Link,withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Sider from './Sider';
import Todolist from './Todolist/Todolist';
import Todo from './Todo/Todolist';

import Request from './Request';
import Parent from './Context/Parent';
import Hoc from './Hoc/Hoc';
import {Button} from 'antd';
import Todoing from './Todolist/Todoing';
import NoMatch from './NoMatch';
import UserInfor from './Router/UserInfor';
import Todoinput from './Todolist/Todoinput';
import Topic from './Router/Topic';
import Hooks from './Router/Hooks';
//组件首字母都是大写的

//antd使用
//1、下载安装antd框架：npm i antd
//2、在某个css里引入antd的css：@import '~/antd/dist/sntd.css'
//3、在需要的组件内import相应的组件，然后使用


//容器组件/UI组件（展示组件）
//智能组件/木偶组件

// 容器组件（pages、container）：写逻辑
// UI组件（components）：展示，写函数组件，直接写return react元素



function Login(props){
    console.log(props);
    return <button>登录</button>
}
//高阶组件
let LoginWithRouter = withRouter(Login);

export default class App extends Component {
    render() {
        //所有路由的组件都得放在BrowserRouter里
        //BrowserRouter里只能有一个子元素
        return (
            <Router basename='todolist'>
                <div>
                    {/* <Button type="primary">Primary</Button> */}
                    {/* exact严格匹配 */}
                    <LoginWithRouter/>
                    <Hooks/>
                    <Sider/>
                    {/* <UserInfor name='zhangsan'/> */}
                    {/* <UserInfor/> */}
                    <div style={{marginLeft:50,float:"left",border:'2px solid red'}}>
                        <Switch>
                            <Route exact path='/' component={()=><Todolist/>}/>
                            <Route path='/todo' component={Todo}/>
                            <Route path='/hoc' component={Hoc}/>
                            <Route path='/request' component={Request}/>
                            {/* <Route path='/userinfor' component={UserInfor}/> */}
                            <Route path='/userinfor/:id' component={UserInfor}/>
                            <Route path='/Topic/:page' component={Topic}/>
                            <Route path='/hooks/:id' component={Hooks}/>                            
                            <Redirect from='/old' to='hoc'/>
                            <Route path='*' component={NoMatch}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}
