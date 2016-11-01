import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.less';

import Header from './../components/Header'
import Content from './../components/Index_content'
import Form from './../components/Form'
import Footer from './../components/Footer'

function IndexPage() {

  return (
    <div>
      <Header />
      <div id="container">
        <Content />
        <div id='formfooter'>
          <Form />
          <Footer />
        </div>
      </div>

    </div>
  )

  // return (
  //   <div className={styles.normal}>
  //     <h1>Welcome to dva!</h1>
  //     <hr />
  //     <ul className={styles.list}>
  //       <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
  //       <li><a href="https://github.com/sorrycc/blog/issues/8" target="_blank">Getting Started</a></li>
  //     </ul>
  //   </div>
  // );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
