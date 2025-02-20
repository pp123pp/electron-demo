import { ConfigProvider } from "antd";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
    return (
        <ConfigProvider
            theme={{
                token: { colorPrimary: "#1677ff" },
                components: {
                    Tabs: {
                        itemColor: "#fff",
                    },
                },
            }}
        >
            <Suspense fallback={<div>Loading...</div>}>
                <RouterProvider router={router} />
            </Suspense>
        </ConfigProvider>
    );
}

export default App;
