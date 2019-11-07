import React, { Component } from 'react'

export default class Detail extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            author:[],
            replies:[],
            
        };
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topic/'+id)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res.data);
            this.setState({data:res.data,author:res.data.author,replies:res.data.replies});
        })
    }
    componentDidUpdate(prevProps,prevStats){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let id = this.props.match.params.id;
            console.log(id);
            fetch('https://cnodejs.org/api/v1/topic/'+id)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                this.setState({data:res.data,author:res.data.author,replies:res.data.replies});
            })
        }
    }
    render() {
        return (
            <div>
            <div className="detail">
                <header className="detailfont">{this.state.data.title}</header>
                <div className="detail1">
                    <span>·发布于5天前</span>
                    <span>·作者:{this.state.author.loginname}</span>
                    <span>·{this.state.data.visit_count}次浏览</span>
                    <span>·来自{this.state.data.tab}</span>
                </div>
                <div className="detail2" dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
            </div>
            <div className='replay1'>{this.state.replies.length}回复</div>
            <div className="replay">
                
                <div>
                {
                    this.state.replies.map((item)=>(
                        <div className="replay0">
                        <div className="replay2"><img src={item.author.avatar_url}/></div>
                        <div className="replay3" dangerouslySetInnerHTML={{__html:item.content}}></div>
                        </div>
                    ))
                }
                </div>
            </div>
            </div>
        )
    }
}
