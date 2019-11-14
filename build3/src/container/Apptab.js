import React from 'react';
import { TabBar } from 'antd-mobile';
import { NavBar, Icon } from 'antd-mobile';
import Apphome from './Apphome';
import Appinspiration from './Appinspiration';
import Appstore from './Appstore';

export default class Apptab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab'
    };
  }
  render() {
    return (
      <div style={{ 
        position: 'fixed', 
        height: '100%', 
        width: '100%', 
        top: 0 
      }}>
        <TabBar
          unselectedTintColor="#949494"//没选中的颜色
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(images/shouye0.png) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(images/shouye.png) center center /  21px 21px no-repeat' 
            }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
            <Apphome/>
            
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(images/linggan0.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(images/linggan.png) center center /  21px 21px no-repeat' }}
              />
            }
            title="灵感"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
            <Appinspiration/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(images/shangcheng0.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(images/shangcheng.png) center center /  21px 21px no-repeat' }}
              />
            }
            title="商城"
            key="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <Appstore/>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'images/me0.png' }}
            selectedIcon={{ uri: 'images/me.png' }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
                <NavBar style={{backgroundColor:'#3fcccb'}}>我的</NavBar>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
