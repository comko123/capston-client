import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Provider } from "react-redux"
import store from "./store"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import "./reset.css"
import "./fonts/inter.css"
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react"
import { inCloser } from "./api/inClosing"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <ApiProvider api={inCloser}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </ApiProvider>)
