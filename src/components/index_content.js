import React, { Protypes } from 'react'
import { Row, Col } from 'antd'

const Content = () => {

  return (
    <div className="content1 content">
      <Row>
        <Col span={12}>
          <div className="vw50 text-wrapper left">
              <div className="feature">
                  <hr className="divider" />
                  <h2 className="fix-space-ie">怎么去做一个让人<br />耳目一新的网站呢？</h2>
                  <p className="text">
                      We’ve got you covered. Free websites, easy drag and <br />drop, designer-made templates, beautiful galleries,<br />mobile optimized, domains, huge image collection, <br />secure hosting, SEO, 24/7 full support and more -<br />all wrapped up in one free website builder.
                  </p>
                  <button className="get-started">Start Now
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.9 19"><path d="M1.4 19L0 17.6l8.1-8.1L0 1.4 1.4 0l9.5 9.5"></path></svg>
                      <svg className="sec-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.9 19"><path d="M1.4 19L0 17.6l8.1-8.1L0 1.4 1.4 0l9.5 9.5"></path></svg>
                  </button>
              </div>
            </div>
        </Col>
        <Col span={12}>
        <div className="vw50 outdoor-wrapper">
            <div className="container outdoor">
                <img alt="wix map feature" src="src/public/images/grid_website.jpg" className="grid" />
                <div className="website image-fix">
                    <img alt="" src="src/public/images/hp-travel.svg" />
                    <img alt="wix map feature" src="src/public/images/travel-website.png" />
                </div>
            </div>
        </div>
        </Col>
      </Row>
    </div>
  )
}

Content.protypes = {
  //
}

export default Content
