import React, { Component } from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import { withRouter } from "react-router-dom"
 class Header extends Component {
    gooback(){
        this.props.history.go(-1)
    }
    
    render() {
        // console.log(this.props.history)
        const {left,con,right} = this.props
        return (
            <div>
                <div className="Header">
                    {left?<span className="Header_span" onClick={()=>this.gooback()}>返回</span>:null}
                    {con?con:null}
                    {right?<Link className="reglogin" to="/reg">注册</Link>:null}
                </div>
            </div>
        )
    }
}
export default withRouter(Header)
