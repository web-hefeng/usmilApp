import React, { Component } from 'react'
import Header from "./components/Header/Header"
import {requestregister} from "../../utils/request"
import {successAlert} from "../../utils/alert"
export default class reg extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
                nickname: "",
                password: ""
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
    register(){
        requestregister(this.state.user).then(res=>{
            if(res.data.code === 200){
                successAlert("注册成功");
            }else {
                successAlert("注册失败");
            }
        })
        
    }
    render() {
        const { user } = this.state
        return (
            <div className="mian">
                <Header></Header>
                <div className="con">
                    <div className="con_input1">手机号 :<input onChange={(e) => this.changeUser(e, "phone")} value={user.phone} type="text"></input></div>

                    <div className="con_input1">昵称 :<input onChange={(e) => this.changeUser(e, "nickname")} value={user.nickname} type="text"></input></div>
                    <div className="con_input1">密码 :<input onChange={(e) => this.changeUser(e, "password")} value={user.password} type="text"></input></div>
                    <div className="con_btn">
                        <button onClick={() => this.register()}>注册</button>
                    </div>
                </div>
            </div>
        )
    }
}
