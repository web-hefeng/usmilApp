import React, { Component } from 'react'
import "./Nav.css"
import xsqg from "../../../../assets/img/img/home/1.jpg"
export default class Nav extends Component {
    render() {
        return (
            <div>
                <ul className="NavUl">
                    <li className="Navli">
                        <img className="NavImg" src={xsqg} alt="" />
                        <p className="NavP">限时抢购</p>
                    </li>
                    <li className="Navli">
                        <img className="NavImg" src={xsqg} alt="" />
                        <p className="NavP">积分商城</p>
                    </li>
                    <li className="Navli">
                        <img className="NavImg" src={xsqg} alt="" />
                        <p className="NavP">联系我们</p>
                    </li>
                    <li className="Navli">
                        <img className="NavImg" src={xsqg} alt="" />
                        <p className="NavP">商品分类</p>
                    </li>
                </ul>
            </div>
        )
    }
}
