import React from 'react'

export default function Start(props) {
    function Home(){
        props.history.push('/');
    }
        return (
            <div>
            <div className="contentheader">
                <div className="t"><a onClick={Home}>主页</a><span>/&nbsp;Node.js 新手入门</span></div>
            </div>
            <div class='topic'>
                <h2>Node.js 入门</h2>
                <p>《<strong>快速搭建 Node.js 开发环境以及加速 npm</strong>》</p>
                <p><a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a></p>
                <p>《<strong>Node.js 包教不包会</strong>》</p>
                <p><a href="https://github.com/alsotang/node-lessons">https://github.com/alsotang/node-lessons</a></p>
                <p>《<strong>ECMAScript 6入门</strong>》</p>
                <p><a href="http://es6.ruanyifeng.com/">http://es6.ruanyifeng.com/</a></p>
                <p>《<strong>七天学会NodeJS</strong>》</p>
                <p><a href="https://github.com/nqdeng/7-days-nodejs">https://github.com/nqdeng/7-days-nodejs</a></p>
                <h2>Node.js 资源</h2>
                <p>《<strong>前端资源教程</strong>》</p>
                <p><a href="https://cnodejs.org/topic/56ef3edd532839c33a99d00e">https://cnodejs.org/topic/56ef3edd532839c33a99d00e</a></p>
                <p>《<strong>国内的 npm 镜像源</strong>》</p>
                <p><a href="http://cnpmjs.org/">http://cnpmjs.org/</a></p>
                <p>《<strong>node weekly</strong>》</p>
                <p><a href="http://nodeweekly.com/issues">http://nodeweekly.com/issues</a></p>
                <p>《<strong>node123-<em>node.js中文资料导航</em></strong>》</p>
                <p><a href="https://github.com/youyudehexie/node123">https://github.com/youyudehexie/node123</a></p>
                <p>《<strong>A curated list of delightful Node.js packages and resources</strong>》</p>
                <p><a href="https://github.com/sindresorhus/awesome-nodejs">https://github.com/sindresorhus/awesome-nodejs</a></p>
                <p>《<strong>Node.js Books</strong>》</p>
                <p><a href="https://github.com/pana/node-books">https://github.com/pana/node-books</a></p>
                <h2>Node.js 名人</h2>
                <p>《<strong>名人堂</strong>》</p>
                <p><a href="https://github.com/cnodejs/nodeclub/wiki/%E5%90%8D%E4%BA%BA%E5%A0%82">https://github.com/cnodejs/nodeclub/wiki/名人堂</a></p>
                <h2>Node.js 服务器</h2>
                <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a></p>
                </div>
            </div>
        )
    
}
