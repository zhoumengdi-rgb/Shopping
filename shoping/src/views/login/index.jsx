import React,{Component} from "react"

import {get,post} from "../../utils/request"
import {connect} from "react-redux"
class Login extends Component{
    state={
        username:"",
        password:"",
        captcha:"",
        img:""
    }
    render(){
        let {username,password,captcha} = this.state;
        return (
        <div>
            <p><input type="text" placeholder="请输入用户名" value={username}  onChange={(e)=>{
                this.setState({
                    username:e.target.value
                })
            }}/></p>
            <p><input type="text" placeholder="请输入密码" value={password} onChange={(e)=>{
                this.setState({
                    password:e.target.value
                })
            }}/></p>
            <p><input type="text" placeholder="请输入验证码" value={captcha} onChange={(e)=>{
                this.setState({
                    captcha:e.target.value
                })
            }}/></p>

            <span dangerouslySetInnerHTML={{__html:this.state.img}}></span>

            <button onClick={this.handleLogin.bind(this)}>登陆</button>
        </div>
     ) 
    }
    componentDidMount(){
        get('/buyer/user/captcha').then(res =>{
            this.setState({
                img:res.data
            })
        })
    }
    handleLogin(){
        let {username,password,captcha} = this.state;
        post('/buyer/user/login',{
            username,
            password,
            captcha
        }).then(res =>{
            console.log(res)
            //设置本地存储
            window.localStorage.setItem('token',res.token);
            this.props.history.push('/citys');
            this.props.setName(res.buyer_name)
        })
    }
}
export default connect(
    (state)=>{
        return{
            
        }
    },
    (dispatch)=>{
        return{
            setName(name){
                dispatch({type:"SENT_NAME",name})
            }
        }
    }
)(Login)