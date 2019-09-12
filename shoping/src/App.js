import React from 'react';
import "./assets/css/style.scss"
import Router from "./router" //引入路由
import {Provider} from "react-redux"
import store from "./store/index"
function App() {
  return <Provider store={store}>
            <Router></Router>
        </Provider>
}

export default App;
