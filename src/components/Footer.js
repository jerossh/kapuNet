import React, { Protypes } from 'react'
import { Row, Col, Button } from 'antd'

const Footer = () => {
  return (
    <footer>
      <Row>
        <Col span={20} offset={2}>
          <div className="footer_content">
            <h3>如果您有意愿或者有任何的疑问或建议</h3>
            <div className="feed">
              <Button  type="primary" size="large">联系我们</Button>
            </div>
          </div>
          <div className='copyright'>
            <span>KapuNet@2016</span>
            <span>Made by Jon_s</span>
            <span>Wechat</span>
            <span>Contact</span>
          </div>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer
