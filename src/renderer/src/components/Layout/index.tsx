import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const { Content, Sider } = Layout;

const siderStyle: React.CSSProperties = {
    overflow: "auto",
    height: "100vh",
    position: "sticky",
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: "thin",
    scrollbarGutter: "stable",
};

const openNewWindow = (route: string) => {
    window.electron.ipcRenderer.send("open-child-window", route);
};

const items: MenuProps["items"] = [
    { key: "1", icon: <UserOutlined />, label: <Link to="/">Home</Link> },
    {
        key: "2",
        icon: <VideoCameraOutlined />,
        label: <Link to="/web3DView">web3DView</Link>,
    },
    {
        key: "3",
        icon: <UploadOutlined />,
        label: <div onClick={() => openNewWindow("/web3DView")}>三维可视</div>,
    },
];

const App: React.FC = () => {
    return (
        <Layout hasSider>
            <Sider style={siderStyle}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    items={items}
                />
            </Sider>
            <Layout>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
