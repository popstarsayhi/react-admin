import React, {useState} from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import {Outlet, useNavigate} from "react-router-dom";

const {Header, Content, Footer, Sider} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Page 1', '/page1', <PieChartOutlined/>),
    getItem('Page 2', '/page2', <DesktopOutlined/>),
    getItem('User', 'sub1', <UserOutlined/>, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined/>, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined/>),
];


const Home: React.FC = () => {

    const navigate = useNavigate() //返回的是一个对象

    const menuClick = (e:{key:string})=>{
        // console.log(e.key)
        //编程式导航跳转
        navigate(e.key)
    }


    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Layout style={{minHeight: '100vh'}}>
            {/*左边侧边栏*/}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)'}}/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClick}/>
            </Sider>

            {/*右边内容*/}
            <Layout className="site-layout">
                {/*右边头部*/}
                <Header style={{padding: 0, background: colorBgContainer}}>
                    <Breadcrumb style={{lineHeight:'64px', marginLeft:'20px'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                {/*右边内容*/}
                <Content style={{margin: '16px 16px 0'}}>
                    {/*窗口部分*/}
                    <Outlet/>
                </Content>
                {/*右边底部*/}
                <Footer style={{textAlign: 'center', padding:'0', lineHeight:'48px'}}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>

        </Layout>
    );
};

export default Home;