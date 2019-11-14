import React, { Component } from 'react'
import { NavBar, Icon ,Tabs,Flex} from 'antd-mobile';

export default class Appinspiration extends Component {
    state = {
        data: ['橙色律动', '儿童房','翻滚吧，地毯君','角落里的遐想']
    }
    renderContent = tab =>
    (<div style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#eeeeee' ,paddingLeft:'1%',paddingRight:'1%'}}>
            <Flex wrap="wrap">
            {
                [1,2,3,4,1,2,3,4].map((item)=>(
                    <div style={{marginTop:'15px',borderRadius:'5px',position:'relative',backgroundColor:'#fff',width:'46%',marginRight:'2%',marginLeft:'2%',height:'200px'}}>
                        <img src={`images/linggan1-`+item+`.jpg`} style={{width:'100%',height:'85%'}}/>
                        <div style={{position:'absolute',bottom:'7px',paddingLeft:'5%',width:'90%'}}>
                            <img src={`images/head-`+item+`.png`} style={{width:'30px',float:'left'}}/>
                            <p style={{color:'#686868',fontSize:'10px',marginLeft:'5%',float:'left'}}>{this.state.data[item-1]}</p>
                            <img src='images/icon.png' style={{width:'15px',float:'right',marginTop:'7%'}}/>
                        </div>
                    </div>
                ))
            }
            </Flex>
    </div>);
    render() {
        const tabs = [
            { title: '推荐' },
            { title: '冬季' },
            { title: '宜家' },
            { title: '小清新' },
            { title: '小户型' },
            { title: '个性色彩' },
            { title: '彪' },
        ];
        return (
            <div>
                <NavBar
                style={{backgroundColor:'#3fcccb'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                >灵感</NavBar>
                <Tabs tabBarUnderlineStyle={{border:'0'}} tabBarActiveTextColor='#3fcccb' tabBarInactiveTextColor='#666666' tabBarTextStyle={{fontSize:'13px'}} tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6} />}>
                    {this.renderContent}
                </Tabs>
            </div>
        )
    }
}
