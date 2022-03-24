import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, persistor } from './redux/store'
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react'
// import setupInterceptors from "./redux/api/setupInterceptors";

ReactDOM.render(
    <React.Fragment>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.Fragment>,
  document.getElementById("root")
);

// setupInterceptors(store);
// If you want your app to work offline and load faster, you can chađinge
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorkerRegistration.register()
reportWebVitals();
