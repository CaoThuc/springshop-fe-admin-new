import { PageHeader } from '@ant-design/pro-layout'
import { Divider } from 'antd';
import React, { Component } from 'react'
export default class ContentHeader extends Component {
    
  render() {
    const {navigate,title,className} =this.props;
    return (
      <div>  <PageHeader className={className} style={{maginLeft:0}} 
      title={title}
       onBack={()=> navigate(-1)}
      >
      </PageHeader>
      <Divider></Divider>
      </div>
    )
  }
}
