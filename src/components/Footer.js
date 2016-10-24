import React, { Protypes } from 'react'
import { Row, Col, Button } from 'antd'

const Footer = () => {
  return (
    <footer>
      <Row>
        <Col span={20} offset={2}>
          <div className="footer_content">
            <h3>If you have any question</h3>
            <div className="feed">
              <Button  type="primary" size="large">Send Feedback</Button>
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
