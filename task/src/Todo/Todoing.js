import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Todoing extends Component {
    render() {
        return (
            <div>
                <h1 style={{height:'50px',width:'600px',margin:'0 auto',fontSize:'30px'}}>正在进行
                    <span style={{float:'right',width:'20px',height:'20px',borderRadius:'20px',backgroundColor:'#E6E6FA',color:'#666',fontSize:'15px',textAlign:'center',marginTop:'15px'}}>{this.props.doinglen}</span>
                </h1>
                    {   
                        this.props.todo.map((item,idx)=>{
                            
                            if(!item.done){
                                
                                return (
                                    <li key={idx} style={{borderRadius:'5px',fontSize:'20px',listStyle:'none',height:'30px',width:'600px',margin:'0 auto'}}>
                                        <input style={{height:'22px',width:'22px'}} type='checkbox' checked={item.done} onChange={()=>this.props.changeTodo(idx)}/>
                                        {item.title}
                                        <button style={{float:'right',height:'22px',width:'22px',borderRadius:'22px'}} onClick={()=>this.props.delTodo(idx)}></button>
                                    </li>    
                                )
                            }
                        })
                    }
                <h1 style={{height:'50px',width:'600px',margin:'0 auto',fontSize:'30px'}}>已经完成
                    <span style={{float:'right',width:'20px',height:'20px',borderRadius:'20px',backgroundColor:'#E6E6FA',color:'#666',fontSize:'15px',textAlign:'center',marginTop:'15px'}}>{this.props.donedlen}</span>
                </h1>
                    {   
                        this.props.todo.map((item,idx)=>{
                            if(item.done){
                                return (
                                    <li key={idx} style={{borderRadius:'5px',fontSize:'20px',listStyle:'none',height:'30px',width:'600px',margin:'0 auto'}}>
                                        <input style={{height:'22px',width:'22px'}} type='checkbox' checked={item.done} onChange={()=>this.props.changeTodo(idx)}/>
                                        {item.title}
                                        <button style={{float:'right',height:'22px',width:'22px',borderRadius:'22px'}} onClick={()=>this.props.delTodo(idx)}></button>
                                    </li>    
                                )
                            }
                        })
                    }
            </div>
        )
    }
};
Todoing.propTypes = {
    todo:PropTypes.array
};
