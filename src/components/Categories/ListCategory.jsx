import React, { Component } from "react";
import wichRouter from "../../helpers/wichRouter";
import ContentHeader from "../common/ContentHeader";
import { Button, Modal, Space, Table, Tag } from "antd";
import Column from "antd/es/table/Column";
import {EditOutlined ,DeleteOutlined, ExclamationCircleOutlined} from '@ant-design/icons';

class ListCategory extends Component {
  constructor(){
    super()
    this.state={
      dataSource:[{
        categoryId:1,name:'Computer ' ,status:0
      },{
        categoryId:1,name:'Computer ' ,status:1
      },{
        categoryId:1,name:'Computer ' ,status:0
      },{
        categoryId:1,name:'Computer ' ,status:1
      }
    ],
    category:{
           
    }
    }
  }
  editCategory=(category) => { 
    console.log(category);
   }
   deleteCategory =() => { 
    console.log(this.state.category)
    }
   openDeletComfirmModel =(category) => { 
    this.setState({...this.state,category: category});
    console.log(category);
    const message= 'Do you want to delete the category' + category.name;
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: this.deleteCategory,
      onText: "Delete",
      cancelText: "Cancel",

    })
    }
  render() {
    const { navigate } = this.props.router;
    return (
      <div>
        <ContentHeader
          navigate={navigate}
          title="List Categories"
          className="site-page-headers"
        ></ContentHeader>
        <Table
          dataSource={this.state.dataSource}
          size="small"
          rowKey="categoryId"
        >
          <Column
            title="CategoryId"
            key="categoryId"
            dataIndex="categoryId"
            width={40}
            align="center"
          ></Column>
          <Column
            title="Name"
            key="name"
            dataIndex="name"
            
          ></Column>
          <Column
            title="Status"
            key="status"
            dataIndex="status"
            width={80}
            render={(_,{status})=>{
              let color ='volcano'
              let name='In-visible'
              if(status === 0){
                color='green'
                name='Visible'
              }
              return <Tag color={color}>{name}</Tag>
            }}
          ></Column>
          <Column
            title="Action"
            key="action"
            width={150}
            align="center"
            render={(_,record)=>(
              <Space size="middle">
                <Button key={record.key} type="primary" size="small" onClick={()=>this.editCategory(record)}>
                  <EditOutlined style={{marginRight:8}} /> Edit
                </Button>
                <Button key={record.key} type="primary" danger size="small" onClick={()=>this.openDeletComfirmModel(record)}>
                  <DeleteOutlined style={{marginRight:8}} />delete
                  </Button>
              </Space>
            )}
          ></Column>
        </Table>
      </div>
    );
  }
}

export default wichRouter(ListCategory);
