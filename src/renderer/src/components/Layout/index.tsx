// import { Link, Outlet } from "react-router-dom";

// const Layout = () => {
//     return (
//         <div>
//             <nav>
//                 <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
//                 <Link to="/about/profile">Profile</Link>
//             </nav>
//             <hr />
//             {/* Outlet 用于渲染子路由 */}
//             <Outlet />
//         </div>
//     );
// };

// export default Layout;

import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

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

// const items: MenuProps["items"] = [
//     UserOutlined,
//     VideoCameraOutlined,
//     UploadOutlined,
//     BarChartOutlined,
// ].map((icon, index) => ({
//     key: String(index + 1),
//     icon: React.createElement(icon),
//     label: `nav ${index + 1}`,
//     //点击跳转到路由
//     onClick: () => {
//         console.log("click");
//     },
// }));

const items: MenuProps["items"] = [
    { key: "1", icon: <UserOutlined />, label: <Link to="/">Home</Link> },
    {
        key: "2",
        icon: <VideoCameraOutlined />,
        label: <Link to="/about">About</Link>,
    },
    {
        key: "3",
        icon: <UploadOutlined />,
        label: <Link to="/profile">Profile</Link>,
    },
];

const App: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

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
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
                    <div
                        style={{
                            padding: 24,
                            textAlign: "center",
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default App;
