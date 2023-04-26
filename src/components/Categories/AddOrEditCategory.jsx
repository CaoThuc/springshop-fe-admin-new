import { Button, Col, Divider, Form, Input, Row, Select } from 'antd';
import React, { Component } from 'react';
import wichRouter from '../../helpers/wichRouter';
import ContentHeader from '../common/ContentHeader';
 class AddOrEditCategory extends Component {
  onSubmitForm =(values) => { 
    console.log(values);
   };
  render() {
    const {navigate} =this.props.router;
    return (
      <div>
        <ContentHeader navigate={navigate} title="Add New Category" className="site-page-header"></ContentHeader>
        <Form layout="vertical" className='form' onFinish={this.onSubmitForm} >
           <Row>
              <Col md={12}>
                <Form.Item  label="CategoryId" style={{margin:0,padding:0}}  name="categoryId">
                  <Input readOnly />
                </Form.Item>
                <Form.Item label="name" name="name" rules={[{required:true, min:2}]}>
                  <Input />
                </Form.Item>
                <Form.Item label="Status" name="status" initialValue={"0"}>
                  <Select >
                    <Select.Option value="0">Visible</Select.Option>
                    <Select.Option value="1">Invisible</Select.Option>
                  </Select>
                </Form.Item>
                <Divider></Divider>
                <Button htmlType='submit' type='primary' style={{float:'right'}}>Save</Button>
              </Col>
          
           </Row>
        </Form>
      </div>
    )
  }
}

export default wichRouter(AddOrEditCategory);