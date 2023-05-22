import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./components/context/ThemeContext";
import { SidebarProvider } from "./components/context/SidebarContext";
import { BoardProvider } from "./components/context/BoardContext";
import { ModalProvider } from "./components/context/ModalContext";
import { TaskProvider } from "./components/context/TaskContext";
import { ViewportProvider } from "./components/context/ViewportContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SidebarProvider>
        <BoardProvider>
          <ModalProvider>
            <TaskProvider>
              <ViewportProvider>
                <App />
              </ViewportProvider>
            </TaskProvider>
          </ModalProvider>
        </BoardProvider>
      </SidebarProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
