import React, { Component } from 'react'
import "./Mine.css"
import chilun from "../../assets/img/齿轮.png"
import xinxi from "../../assets/img/信息.png"
import logo from "../../assets/img/1.jpg"
import love from "../../assets/img/keep.png"
import qian from "../../assets/img/icon_refund.png"
import Foot from "../../pages/Index/components/Foot"
export default class Mine extends Component {
    render() {
        return (
            <div className="mine">
                <div className="mine_header">
                    <div className="mine_header_gold">
                        <header>
                            <a className="header_a">
                                <img src={chilun} alt="" />
                            </a>
                            <a className="header_a1">
                                <img src={xinxi} alt="" />
                                <i>9+</i>
                            </a>
                            个人中心
                        </header>
                    </div>
                    <a className="mine_logo">
                        <img src={logo} alt="" />
                    </a>
                    <div className="logo_name">小不点儿</div>
                    <div className="mine_sc">
                        <img src={love} alt="" />我的收藏 ( 5 )
                    </div>
                </div>
                <div className="mine_dd">
                    <a>我的订单</a>
                    <a>查看订单</a>
                </div>
                <div className="mine_dfh">
                    <a>
                        <img src={qian} alt="" />
                        待发货
                        </a>
                    <a>
                        <img src={qian} alt="" />
                        待发货
                        </a>
                    <a>
                        <img src={qian} alt="" />
                        待发货
                        </a>
                    <a>
                        <img src={qian} alt="" />
                        待发货
                        </a>
                    <a>
                        <img src={qian} alt="" />
                        待发货
                        </a>
                </div>
                <div className="shdz">收货地址管理</div>
                <Foot  path={this.props.location.pathname}></Foot>
            </div>
        )
    }
}
