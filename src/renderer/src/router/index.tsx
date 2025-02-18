import { lazy, Suspense } from "react";
import { createHashRouter } from "react-router-dom";

// 懒加载页面组件
const Layout = lazy(() => import("./../components/Layout"));
const Home = lazy(() => import("./../components/Home"));
const About = lazy(() => import("./../components/About"));
const Profile = lazy(() => import("./../components/Profile"));

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
            { path: "about", element: withSuspense(About) },
            { path: "profile", element: withSuspense(Profile) },
        ],
    },
]);

export default router;
