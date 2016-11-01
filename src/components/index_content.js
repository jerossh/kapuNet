import React, { Protypes } from 'react'
import { Row, Col } from 'antd'

const Content = () => {


  return (
    <div className="content1 content">
      <Row className="ant-row-c">
        <Col span={12}>
          <div className="vw50 text-wrapper left">
              <div className="feature">
                  <hr className="divider" />
                  <h2 className="fix-space-ie">怎么去做一个让人<br />耳目一新的网站呢？</h2>
                  <p className="text">
                      遵循良好的设计风格，本着简介，内容优先的设计原则 <br />使用谷歌 material 设计指导。善用世界先进的前端自动<br />化技术，后端nodejs强劲加持；借助国内支付宝团队 <br />ant design 框架，利用先进的react技术，制造出令人<br />耳目一新的网站。
                  </p>
                  <button className="get-started">了解更多
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.9 19"><path d="M1.4 19L0 17.6l8.1-8.1L0 1.4 1.4 0l9.5 9.5"></path></svg>
                      <svg className="sec-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.9 19"><path d="M1.4 19L0 17.6l8.1-8.1L0 1.4 1.4 0l9.5 9.5"></path></svg>
                  </button>
              </div>
              <div className="feature">
                  <hr className="divider" />
                  <h2 className="fix-space-ie">高效而精准的搜索引擎<br />关键词优化</h2>
                  <p className="text">
                      利用每个页面的关键词与描述, 以及页面内良好的链接、标 <br />题层级与内容词汇的选择，可让搜索引擎很好的理解页面<br />内容与意义。新闻与幻灯片中的图片也设置了信息系统， <br />让每一次更新，每一张图片都让你的网站更加健壮。
                  </p>
                  <button className="get-started">了解更多
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.9 19"><path d="M1.4 19L0 17.6l8.1-8.1L0 1.4 1.4 0l9.5 9.5"></path></svg>
                      <svg className="sec-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.9 19"><path d="M1.4 19L0 17.6l8.1-8.1L0 1.4 1.4 0l9.5 9.5"></path></svg>
                  </button>
              </div>
            </div>
        </Col>
        <Col span={12}>
        <div className="vw50 outdoor-wrapper">
            <div className="container outdoor topvh">
                <img alt="wix map feature" src="http://ofwgmeiuh.bkt.clouddn.com/grid_website.jpg" className="grid" />
                <div className="website image-fix">
                    <img alt="" src="http://ofwgmeiuh.bkt.clouddn.com/hp-travel.svg" />
                    <img alt="wix map feature" src="http://ofwgmeiuh.bkt.clouddn.com/travel-website.png" />
                </div>
            </div>
        </div>
        </Col>
      </Row>
      <Row className="ant-row-c">
        <Col span={12}>
        <div className="vw50 wix-features-container">
                    <div className="map image-fix">
                        <img alt="wix map feature" src="http://ofwgmeiuh.bkt.clouddn.com/feature-map.jpg" />
                    </div>
                    <div className="online image-fix">
                        <img alt="wix online store feature" src="http://ofwgmeiuh.bkt.clouddn.com/hp-onlinestore.svg" />
                        <img alt="wix online store feature" src="http://ofwgmeiuh.bkt.clouddn.com/feature-online.jpg" />
                    </div>
                    <div className="booking image-fix">
                        <img alt="wix booking feature" src="http://ofwgmeiuh.bkt.clouddn.com/hp-booking.svg" />
                        <img alt="wix booking feature" src="http://ofwgmeiuh.bkt.clouddn.com/feature-booking.jpg" />
                    </div>
                </div>
        </Col>
        <Col span={12}>
          <div className="vw50 text-wrapper features-left">
              <div className="">
                  <hr className="divider" />
                  <h2 className="fix-space-ie">简单易用的后台系统与网<br />站分析系统</h2>
                  <p className="text">
                      我们一直在为后台的易用性方面做努力，调研显示普通营销型<br />网站的功能需求最大的一块就是新闻系统，其次为产品展示系统<br />偶尔还需要修改联系信息、幻灯片等功能，对于其他功能的基本<br />上使用不到，我们的后台系统对这些基本功能进行了大量的优化，<br />简化了大量的操作，让日常维护更加简单，方便。
                  </p>
                  <button className="get-started">了解更多
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.9 19"><path d="M1.4 19L0 17.6l8.1-8.1L0 1.4 1.4 0l9.5 9.5"></path></svg>
                      <svg className="sec-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.9 19"><path d="M1.4 19L0 17.6l8.1-8.1L0 1.4 1.4 0l9.5 9.5"></path></svg>
                  </button>
              </div>
          </div>
        </Col>
      </Row>
      <Row className="gallery ant-row-c">

        <Col span={12}>
          <div className="vw50 text-wrapper left">
              <hr className="divider" />
              <div className="fix-space-ie">
                  <div className="slide-1 show">
                      <h2>移动优先原则，适配电脑<br />平板等多端浏览器</h2>
                      <p className="text">
                          网站针对电脑与平板的各个尺寸屏幕都进行了适配，可<br />完美显示于1024px ～ 1920px 像素，甚至在高分屏下<br />也有着优秀的表现素质网站使用眼下流行的媒体查询技<br />术，结合强大的js动画框架为网站添加舒适流畅的显示效<br />果。
                      </p>
                  </div>
                  <div className="slide-2">
                      <h2>Promote Yourself &amp; <br /> Grow Your Business</h2>
                      <p className="text">
                          With a huge variety of over 200 Apps, you can grow your<br />business in ways you never imagined. Send beautiful emails,<br />create invoices, manage contacts, and get found online<br />with easy SEO tools. You can even add a countdown to<br />an upcoming event. Creating your free website is<br />just the beginning.
                      </p>
                  </div>
                  <div className="slide-3">
                      <h2>How to Create Your Website</h2>
                      <h3 className="subtitle">Here's how to create your own stunning website in 5 steps</h3>
                      <ol className="text list">
                          <li>Sign up for free or log-in to your existing account </li><li>Choose a template that fits your needs or start from scratch</li><li>Customize or add anything like text, images &amp; more</li><li>Publish your site to share it with the world</li><li>Manage your entire business online with domains, email marketing &amp; more</li>
                      </ol>
                  </div>
              </div>
              <button className="get-started">了解更多
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.9 19"><path d="M1.4 19L0 17.6l8.1-8.1L0 1.4 1.4 0l9.5 9.5"></path></svg>
                  <svg className="sec-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.9 19"><path d="M1.4 19L0 17.6l8.1-8.1L0 1.4 1.4 0l9.5 9.5"></path></svg>
              </button>
              <div className="pager">
                  <div className="single-pager active" data-for="slide-1-nav"></div>
                  <div className="single-pager" data-for="slide-2-nav"></div>
                  <div className="single-pager" data-for="slide-3-nav"></div>
              </div>
          </div>
        </Col>
        <Col span={12}>
        <div className="vw50 features-gallery" data-last="slide-1-img">
              <div className="slide-1-img features-slide showing">
                  <div className="small image-fix">
                      <img alt="" src="http://ofwgmeiuh.bkt.clouddn.com/hp-gallery-A-small.svg" data-ie=""/>
                      <img src="http://ofwgmeiuh.bkt.clouddn.com/A-small.jpg" data-ie="" alt=""/>
                  </div>
                  <div className="big image-fix">
                      <img alt="" src="http://ofwgmeiuh.bkt.clouddn.com/hp-gallery-A-big.svg" data-ie=""/>
                      <img src="http://ofwgmeiuh.bkt.clouddn.com/A-big.jpg" alt="" />
                  </div>
              </div>
              <div className="slide-2-img features-slide">

                  <div className="small image-fix">
                      <img alt="" src="http://ofwgmeiuh.bkt.clouddn.com/hp-gallery-B-small.svg" data-ie=""/>
                      <img src="http://ofwgmeiuh.bkt.clouddn.com/B-small.jpg" alt="" data-ie=""/>
                  </div>
                  <div className="big image-fix">
                      <img alt="" src="http://ofwgmeiuh.bkt.clouddn.com/hp-gallery-B-big.svg" data-ie=""/>
                      <img src="http://ofwgmeiuh.bkt.clouddn.com/B-big.jpg" alt="" />
                  </div>
              </div>
              <div className="slide-3-img features-slide">
                  <div className="small image-fix">
                      <img alt="" src="http://ofwgmeiuh.bkt.clouddn.com/hp-gallery-C-small.svg" data-ie=""/>
                      <img src="http://ofwgmeiuh.bkt.clouddn.com/C-small.jpg" alt="" data-ie=""/>
                  </div>
                  <div className="big image-fix">
                      <img alt="" src="http://ofwgmeiuh.bkt.clouddn.com/hp-gallery-C-big.svg" data-ie=""/>
                      <img src="http://ofwgmeiuh.bkt.clouddn.com/C-big.jpg" alt="" />
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
