import React, { Component } from 'react'
import "./Header.css"
import HeaderLogo from "../../../../assets/img/img/home/logo.jpg"
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={HeaderLogo} alt="" />
                <strong>寻找商品</strong>
            </div>
        )
    }
}
