import React,{Component,Fragment} from 'react';

// 类定义组件
export default class ShowTime extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }
        //改成箭头函数就不需要bind
        // this.handleClick = this.handleClick.bind(this);
        console.log('constructor',this.props.word);
    }
    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(()=>{
            console.log(1)
            this.setState({
                time: new Date().toLocaleString()
            })
        },1000)
    }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('getsnapshot');
    }
    componentDidUpdate(){
        console.log('didupdate');
        
    }
    handleClick = (num,e) => {
        // console.log(this);
        console.log(num,e);
        console.log('点击成功');
    }
    divClick(num,e){
        console.log(num,e);
    }
    render(){
        console.log('render');
        return (
            <Fragment>
                {/* <div onClick={this.handleClick}>{this.state.time}</div> */}
                <div onClick={(e)=>this.handleClick(1,e)}>{this.state.time}</div>
                <div onClick={this.divClick.bind(this,1)}>hello{this.props.word}</div>
            </Fragment>
        );
    }
}
//默认导出，只能导出一次
//export default ShowTime;
//命名导出，可写多个export（导入导出都需要加{}）
//export {ShowTime};