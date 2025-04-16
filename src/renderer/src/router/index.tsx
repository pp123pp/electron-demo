import { lazy, Suspense } from "react";
import { createHashRouter } from "react-router-dom";

// 懒加载页面组件
const Layout = lazy(() => import("./../components/Layout"));
const Home = lazy(() => import("../components/Home"));
const DataTransform = lazy(() => import("./../pages/DataTransform"));
const Web3DView = lazy(() => import("./../pages/Web3DView"));

const withSuspense = (Component: React.FC) => (
    <Suspense fallback={<div>Loading...</div>}>
        <Component />
    </Suspense>
);

// 定义路由配置
const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: withSuspense(Home) }, // 默认子路由
            { path: "dataTransform", element: withSuspense(DataTransform) },
        ],
    },
    { path: "web3DView", element: withSuspense(Web3DView) },
]);

export default router;
