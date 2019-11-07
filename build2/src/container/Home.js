import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import List from '../components/List';

// 写作业的时候最好写成几个按钮
export default class Home extends Component {
    render() {
        let url = this.props.match.url;
        console.log(url);
        return (
            <div>
                {/* tab切换 */}
                <header className='contentheader'>
                    <Link to={{pathname:url,search:'?tab=all'}}>全部</Link>
                    <Link to={{pathname:url,search:'?tab=good'}}>精华</Link>
                    <Link to={{pathname:url,search:'?tab=share'}}>分享</Link>
                    <Link to={{pathname:url,search:'?tab=ask'}}>问答</Link>
                    <Link to={{pathname:url,search:'?tab=job'}}>招聘</Link>
                </header>
                <Route path={`${url}`} component={List}/>
            </div>
        )
    }
}
