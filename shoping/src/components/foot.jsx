import React from "react"
import {NavLink} from "react-router-dom"

function Foot(){
    return <div className="foot">
            <NavLink to="/citys">城市</NavLink>
            <NavLink to="/order">订单</NavLink>
            <NavLink to="/my">我的</NavLink>
    </div>
}
export default Foot;