import React, { Component } from 'react'
import Axios from 'axios';
export default class Request extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }//状态
    }
    componentDidMount(){
        //用原生的 fetch去请求
        fetch(
            'https://api.apiopen.top/musicRankingsDetails?type=1',
            // {method:'post',body:'{name:111}'}//?????
        )
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            this.setState({
                data: res.result
            });
            console.log(res);
        })

        // Axios.get('https://api.apiopen.top/musicRankingsDetails?type=1').then(
        //     (res)=>{
        //         console.log(res);
        //         this.setState({
        //             data:res.data.result
        //         })
        //     })
    }
    render() {
        return (
            <div>
                <h1>请求接口</h1>
                <ul>
                    {
                        this.state.data.map(
                            (item,index)=>(
                                <li key={index}>
                                    <h2>{item.album_title}</h2>
                                    <p>{item.author}</p>
                                </li>
                            )
                        )
                    }
                    
                </ul>
            </div>
        )
    }
}
