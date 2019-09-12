import React from "react"
import {withRouter} from "react-router-dom"

function Header(props){
    return <div className="head">
        <span style={{display:props.isBlack ? "block":"none"}}
         onClick={() =>{
             props.history.go(-1)
         }}
        >&lt;</span>
         <span>{props.title}</span>
    </div>
}
//默认
Header.defaultProps = {
    title:"租赁翻译机",
    isBlack:false //是否显示
}
export default withRouter(Header)