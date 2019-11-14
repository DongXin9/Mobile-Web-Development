// import React, { Component } from 'react'
// import store from '../store';
// import {DEL_ITEM} from '../actions/actionTypes';
// import {delItem} from '../actions/actionCreators';
// import {connect} from 'react-redux';

// export default class Todoing extends Component {
//     constructor(){
//         super();
//         this.state = {
//             todos: store.getState().todo
//         }
//         console.log(store.getState())
//     }
//     componentDidMount() {
//         this.subid = store.subscribe(()=>{
//             this.setState({
//                 todos: store.getState().todo
//             })
//         })
//     }
//     componentWillUnmount(){
//         this.subid();
//     }
//     delItem=(index)=>{
//         // store.dispatch({
//         //     type:DEL_ITEM,
//         //     index:index
//         // })
//         store.dispatch(delItem(index));
        
//     }
//     render() {
//         return (
//             <ul>
//                 {
//                     this.state.todos.map((item,idx)=>(
//                         <li key={item}>{item}-------<button onClick={()=>this.delItem(idx)}>删除</button></li>
//                     ))
//                 } 
//             </ul>
//         )
//     }
// }
import React, { Component } from 'react'
import {delItem} from '../actions/actionCreators';
import {connect} from 'react-redux';

// class Todoing extends Component {
//     delItem = (index)=>{
//         this.props.dispatch(delItem(index))
//     }
//     render() {
//         return (
//             <ul>
//                 {
//                     this.props.todos.map((item,idx)=>(
//                         <li key={item}>{item}---<button onClick={()=>this.delItem(idx)}>删除</button></li>
//                     ))
//                 } 
//             </ul>
//         )
//     }
// }
function Todoing({dispatch,todos}){
    let del = (index)=>{
        dispatch(delItem(index))
    }
    return (
        <ul>
            {
                todos.map((item,idx)=>(
                    <li key={item}>{item}---<button onClick={()=>del(idx)}>删除</button></li>
                ))
            } 
        </ul>
    )
}

let mapStateToProps = (state)=>{
    return {
        todos: state.todo
    }
}
export default connect(mapStateToProps)(Todoing)
