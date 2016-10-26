import React from 'react';
import { Button, Form, Input } from 'antd';
const createForm = Form.create;
const FormItem = Form.Item;

function noop() {
  return false;
}

let BasicDemo = React.createClass({
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
            <Input placeholder="Realtime validation, try to input Jason Wood" />
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
            <Input type="email" placeholder="This control uses onBlur and onChange" />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="手机"
          hasFeedback
        >
          {getFieldDecorator('passwd', {
            rules: [
              { required: true, whitespace: true, message: 'Please enter your password' },
              { validator: this.checkPass },
            ],
          })(
            <Input type="password" autoComplete="off"
              onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
            />
          )}
        </FormItem>

        {/* <FormItem
          {...formItemLayout}
          label="Confirm password"
          hasFeedback
        >
          {getFieldDecorator('rePasswd', {
            rules: [{
              required: true,
              whitespace: true,
              message: 'Please confirm your password',
            }, {
              validator: this.checkPass2,
            }],
          })(
            <Input type="password" autoComplete="off" placeholder="Both passwords that you enter must be consistent."
              onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
            />
          )}
        </FormItem> */}

        {/* <FormItem
          {...formItemLayout}
          label="ID Card"
        >
          <Input.Group className="ant-search-input">
            {getFieldDecorator('id-number', {
              rules: [{ required: true, message: 'ID number is required' }],
            })(
              <Input />
            )}
            <div className="ant-input-group-wrap">
              <Button icon="scan" className="ant-search-btn" />
            </div>
          </Input.Group>
        </FormItem> */}

        <FormItem
          {...formItemLayout}
          label="需求"
        >
          {getFieldDecorator('textarea', {
            rules: [
              { required: true, message: 'Really not supposed to write something?' },
            ],
          })(
            <Input type="textarea" placeholder="Please write something" id="textarea" name="textarea" />
          )}
        </FormItem>

        <FormItem wrapperCol={{ span: 12, offset: 7 }}>
          <Button type="primary" onClick={this.handleSubmit}>提交</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="ghost" onClick={this.handleReset}>关闭</Button>
        </FormItem>
      </Form>
    );
  },
});

BasicDemo = createForm()(BasicDemo);

export default BasicDemo
