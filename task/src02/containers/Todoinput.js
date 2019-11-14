import React, { Component } from 'react'
import store from '../store';
import {ADD_ITEM,CHANGE_VALUE} from '../actions/actionTypes';
import {addItem,changevalue} from '../actions/actionCreators';
//非受控组件
// export default class Todoinput extends Component {
//     add = (e)=>{
//         if(e.keyCode === 13){
//             store.dispatch({type:'add_item',value:e.target.value})
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <input onKeyDown={this.add} type="text"/>
//             </div>
//         )
//     }
// }
//受控组件
export default class Todoinput extends Component {
    constructor(){
        super();
        this.state=({
            inputValue:store.getState().inputchange
        })
    }
    add = (e)=>{
        // if(e.keyCode === 13){
        //     store.dispatch({type:ADD_ITEM,value:e.target.value})
        // }
        if(e.keyCode === 13){
            store.dispatch(addItem(e.target.value))
        }
    }
    handleChange = (e) => {
        // store.dispatch({
        //     type:CHANGE_VALUE,
        //     value:e.target.value
        // })
        store.dispatch(changevalue(e.target.value));



        // this.setState({
        //     inputValue:e.target.value
        // })
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                inputValue:store.getState().inputchange
            })
        })
    }
    render() {
        return (
            <div>
                <input value={this.state.inputValue} onChange={(e)=>this.handleChange(e)} onKeyDown={this.add} type="text"/>
            </div>
        )
    }
}