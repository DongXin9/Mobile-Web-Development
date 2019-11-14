import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
export default class Sider extends Component {
    render() {
        return (
       
            <ul style={{float:"left"}}>
                    
                <li><NavLink exact activeStyle={{background:'red',color:'#fff',fontsize:30}} to='/'>Todolist</NavLink><br/></li>
                <li><Link  to='/todo'>Todo</Link><br/></li>

                <li><NavLink activeStyle={{background:'red',color:'#fff',fontsize:30}} to='/request'>Request</NavLink><br/></li>
                <li><Link to='/hoc'>Hoc</Link><br/></li>
                <li><Link to={
                    {
                        pathname:'/userinfor',
                        search:'?id=1',
                        state:100
                    }
                }>userinfor1</Link></li>
                <li><Link to={
                    {
                        pathname:'/userinfor',
                        search:'?id=2',
                        state:200
                    }
                }>userinfor2</Link></li>
                <li><Link to='/userinfor/1'>userinfor</Link></li>
                <li><Link to='/userinfor/2'>userinfor</Link></li>
                <li>
                {
                    [1,2,3,4,5,6].map((item)=>(
                        <li key={item}><Link to={'/topic/'+item}>topic{item}</Link></li>
                    ))
                }
                </li>
            </ul>
        )
    }
}
