import React, { Protypes } from 'react'
import { Row, Col, Button } from 'antd'

const Banner = () => {
  const slogen = {
    title: '现在就开始制作最好的网站',
    content: '咖谱网络使用时下最流行、性能最好的的Nodejs ，使用性能先进的Reactjs，与谷歌Material Design进行构建。',
    Button_title: '马上了解'
  }

  return (
    <div className='forground'>
      <Row>
        <Col span={14} offset={5}>
          <div className="inner">
            <h1>{slogen.title}</h1>
            <p>{slogen.content}</p>
            <div className="call_button">
              <Button size="large">{slogen.Button_title}</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

Banner.protypes = {
  //
}

export default Banner
