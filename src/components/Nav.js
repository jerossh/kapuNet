import React, {PropTypes, Component} from 'react'
import {  Menu, Icon, Link  } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class Nav extends Component {
  static PropTypes = {
    //
  }

  // state = { filter: SHOW_ALL }
  state = {current: 'mail'}

  handleClick = e => {
    console.log('click', e);
    this.setState({
      current: e.key
    })
  }

  render() {
    return (
      <header id="header">
        <t>
          <div className="ant-col-xs-24 ant-col-sm-7 ant-col-md-6 ant-col-lg-4">

              <a id="logo" href="/">
                <img src="..\src\public\images\logo2.png" />
              </a>
          </div>
        </t>
        <t key="nav" mode="horizontal" id="nav" className="ant-col-xs-24 ant-col-sm-17 ant-col-md-12 ant-col-lg-16">
          <Menu onClick={this.handleClick}
                selectedKeys={[this.state.current] /*为什么是数组*/}
                mode="horizontal"
          >
            <Menu.Item key="index">
              首页
            </Menu.Item>
            <Menu.Item key="feature">
              特征
            </Menu.Item>
            <SubMenu title={<span><Icon type="setting" />案例浏览</span>}>
              <MenuItemGroup title="成熟型">
                <Menu.Item key="setting:1">中誉会计</Menu.Item>
                <Menu.Item key="setting:2">中拓网络</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="创业型">
                <Menu.Item key="setting:3">一只猫舍</Menu.Item>
                <Menu.Item key="setting:4">皇爵进出口</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="contact">
              联系我们
            </Menu.Item>
          </Menu>
        </t>
        <t>
          <div className="ant-col-xs-24 ant-col-sm-7 ant-col-md-6 ant-col-lg-4 right">
            <div className="international">
              <Icon type="environment-o" /> English
            </div>
          </div>
        </t>
      </header>
    )
  }
}
