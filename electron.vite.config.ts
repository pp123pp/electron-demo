import react from "@vitejs/plugin-react";
import { defineConfig, externalizeDepsPlugin, loadEnv } from "electron-vite";
import { resolve } from "path";
// import { loadEnv } from "vite";

export default defineConfig(({ mode }) => {
    // 根据当前模式读取相应的环境变量
    const env = loadEnv(mode, process.cwd());
    return {
        main: {
            plugins: [externalizeDepsPlugin()],
        },
        preload: {
            plugins: [externalizeDepsPlugin()],
        },
        renderer: {
            publicDir: "public",
            define: {
                "window.ENGINE_BASE_URL": JSON.stringify(
                    env.VITE_ENGINE_BASE_URL,
                ),
            },
            server: {
                hmr: false,
            },
            resolve: {
                alias: {
                    "@renderer": resolve("src/renderer/src"),
                    "@": resolve(__dirname, "src"),
                },
            },
            plugins: [react()],
        },
    };
});
