import React, { Component } from 'react'
import { Carousel, WingBlank ,NavBar, Flex} from 'antd-mobile';
export default class Apphome extends Component {
    state = {
      data: ['1', '2'],
      imgHeight: 176,
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          data: ['1','2'],
        });
      }, 100);
    }
      render() {
        const a=['热门品牌','私人搭配师','选购指南']
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb'}}>住吧家居</NavBar>
                <WingBlank style={{margin:'0'}}>
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
                            src={`images/1-${val}.jpg`}
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
                <div style={{padding:'10px',backgroundColor:'#eeeeee'}}>
                <Flex wrap="wrap" style={{marginRight:'0.5%',marginLeft:'0.5%'}}>
                  {
                    [1,2,3].map((item)=>(
                    <div style={{background: `url(images/2-`+item+`.jpg)`,width:'30%',height:'100px',marginRight:'1.5%',marginLeft:'1.5%',textAlign:"center"}}>
                      <span style={{lineHeight:'100px',color:'#fff'}}>{a[item-1]}</span>
                    </div>
                    ))
                  }   
                </Flex>
                </div>
                {
                  [0,0,0].map((item)=>(
                    <div style={{marginTop:'10px'}}>
                      <div style={{borderLeft:'#3fcccb 5px solid',marginTop:'10px',marginBottom:'10px'}}><span style={{paddingLeft:'10px'}}>热门推荐</span></div>
                      <div style={{background:`url(images/3-${item}.jpg)`,width:'100%',height:'200px',textAlign:'center',marginTop:'10px'}}><span style={{lineHeight:'370px',color:'#fff'}}>什么是英伦装修风格 英伦风家装 英伦风格装修效果图</span></div>
                    </div>
                  ))
                }
                
          </div>
        );
      }
}
