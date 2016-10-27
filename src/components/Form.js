import React from 'react';
import { Button, Form, Input, Col  } from 'antd';


const createForm = Form.create;
const FormItem = Form.Item;
const InputGroup = Input.Group;

function noop() {
  return false;
}

let ContactForm = React.createClass({
  handleReset(e) {
    e.preventDefault();
    this.props.form.resetFields();
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
    });
  },

  userExists(rule, value, callback) {
    if (!value) {
      callback();
    } else {
      setTimeout(() => {
        if (value === 'Jason Wood') {
          callback([new Error('Sorry, the user name is already in use.')]);
        } else {
          callback();
        }
      }, 800);
    }
  },

  checkPass(rule, value, callback) {
    const { validateFields } = this.props.form;
    if (value) {
      validateFields(['rePasswd'], { force: true });
    }
    callback();
  },

  checkPass2(rule, value, callback) {
    const { getFieldValue } = this.props.form;
    if (value && value !== getFieldValue('passwd')) {
      callback('The two passwords you enter are inconsistent!');
    } else {
      callback();
    }
  },

  render() {
    const { getFieldDecorator, getFieldError, isFieldValidating } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
    };
    return (
      <Form horizontal id="form">
        {/* <caption> dodo</caption>   */}
        <FormItem
          label=""
          labelCol={{ span: 0 }}
          wrapperCol={{ span: 24 }}
        >
          <h2 className="ant-form-text" id="formTitle" name="static">联系我们</h2>
          {/* <p className="ant-form-text">
            <a href="#">link</a>
          </p> */}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="昵称"
          hasFeedback
          help={isFieldValidating('name') ? 'validating...' : (getFieldError('name') || []).join(', ')}
        >
          {getFieldDecorator('name', {
            rules: [
              { required: true, min: 5, message: 'User name for at least 5 characters' },
              { validator: this.userExists },
            ],
          })(
            <Input placeholder=" 姓名或者昵称，不要超过五个字，请使用中文" />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="邮件"
          hasFeedback
        >
          {getFieldDecorator('email', {
            validate: [{
              rules: [
                { required: true },
              ],
              trigger: 'onBlur',
            }, {
              rules: [
                { type: 'email', message: 'Please input the correct email' },
              ],
              trigger: ['onBlur', 'onChange'],
            }],
          })(
            <Input type="email" placeholder="留下邮箱，我们可以以邮件的形式回复您的疑问，更加方便无扰" />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="电话"
        >
        {getFieldDecorator('tel', {
          rules: [
            { required: true, message: 'We need your phonenumber?' },
          ],
        })(
          <InputGroup>
            <Col span="4">
              <Input id="tel1" defaultValue="086" />
            </Col>
            <Col span="2">
              <p className="ant-form-split">--</p>
            </Col>
            <Col span="6">
              <Input id="tel1" />
            </Col>
            <Col span="6">
              <Input id="tel2" />
            </Col>
            <Col span="6">
              <Input id="tel3" />
            </Col>
          </InputGroup>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="需求"
        >
          {getFieldDecorator('textarea', {
            rules: [
              { required: false, message: 'Really not supposed to write something?' },
            ],
          })(
            <Input type="textarea" placeholder="有任何疑问或者建议？" id="textarea" name="textarea" />
          )}
        </FormItem>

        <FormItem wrapperCol={{ span: 12, offset: 7 }}>
          <Button type="primary" onClick={this.handleSubmit}>提交</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="ghost" id="closeForm">关闭</Button>
        </FormItem>
      </Form>
    );
  },
});

ContactForm = createForm()(ContactForm);

export default ContactForm
