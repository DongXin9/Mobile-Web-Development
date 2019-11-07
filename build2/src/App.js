import React, { Component } from 'react';
import {HashRouter as Router,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './container/Home';
import Start from './container/Start';
import Api from './container/Api';
import About from './container/About';
import Login from './container/Login';
import Detail from './components/Detail'
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <div className="main">
            <div className="content">
              <Route path='/' exact component={Home}/>
              <Route path='/start' component={Start}/>
              <Route path='/api' component={Api}/>
              <Route path='/about' component={About}/>
              <Route path='/login' component={Login}/>
              <Route path='/topic/:id' component={Detail}/>
            </div>
            <div className='siderbar'>
              <div className='pane1'>
                <p>CNode: Node.js专业中文社区</p>
                <div>
                  您可以登录或注册，也可以<br/>
                  <button>通过GitHub登录</button>
                </div>
              </div>
              <div className='pane1'>
                <img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-"/>
                <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"/>
                <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"/>
              </div>
              <div className='pane2'>
                <div className="pane11">无人回复话题</div>
              </div>
              <div className='pane2'>
                <div className="pane11">积分榜</div>
              </div>
              <div className='pane2'>
                <div className="pane11"><a>友情社区</a></div>
                <div className="pane21">
                  <img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png"/>
                  <img src="https://static2.cnodejs.org/public/images/golangtc-logo.png"/>
                  <img src="https://static2.cnodejs.org/public/images/phphub-logo.png"/>
                  <img src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK"/>
                </div>
              </div>
              <div className='pane2'>
                <div className="pane11"><a>客户端二维码</a></div>
                <img className="pane12" src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"/>
                <div className="pane13">客户端源码地址</div>
              </div>
            </div>
          </div>
          <div id='footer'>
            <div id='footer_main'>
              <div class="links">
                <a class='dark' href='/rss'>RSS</a>
                |
                <a class='dark' href='https://github.com/cnodejs/nodeclub/'>源码地址</a>
              </div>
              <div class='col_fade'>
              <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
              <p>服务器赞助商为
                <a href="http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo" target="_blank"
                class="sponsor_outlink" data-label="ucloud_bottom">
                  <img src="//static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" title="ucloud" alt="ucloud" width="92px"/>
                </a>
                ，存储赞助商为
                <a href="http://www.qiniu.com/?ref=cnode" target="_blank" class="sponsor_outlink" data-label="qiniu_bottom">
                  <img src="//static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX" title="七牛云存储" alt="七牛云存储" width="115px"/>
                </a>
                ，由
                <a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank" class="sponsor_outlink" data-label="alinode_bottom">
                  <img src="//static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD" title="alinode" alt="alinode" height="54px" width="166px"/>
                </a>提供应用性能服务。
              </p>
              <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a></p>
              </div>
            </div>
            </div>
        </div>
      </Router>
    )
  }
}
