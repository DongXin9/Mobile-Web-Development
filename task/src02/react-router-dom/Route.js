import React, { Component } from 'react';
import{Consumer} from './Context';
// import pathReg from 'path=to-regexp'
export default class Route extends Component {
    render() {
        return (
            <Consumer>
                {
                    (value)=>{
                        let {pathname} = value.location;
                        let {path,component:Component} = this.props;
                        console.log(pathname,path);
                        if(path === pathname){
                            // return <Component {...value}/>
                            return React.createElement(Component,value)
                        }
                        return null
                    }
                }
            </Consumer>
        )
    }
}
