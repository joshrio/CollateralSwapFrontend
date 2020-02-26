import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { ToastProvider } from "react-toast-notifications"
import { GlobalStyle } from "./App.styles.js"

ReactDOM.render(
	<ToastProvider placement="top-center" autoDismissTimeout={7000}>
		<GlobalStyle />
		<App />
	</ToastProvider>,
	document.getElementById("root")
)
