import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class List extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        };
    }
    componentDidMount(){
            let tab = this.props.location.search;
            fetch('https://cnodejs.org/api/v1/topics'+tab)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                this.setState({data:res.data});
            })
    }
    componentDidUpdate(prevProps,prevStats){
        if(prevProps.location.search !== this.props.location.search)
        {
            let tab = this.props.location.search;
            fetch('https://cnodejs.org/api/v1/topics'+tab)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                this.setState({data:res.data});
            })
        }
    }
    render() {
        var url = this.props.location.search;
        var tab = url.slice(url.indexOf("=")+1,url.indexOf("&")+1?url.indexOf("&"):url.length) || 'all';
        return (
            <div>
                {/* tab获取列表 */}
                <div>
                {
                    this.state.data.map((item)=>(
                        <div className="tab">
                            <img className="tabimg1" src={item.author.avatar_url} alt={item.loginname}/>
                            <span className="tabspan1">
                                <span style={{color:'#9e78c0'}} title="回复数">{item.reply_count}</span>/<span style={{fontSize:'8px'}} title="点击数">{item.visit_count}</span>
                            </span>
                            <Link className="taba" to={`/topic/${item.id}`}>{item.title}</Link>
                            <span className="tabspan2">5天前</span>
                            <img className="tabimg2" src={item.author.avatar_url} alt={item.loginname}/>
                        </div>
                    ))
                }
                </div>
                {/* pages切换 */}
                <div className="page">
                {
                    [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                        <div className="pages" key={item}><Link to={'?tab='+tab+'&page='+item}>{item}</Link></div>
                    ))
                }
                </div>       
            </div>

        )
    }
}


