import React from "react";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";
import ThemeProvider from "./theme/ThemeProvider";


const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
)

