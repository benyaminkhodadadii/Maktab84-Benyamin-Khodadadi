import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {persistore, store} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistore}>
                <BrowserRouter>
                    <App/>

                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
