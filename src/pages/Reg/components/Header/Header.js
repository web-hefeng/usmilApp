import React, { Component } from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="Header">
                    注册
                    <Link className="reg" to="/login">返回</Link>

                </div>
            </div>
        )
    }
}
