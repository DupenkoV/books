import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import {Container } from './components'; 
import React from 'react';

import {App} from "./components";
import { store } from './store';

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

const containerStyle = {
  width: '1140px',
  margin: '0 auto',
};

root.render(
    <Provider store={store}>
        <Container>
            <App />
        </Container>
    </Provider>
);
