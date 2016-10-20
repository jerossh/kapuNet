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
                <img src="..\src\public\images\logo.svg" />
              </a>
          </div>
        </t>
        <t key="nav" mode="horizontal" id="nav">
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
              <MenuItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="contact">
              联系我们
            </Menu.Item>
          </Menu>
        </t>
      </header>
    )
  }
}
