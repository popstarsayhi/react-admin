import React, {useState} from "react";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {Breadcrumb, Layout, Menu, theme, MenuProps} from 'antd';
import {Outlet, useNavigate,  useLocation} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

//登入请求到数据后，既可以跟items这个数组进行匹配
const items: MenuItem[] = [
    {
        label: 'page 1',
        key: '/page1',
        icon: <PieChartOutlined/>
    },
    {
        label: 'page 2',
        key: '/page2',
        icon: <DesktopOutlined/>
    },
    {
        label: 'page 3',
        key: '/page3',
        icon: <UserOutlined/>,
        children: [
            {
                label: 'page 301',
                key: '/page3/page301'
            },
            {
                label: 'page 302',
                key: '/page3/page302'
            },
            {
                label: 'page 303',
                key: '/page3/page303'
            },
        ]
    },
    {
        label: 'page 4',
        key: '/page4',
        icon: <FileOutlined/>,
        children: [
            {
                label: 'page 401',
                key: '/page4/page401'
            },
            {
                label: 'page 402',
                key: '/page4/page402'
            },
            {
                label: 'page 403',
                key: '/page4/page403'
            },
        ]
    },
]


const Comp: React.FC = () => {
    const navigate = useNavigate() //返回的是一个对象

    const menuClick = (e: { key: string }) => {
        navigate(e.key)
    }

    const currentRoute = useLocation()

    //用currentRoute.pathname和items数组里的key进行对比
    let firstOpenKey:string = ""

    const findKey = (item:{key:string})=>{
        return item.key === currentRoute.pathname
    }

    for(let i = 0; i < items.length; i++){
        if(items[i]!['children'] && items[i]!['children'].length > 1 && items[i]!['children'].find(findKey)){
            firstOpenKey = items[i]!.key as string
            break
        }
    }


    //设置展开项的初始值
    const [openKeys, setOpenKeys] = useState([firstOpenKey])

    const handleOpenChange = (keys: string[]) => {
        //只保存最后一项
        setOpenKeys([keys[keys.length - 1]])
    }



    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline"
            items={items}
            onClick={menuClick}
            //展开和回收事件
            onOpenChange={handleOpenChange}
            //当前展开项的key数组
            openKeys={openKeys}
        />
    )
}

export default Comp