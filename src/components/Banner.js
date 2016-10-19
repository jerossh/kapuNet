import React, { Protypes } from 'react'
import { Row, Col, Button } from 'antd'

const Banner = () => {
  const slogen = {
    title: 'It All Starts with Your Stunning Website',
    content: 'Wix unites beauty and advanced technology to create your stunning website. It’s easy and free.',
    Button_title: 'Start Now'
  }

  return (
    <Row>
      <Col span={12} offset={6}>
        <h1>{slogen.title}</h1>
        <p>{slogen.content}</p>
        <Button>{slogen.Button_title}</Button>
      </Col>
    </Row>
  )
}

Banner.protypes = {
  //
}

export default Banner
