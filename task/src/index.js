//import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShowTime from './ShowTime';
import Todolist from './Todolist/Todolist';
import Todo from './Todo/Todolist';
import Request from './Request';
import Parent from './Context/Parent';
import Hoc from './Hoc/Hoc';
import Portals from './Portals/Portals';
import App from './App';
//组件交互
//父组件--->子组件：调用时在子组件上添加属性
//在子组件中上通过props获取数据
// ReactDOM.render(<ShowTime word="react"/>,document.getElementById('root'));

// let {Provider,Comsumer} = React.createContext();
import {con} from './Context/Context'
import ParentPortal from './Portals/ParentPortal';
//let color = 'red';
// ReactDOM.render(
//     <con.Provider value={color}>
//         <ParentPortal/>
//     </con.Provider>,
//     document.getElementById('root')
// );
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
// ReactDOM.render(
//     <Todo/>,
//     document.getElementById('root')
// );



// var str = 'hello';
// var ele = <h1>{str}</h1>;

//类定义组件
// class Hello extends React.Component{

//     render(){
//         return <div>Hello</div>
//     }
// }
// 类定义组件
// class Hello extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             time: new Date().toLocaleString()
//         }
        
//         console.log('constructor',this.props.word);
//     }
//     componentDidMount(){
//         console.log('componentDidMount');
//         setTimeout(()=>{
//             console.log(1)
//             this.setState({
//                 time: new Date().toLocaleString()
//             })
//         },1000)
//     }
//     shouldComponentUpdate(){
//         return true;
//     }
//     getSnapshotBeforeUpdate(){
//         console.log('getsnapshot');
//     }
//     componentDidUpdate(){
//         console.log('didupdate');
        
//     }
//     render(){
//         console.log('render');

//         return (
//             <Fragment>
//                 <div>{this.state.time}</div>
//                 <div>hello{this.props.word}</div>
//             </Fragment>
//         );
//     }
// }
//ReactDOM.render(<ShowTime word="react"/>,document.getElementById('root'));

//函数定义组件（无生命周期函数）
//当只是渲染结构时
// function Todo(props){
//     return (
//         <div>
//             <h1>todo</h1>
//             <ul>
//                 {/* 循环渲染 */}
//                 {
//                     props.list.map(function(item,index){
//                         return <li key={item}>{item}</li>
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }
// var item = [1,2,3,4,5];
// ReactDOM.render(<Todo list={item}/>,document.getElementById('root'));
// function Todo(props){
//     return (
//         <div>
//             {/* 条件渲染 */}
//             {props.list.length>=6?<h1>todo</h1>:''}
//             {props.list.length>=5 && <h1>todo</h1>}
//             <ul>
//                 {/* 循环渲染 */}
//                 {
//                     props.list.map(
//                         (item,index)=> index%2 === 0&&<li key={item}>{item}</li>
//                     )
//                 }
//             </ul>
//         </div>
//     )
    
// }
// var item = [1,2,3,4,5];
// ReactDOM.render(<Todo list={item}/>,document.getElementById('root'));




// react元素创建后不可改变
// function tick(){
//     var e = <div>
//                 <p>当前时间</p>
//                 <p>当前时间</p>
//                 <h1>{new Date().toLocaleString()}</h1>;
//             </div>
//     ReactDOM.render(e,document.getElementById('root'));
// }
// tick();
// setInterval(tick,1000);


//jsx表达式会被react转成一个对象
// var ele = React.createElement(
//     'div',
//     {'id':'box'},
//     'hello',
//     React.createElement(
//         'h1',
//         {'id':'h'},
//         'react'
//     )
// );
// var obj = {
//     type: 'div',
//     props: {
//         id: 'box',
//         class: 'box',
//         children: ['hello',{
//             type: 'h1',
//             props: {
//                 id: 'h',
//                 class: 'h',
//                 children: 'react'
//             }
//         }]
//     }
// };
// function render(obj,container){
//     var ele = document.createElement(obj.type);
//     ele.id = obj.props.id;
//     ele.innerHTML = obj.props.children[0];
//     container.appendChild(ele);
// }


//加载html文件。浏览器解析html生成DOM树
//link加载css文件、解析css规则、生成render tree、浏览器渲染引擎渲染render tree
//页面重绘不一定引起页面回流（重排）、页面回流（重排）一定引起页面重绘


//页面回流（重排）：内容改变、大小改变、结构改变---------尽可能减小页面回流
//页面重绘（把字体颜色、背景颜色等样式改变）
// console.time('a');
// for(var i = 0;i<1000;i++){
//     document.body.innerHTML += '<li>' + i + '</l1>';
// }
// console.timeEnd('a');
//减少回流
// console.time('a');
// var str = '';
// for(var i = 0;i<1000;i++){
//     str += '<li>' + i + '</l1>';
// }
// document.body.innerHTML=str;
// console.timeEnd('a');


// display、width、height、font-size等会引起页面回流
// document.body.style.width = '100px';
// document.body.style.height = '100px';
// 声明一个css的一个类
// .change{
//     width: 100px;
//     height: 100px;
// }
// document.body.className = 'change';


//node.offsetLeft、node.offsetWidth等慎用
// var root = document.getElementById('root');
// var width = root.offsetWidth;
// setInterval(function(){
//     width += 1;
//     root.style.width = width + 'px';
// },100);



// function render(obj,container){
//     var {type,props} = obj;
//     //文档碎片
//     var fr = document.createDocumentFragment();

//     var ele = document.createElement(type);
//     for(var item in obj.props){
//         if(item === 'class'){
//             ele.className = props[item];
//         }else if(item === 'children'){
//             for(var i = 0;i<props[item].length;i++){
//                 if(typeof props[item][i] === 'object'){
//                     render(props[item][i],ele);
//                 }else{
//                     var txt = document.createTextNode(props[item][i]);
//                     ele.appendChild(txt);
//                 }
//             }
//         }else{
//             ele[item] = props[item];
//         }
//     }
//     //container.appendChild(ele);
//     fr.appendChild(ele);
//     container.appendChild(fr);
// }
//render(obj, document.getElementById('root'));
//var e = <h1>hello</h1>
//ReactDOM.render(ele, document.getElementById('root'));



