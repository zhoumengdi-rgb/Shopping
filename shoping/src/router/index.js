import React from "react"
import {BrowserRouter} from "react-router-dom"

import RouterView from "./routerView"

import routes from "./routes"

function RouterRou(){
    return <BrowserRouter>
              <RouterView routes={routes}/>
           </BrowserRouter>
}
export default RouterRou;