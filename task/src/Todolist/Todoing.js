import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Todoing extends Component {
    render() {
        return (
            <div>
                <h1>正在进行{this.props.a}</h1>
                <ol className="list">
                    {/* arr.forEach\some\every\map\find\ */}
                    {   
                        this.props.todo.map((item,idx)=><li key={item}><input type='button'/>{item}-------<button onClick={()=>this.props.delTodo(idx)}>删除</button></li>)
                    }
                </ol>
                {/* <h1>已经完成{this.props.b}</h1>
                <ul>
                    {
                        this.props.todo.map((item,idx)=><li key={item}><input type='button'/>{item}-------<button onClick={()=>this.props.delTodo(idx)}>删除</button></li>)
                    }
                </ul> */}
            </div>
        )
    }
};
Todoing.propTypes = {
    todo:PropTypes.array
};
Todoing.defaultProps= {
    todo:[2,3,4],
    a:100
}
