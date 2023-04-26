import "./DashboardPage.css";
import React, { useState } from "react";
import {
  MdAddCircleOutline,
  MdCategory,
  MdFormatListBulleted,
  MdInsertChartOutlined,
  MdLogout,
  MdManageAccounts,
  MdOutlineHome,
  MdOutlineInventory2,
  MdOutlineShoppingBag,
  MdRequestPage,
  MdSupervisorAccount,
} from "react-icons/md";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Layout, Menu, Button, theme, Row, Col, Avatar } from "antd";
import {  Outlet, Route, Routes, useNavigate } from "react-router-dom";
import   AddOrEditCategory  from "../components/Categories/AddOrEditCategory";
import Home from "../components/Home/Home";
import ListCategory from "../components/Categories/ListCategory";

const { Header, Sider, Content } = Layout;
function DashboardPage() {
  const [marginLeft, setMarginLeft] = useState(200);
  const [collapsed, setCollapsed] = useState(false);
  const siteLayoutStyle ={marginLeft : marginLeft}
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate=useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} 
            style={{
            overflow: 'auto',
            height:'100vh' ,
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}>
        <div className="logo">
          <h2>{collapsed ? 'SS': 'SpringShops'}</h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <MdOutlineHome />,
              label: "Home",
              onClick: ()=>navigate('/')
            },
            {
              key: "2",
              icon: <MdCategory />,
              label: "Categories",
              children: [
                {
                  key: "21",
                  icon: <MdAddCircleOutline />,
                  label: "Add Category",
                  onClick:()=>navigate('/categories/add')
                },
                {
                  key: "22",
                  icon: <MdFormatListBulleted />,
                  label: "List Categories",
                  onClick:()=>navigate('/categories/list')
                },
              ],
            },
            {
              key: "3",
              icon: <MdOutlineInventory2 />,
              label: "Products",
            },
            {
              key: "4",
              icon: <MdOutlineShoppingBag />,
              label: "Oders",
            },
            {
              key: "5",
              icon: <MdRequestPage />,
              label: "Invoices",
            },
            {
              key: "6",
              icon: <MdInsertChartOutlined />,
              label: "Statistics",
            },
            {
              key: "7",
              icon: <MdManageAccounts />,
              label: "Profiles",
            },
            {
              key: "8",
              icon: <MdSupervisorAccount />,
              label: "Accounts",
            },
            {
              key: "9",
              icon: <MdLogout />,
              label: "Logout",
            },
          ]}
        />
      </Sider>
      <Layout style={siteLayoutStyle}>
        <Header
          style={{ padding: 0, background: colorBgContainer , left:marginLeft+16,top:0,position:"fixed",height:70,right:16 }}
          className="site-layout-background"
        >
          <Row>
            <Col md={18} className="text-aline">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => {
                  const sts= !collapsed;
                  setCollapsed(sts);
                setMarginLeft(sts ? 80: 200);
                }
                  
                }
                style={{
                  fontSize: "20px",
                  width: 64,
                  height: 64,
                }}
              />
            </Col>
            <Col md={6}>
              <div>
                <Avatar size={"default"} icon={<UserOutlined />}></Avatar>Nguyễn
                Cao Thức
              </div>
            </Col>
          </Row>
        </Header>

        <Content
          style={{
            margin: "80px 24px 16px 24px",
            padding: 24,
            Height: 280,
            background: colorBgContainer,
          }}
        >
         <div className="content-panel">
         <Routes>
         <Route path="/" element={< Home/>}></Route>
         <Route path="/Categories/add" element={< AddOrEditCategory />}></Route>
         <Route path="/Categories/list" element={< ListCategory />}></Route>
         </Routes>
         </div>
         <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
}

export default DashboardPage;
