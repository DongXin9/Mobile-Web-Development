import {combineReducers} from 'redux';
import {ADD_ITEM,DEL_ITEM,CHANGE_VALUE} from '../actions/actionTypes';
//todoing
let todos = [
    1,2,3
]
function todo(state=todos,action){
    switch (action.type) {
        case ADD_ITEM:
            return [...state,action.value];
        case DEL_ITEM:
            return state.filter((item,idx)=>{
                return action.index!==idx
            })
            // let newState = [...state];
            // newState.splice(action.index,1);
            // return newState
        default:
            return state;
    }
}
//todoinput
let inputValue = 'hello';
function inputchange(state=inputValue,action){
    switch (action.type) {
        case CHANGE_VALUE:
            console.log(action);
            return action.value;
    
        default:
            return state;
    }
}


//用户登录
let userInfor = {
    //头像
    avatar_url:'',
    //登录名
    loginname:''
}
//redux三大原则
function getUserInfor(state=userInfor,action){
    switch(action.type){
        case'get_user_infor':
            console.log(action);
            return action.userInfor;
        default:
            return state;
    }
}

export default combineReducers({
    todo,inputchange,getUserInfor
});