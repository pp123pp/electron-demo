import "normalize.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

(window as any).ENGINE_BASE_URL = import.meta.env.VITE_ENGINE_BASE_URL;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
