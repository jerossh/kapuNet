import React, { Protypes } from 'react'
import { Row, Col, Button } from 'antd'

const Footer = () => {
  return (
    <footer id="footer">
      <Row>
        <Col span={20} offset={2}>
          <div className="footer_content">
            <h3>如果您有意愿或者有任何的疑问或建议</h3>
            <div className="feed">
              <Button  type="primary" size="large" className="contact">联系我们</Button>
            </div>
          </div>
          <div className='copyright'>
            <span>版权所有 KapuNet©️2016</span>
            <span>Made by <a href='http://www.jon23.top/'>Jon_s</a></span>
            <span> <a disabled href="http://www.KapuNet.com">微信</a></span>
            <span><a href="mailto:jerosshen@gmail.com">邮件</a></span>
            <span><a href="http://www.zhongyukuaiji.com">公司注册</a></span>
            <span><a href="http://www.zhongyukuaiji.com">寝具购买</a></span>
            <span><a href="http://www.zhongyukuaiji.com">猫猫照顾</a></span>
          </div>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer
