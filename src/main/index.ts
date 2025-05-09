import { electronApp, is, optimizer } from "@electron-toolkit/utils";
import { app, BrowserWindow, ipcMain, shell } from "electron";
import { join } from "path";
import icon from "../../resources/icon.png?asset";

function createWindow(): void {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 900,
        height: 670,
        show: false,
        autoHideMenuBar: true,
        ...(process.platform === "linux" ? { icon } : {}),
        webPreferences: {
            preload: join(__dirname, "../preload/index.js"),
            sandbox: false,
            webSecurity: false,
        },
    });

    mainWindow.on("ready-to-show", () => {
        mainWindow.show();
    });

    mainWindow.webContents.setWindowOpenHandler((details) => {
        shell.openExternal(details.url);
        return { action: "deny" };
    });

    // HMR for renderer base on electron-vite cli.
    // Load the remote URL for development or the local html file for production.
    if (is.dev && process.env["ELECTRON_RENDERER_URL"]) {
        mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
    } else {
        mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
    }
}

// let childWindow: BrowserWindow | null = null;
// 创建子窗口（指定路由）
const createChildWindow = (route: string) => {
    // if (childWindow) {
    //     childWindow.focus();
    //     return;
    // }

    let childWindow = new BrowserWindow({
        width: 600,
        height: 400,
        // parent: mainWindow || undefined, // 可选：让子窗口依附主窗口
        modal: true, // 可选：模态窗口，阻止主窗口交互
        show: false, // 先隐藏，等加载完再显示
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            webSecurity: false,
            preload: join(__dirname, "../preload/index.js"),
        },
    });

    // 只加载特定路由
    // childWindow.loadURL(`http://localhost:3000/#${route}`);
    if (is.dev && process.env["ELECTRON_RENDERER_URL"]) {
        childWindow.loadURL(process.env["ELECTRON_RENDERER_URL"] + `#${route}`);
    } else {
        childWindow.loadFile(join(__dirname, "../renderer/index.html"));
    }

    childWindow.setMenu(null);

    childWindow.once("ready-to-show", () => {
        childWindow?.show();
    });

    childWindow.on("closed", () => {
        childWindow = null as any;
    });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady()
    .then()
    .then(() => {
        // Set app user model id for windows
        electronApp.setAppUserModelId("com.electron");

        // Default open or close DevTools by F12 in development
        // and ignore CommandOrControl + R in production.
        // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
        app.on("browser-window-created", (_, window) => {
            optimizer.watchWindowShortcuts(window);
        });

        // IPC test
        ipcMain.on("ping", () => console.log("pong"));

        ipcMain.on("open-child-window", (event, route) => {
            createChildWindow(route);
        });

        createWindow();

        app.on("activate", function () {
            // On macOS it's common to re-create a window in the app when the
            // dock icon is clicked and there are no other windows open.
            if (BrowserWindow.getAllWindows().length === 0) createWindow();
        });

        // session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
        //     callback({
        //         responseHeaders: {
        //             ...details.responseHeaders,
        //             "Content-Security-Policy": [
        //                 "default-src 'self'; connect-src 'self' http://localhost:8888",
        //             ],
        //         },
        //     });
        // });
    });

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
