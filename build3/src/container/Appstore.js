import React, { Component } from 'react'
import { Carousel, WingBlank ,NavBar, Icon ,SearchBar,Flex} from 'antd-mobile';

export default class Appstore extends Component {
    state = {
        data: ['1', '2','3','4'],
        imgHeight: 176,
      }
      componentDidMount() {
        setTimeout(() => {
          this.setState({
            data: ['1','2','3','4'],
          });
        }, 100);
      }
    render() {
        const icons = ['桌' ,'床' ,'椅' ,'几' ,'柜' ,'书桌' ,'沙发' ,'家居饰品','户外家具','全部分类'];
        const a = ['cup','goods'];
        const b = ['Top Art Studio 欧式风格精细...','顺顺工艺欧式风格塑料外框黑...'];
        const c= ['¥ 39.95','¥ 83.99'];
        return (
            <div style={{position:'relative'}}>
                <NavBar
                style={{backgroundColor:'#3fcccb'}}
                rightContent={[
                    <img src='images/gouwuche.png' style={{width:'30px'}}/>
                  ]}
                >商城</NavBar>
                <div style={{backgroundColor:'rgba(204,204,204,0.2)',position:'absolute',top:'45px',height:'45px',width:'100%',zIndex:999}}>
                    <div style={{width:'10%',textAlign:'center',backgroundColor:'rgba(0,0,0,0.2)',height:'100%',float:'left',paddingTop:'15px'}}><img style={{height:'50%'}} src='images/icon-search.png'/></div>
                    <SearchBar style={{width:'90%',backgroundColor:'rgba(0,0,0,0.2)',float:'left'}} placeholder="输入关键字搜索"/>
                </div>
                <WingBlank style={{margin:'0',position:'relative'}}>
                    <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={`images/banner${val}.png`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
                </WingBlank>
                <div style={{margin:'3%'}}>
                <Flex wrap="wrap">
                {
                    [1,2,3,4,5,6,7,8,9,0].map((item)=>(
                        <div style={{width:'15%',margin:'2.5%'}}>
                            <img src={`images/icon`+item+item+`.png`} style={{width:'100%'}}/>
                            <div style={{width:'100%',float:'left',textAlign:'center',fontSize:'5px'}}><span>{icons[item]}</span></div>
                        </div>
                    ))
                }
                </Flex>
                </div>
                <div style={{padding:'3%',backgroundColor:'#eeeeee'}}>
                    <Flex>
                        {
                            [0,1].map((item)=>(
                                <div style={{width:'48%',marginLeft:'1%',marginRight:'1%'}}>
                                    <div style={{height:'100px',width:'100%',textAlign:'center',backgroundColor:'#fff'}}><img style={{height:'90%',paddingTop:'10px'}} src={`images/`+a[item]+`.png`}/></div>
                                    <div style={{}}>
                                        <span style={{fontSize:'11px',color:'#686868'}}>{b[item]}</span>
                                        <br/>
                                        <span style={{fontSize:'13px'}}>{c[item]}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </Flex>
                    <img src='images/bed.png' style={{width:'100%',marginTop:'15px',backgroundColor:'#fff'}}/>
                    
                </div>
            </div>
        )
    }
}
