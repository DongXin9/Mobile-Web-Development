import React, { Component } from 'react'
import Todoinput from './Todoinput';
import Todoing from './Todoing';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo:[
                {
                    title:"吃饭",
                    done:false
                },
                {
                    title:"跑步",
                    done:true
                }
            ],
            doinglen:1,
            donedlen:1
        }
    }
    componentDidMount(){
        let data = JSON.parse(localStorage.getItem("todo"));
        if(data){
            this.setState({
                todo:data,
            },()=>{
                this.lenItem();
            })
        } 
    }
    lenItem = ()=>{
        var donedlen = 0;
        var doinglen = 0;
        this.state.todo.forEach((item) => {
            if(item.done){
                donedlen++;
            }else{
                doinglen++;
            }
        });
        this.setState({
            doinglen:doinglen,
            donedlen:donedlen
        });
    }
    addItem = (msg) => {
        let newTodo = {
            title:msg,
            done:false
        }
        this.setState({
            todo: [...this.state.todo,newTodo],
            doinglen:this.state.doinglen+1
        },()=>{
            localStorage.setItem("todo",JSON.stringify(this.state.todo));
        })
    }
    delItem = (a) => {
        console.log(this.state.todo);
        var todo = [...this.state.todo];
        todo.splice(a,1);
        this.setState(
            {todo}
        ,()=>{
            this.lenItem();
            localStorage.setItem("todo",JSON.stringify(this.state.todo));
        })
    }
    changeItem = (index) => {
        var todo = [...this.state.todo];
        todo[index].done = !todo[index].done;
        this.setState(
            {todo}
        ,()=>{
            this.lenItem();
            localStorage.setItem("todo",JSON.stringify(this.state.todo));
        })
    }
    render() {
        return (
            
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing changeTodo={this.changeItem} delTodo={this.delItem} todo={this.state.todo} doinglen={this.state.doinglen} donedlen={this.state.donedlen}/>
            </div>
        )
    }
}
