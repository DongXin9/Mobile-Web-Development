import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor(){
        super();
        this.state=({
            val:''
        })
    }
    handleInput = (e) => {
        if(e.keyCode === 13){
            // this.props.addTodo(e.target.value);
            this.props.addTodo(this.state.val);
            this.setState({
                val:''
            })
        }
    }
    handleChange = (e) => {
        this.setState({
            val:e.target.value
        })
    }
    render() {
        return (
            <div style={{background:'#000',height:'50px',margin:'0 auto'}}>
                <div style={{width:'600px',margin:'0 auto'}}>
                    <label style={{float:'left',color:'#DDD',lineHeight:'50px',width:'100px',fontSize:'24px'}} htmlFor="inp">ToDoList</label>
                    <input style={{float:'right',marginTop:'14px',width:'360px',height:'25px',border:'none',borderRadius:'5px'}} id="inp" onChange={(e)=>this.handleChange(e)} value={this.state.val} onKeyDown={(e)=>this.handleInput(e)} type="text" placeholder="添加ToDo"/>
                </div>
            </div>
        )
    }
}
