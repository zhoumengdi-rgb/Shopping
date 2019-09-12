import React from "react"
import {Switch,Route,Redirect} from "react-router-dom"

function RouterView({routes}){
    let RouteArr = routes.filter(item => !item.redirect); //组件
    let redirectArr = routes.filter(item => item.redirect); //重定向
    return <Switch>
                {
                   RouteArr.map(item => <Route key={item.path} path={item.path} render={(props) => {return <item.component routes={item.children} {...props}></item.component>}}/>) 
                }
                {
                   redirectArr.map(item => <Redirect from={item.path} to={item.redirect} key={item.path}></Redirect>)
                }
           </Switch>
}
export default RouterView;