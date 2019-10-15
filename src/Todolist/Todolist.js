import React, { Component } from 'react';
import Todoing from './Todoing';
import Todoinput from './Todoinput';
export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo:[1,2,3]
        }


        // var arr = [1,2,{a:100}];
        //浅拷贝
        // var b = [...arr];
        //深拷贝
        // var b = JSON.parse(JSON.stringify(arr));
        // b[2].a = 200;
        // console.log(arr);

        //对象的拷贝
        // var a = {a:100};
        // var b = {b:200};
        // var o = Object.assign(a,b);
        // console.log(o===a);//true

        // var a = {a:100};
        // var b = {b:200};
        // var o = Object.assign({},a,b);
        // console.log(o===a);//false
        // console.log(o);//新的对象

        // var a = {a:100};
        // var b = {b:200};
        // var o = Object.assign({},a);//true
        // console.log(o);//拷贝a得到新的对象o

        //对象的拷贝
        var a = {a:100,b:200};
        //遍历对象
        //Object.keys返回有属性名组成的一个数组
        Object.keys(a).forEach((item)=>{
            console.log(item);
            console.log(a[item]);
        });
        //尽量不用for in
        // for(var item in a ){
        //     console.log(item);
        // }
    }
    addItem = (msg) => {
        //this.state.todo.push(msg);
        //console.log(this.state.todo);
        this.setState({
            todo: [...this.state.todo,msg]
        })
        console.log(msg)
    }
    delItem = (a) => {
        
        // this.state.todo.splice(a,1);//不要写
        //深拷贝、浅拷贝
        //状态(state)
        //1、不要直接改变、处理状态
        
        var todo = [...this.state.todo];
        todo.splice(a,1);
        //2、setState是异步的
        // this.setState({
        //     todo:todo
        // })
        // console.log(a);
        //异步
        // this.setState((state,props)=>({todo:state.todo+1}))
        this.setState(
            {todo}
        )
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing delTodo={this.delItem} todo={this.state.todo}/>
            </div>
        )
    }
}
