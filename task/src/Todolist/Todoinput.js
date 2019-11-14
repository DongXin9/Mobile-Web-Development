import React, { Component } from 'react'
//子组件---->父组件传递数据，调用子组件时往子组件传递一个函数
//子组件通过props调用该函数

//受控组件和非受控组件

//非受控组件
//代码简单、比较适用于一次性获取表单的值（功能不复杂的情况下）
// export default class Todoinput extends Component{
//     componentDidMount(){
//         //1、
//         console.log(this.inp.value);
//         //2、
//         // console.log(this.refs);
//     }
//     search = ()=>{
//         this.props.addTodo(this.inp.value);
//         console.log(this.inp.value);
//     }
//     render(){
//         return (<div>
//                     {/* 1、现在 */}
//                     <input ref={(inp)=>this.inp = inp} type="text"/>
//                     <button onClick={this.search}>查询</button>
//                     {/* 2、以前 */}
//                     {/* <input ref='a' type="text"/> */}
//                     {/* <button ref = 'b' onClick={this.search}>查询</button> */}
//                 </div>)
//     }
// }


//受控组件：value值被react的状态控制
//可以方便拿到input框的值，实时获取或处理输入的内容

//受控组件
export default class Todoinput extends Component {
    constructor(){
        super();
        this.state=({
            //val:'todo'
        })
    }
    handleInput = (e) => {
        if(e.keyCode === 13){
            // this.props.addTodo(e.target.value);
            this.props.addTodo(this.state.val);
        }
    }
    handleChange = (e) => {
        this.setState({
            val:e.target.value
        })
    }
    render() {
        return (
            <div style={{background:'#000'}}>
                <label style={{color:'#fff'}} htmlFor="inp">ToDoList</label>
                <input id="inp" onChange={(e)=>this.handleChange(e)} value={this.state.val} onKeyDown={(e)=>this.handleInput(e)} type="text" placeholder="添加ToDo"/>
                {/* <button>查询</button> */}
            </div>
        )
    }
}
// //受控组件
// export default class Todoinput extends Component {
//     constructor(){
//         super();
//         this.state=({
//             n1:0,
//             n2:0
//         })
//     }
//     handleInput = (e) => {
//         if(e.keyCode === 13){
//             this.props.addTodo(e.target.value);
//         }
//     }
//     handleChange = (e) => {
//         this.setState({
//             //属性值的位置如果是变量的话需要加[]去访问属性
//             [e.target.name]:parseInt(e.target.value==''?0:e.target.value)
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <label style={{color:this.state.n1+this.state.n2>10?'red':'green',fontSize:'50px'}} htmlFor="inp">输入：</label>
//                 <input id="inp" name="n1" onChange={(e)=>this.handleChange(e)} value={this.state.n1} onKeyDown={(e)=>this.handleInput(e)} type="text"/>
//                 +
//                 <input name="n2" onChange={(e)=>this.handleChange(e)} value={this.state.n2} onKeyDown={(e)=>this.handleInput(e)} type="text"/>
//                 {/* 每输入一个处理一次加法用受控组件 */}
//                 <p>{this.state.n1+this.state.n2}</p>                
//                 <button>查询</button>
//             </div>
//         )
//     }
// }
