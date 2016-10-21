import React, {PropTypes, Component} from 'react'
import {  Menu, Icon, Link  } from 'antd';

import Banner from '../components/Banner'
import Nav from '../components/Nav'

const Header = () => {
  return (
    <div className="homewrap">
      <div className='home'>
        <Nav />
        <Banner />
      </div>
    </div>
  )
}

export default Header
