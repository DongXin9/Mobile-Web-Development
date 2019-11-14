// import React from 'react';
// import {connect} from 'react-redux';
// // whatwg-fetch
// function Login(props){
//     function login(){
//         fetch('https://cnodejs.org/api/v1/user/alsotang')
//             .then(res=>res.json())
//             .then(res=>{
//                 console.log(res);
//                 props.dispatch({
//                     type:'get_user_infor',
//                     userInfor:{
//                         avatar_url:res.data.avatar_url,
//                         loginname:res.data.loginname
//                     }
//                 })
//                 props.history.push('/home')
//             })
//     }
//     return (
//         <div>
//             <p>
//                 <input type="text"/>
//             </p>
//             <p>
//                 <input type="password"/>
//             </p>
//             <p>
//                 <button onClick={login}>登录</button>
//             </p>
//         </div>
//     )
// }
// export default connect()(Login);
// import React from 'react';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import {getUserInfor} from '../actions/actionCreators';
// import {getUserInforWithFetch} from '../actions/actionCreators';
// import Button from './Button';
// whatwg-fetch
// function Login(props){
    // let disLogin = bindActionCreators(getUserInforWithFetch,props.dispath)
    // function login(){
        // fetch('https://cnodejs.org/api/v1/user/alsotang')
        //     .then(res=>res.json())
        //     .then(res=>{
        //         console.log(res);
        //         props.dispatch({
        //             type:'get_user_infor',
        //             userInfor:{
        //                 avatar_url:res.data.avatar_url,
        //                 loginname:res.data.loginname
        //             }
        //         })
        //         props.dispatch(getUserInfor({
        //                 avatar_url:res.data.avatar_url,
        //                 loginname:res.data.loginname
        //         }))
        //         props.history.push('/home')
        //     })
        // props.dispath(getUserInforWithFetch());
        // disLogin();
//     }
//     return (
//         <div>
//             <p>
//                 <input type="text"/>
//             </p>
//             <p>
//                 <input type="password"/>
//             </p>
//             <p>
//                 <button onClick={login}>登录</button>
//                 <Button login={props.disLogin}/>
//             </p>
//         </div>
//     )
// }
// let mapStateToProps = (state)=>{};
// let mapDispathToProps = (dispatch)=>{
//     return {
//             disLogin:bindActionCreators(
//                 getUserInforWithFetch,
//                 dispatch
//             )
//         }
// }; 
// export default connect(
//     mapStateToProps,
//     mapDispathToProps
// )(Login);

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getUserInforWithFetch} from '../actions/actionCreators';
import Button from './Button';

function Login(props){
    // let disLogin = bindActionCreators(getUserInforWithFetch,props.dispatch)
    
    // function login(){
        // disLogin();
        // props.dispatch(getUserInforWithFetch());
    // }
    return (
        <div>
            <p>
                <input type="text"/>
            </p>
            <p>
                <input type="password"/>
            </p>
            <p>
                <Button login={props.disLogin}/>
            </p>
        </div>
    )
}
let mapStateToProps = (state)=>{};
let mapDispatchToProps = (dispatch)=>{
    return {
        disLogin:bindActionCreators(
            getUserInforWithFetch,
            dispatch
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);