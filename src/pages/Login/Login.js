import React, { Component } from 'react'
import "./Login.css"
import { requestLogin } from '../../utils/request'
import {connect} from "react-redux"
import Header from "../../components/Header/Header"
import {changeUserAction} from "../../store"
import {successAlert} from "../../utils/alert"
 class Login extends Component {
    constructor(){
        super()
        this.state={
            user:{
                phone:"",
                password:""
            }
        }
    }
    changeUser(e,key){
        this.setState({
            user:{
                ...this.state.user,
                [key]:e.target.value
            }
        })
    }
    login(){
        requestLogin(this.state.user).then(res=>{
            if(res.data.code === 200){
                this.props.changeUser(res.data.list)
                console.log(this.props.history.push)
                sessionStorage.setItem("user",JSON.stringify(res.data.list))
                this.props.history.push("/index")
            }else {
                successAlert("登录失败");
            }
        })
    }
    render() {
        const {user}=this.state
        return (
            <div>
                <div className="mian">
                    <Header con="登录" right="注册"></Header>
                    <div className="con">
                        <div className="con_input1">账号 :<input onChange={(e)=>this.changeUser(e,"phone")} value={user.phone} type="text"></input></div>

                        <div className="con_input1">密码 :<input onChange={(e)=>this.changeUser(e,"password")} value={user.password} type="text"></input></div>
                        <div className="wjmm">
                            <a href="">忘记密码</a>
                        </div>
                        <div className="con_btn">
                            <button onClick={()=>this.login()}>登录</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapState=(state)=>{
    console.log(state)
    return {
      
    }
}
const mapDispatch=(dispatch)=>{
    return {
        changeUser:(user)=>dispatch(changeUserAction(user))
    }
}
export default connect(mapState,mapDispatch)(Login)
