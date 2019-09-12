import React,{Component} from "react"

// import {registry} from "../../api/user" //引入抛出的对象
import {post} from "../../utils/request"

export default class Registry extends Component{
    state = {
        username:"",
        password:"",
        nickname:""
    }
    render(){
        let {username,password,nickname}  = this.state;
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
            <p><input type="text" placeholder="请输入昵称" value={nickname} onChange={(e)=>{
                this.setState({
                    nickname:e.target.value
                })
            }}/></p>

            <button onClick={this.handlezhu.bind(this)}>注册</button>
            </div>
     ) 
    }
    handlezhu(){
        let {username,password,nickname} = this.state;
        post('/buyer/user/register',{
            username,password,nickname
        }).then(res =>{
            if(res.code === 1){
                this.props.history.push('/login')
            }
        })
    }
}