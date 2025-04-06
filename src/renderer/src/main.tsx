import "normalize.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";

(window as any).ENGINE_BASE_URL = import.meta.env.VITE_ENGINE_BASE_URL;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
