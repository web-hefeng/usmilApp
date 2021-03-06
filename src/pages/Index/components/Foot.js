import React from 'react'
import { Link } from "react-router-dom"
import "./Foot.css"
import home1 from "../../../assets/img/tab_home_hig.png"
import home2 from "../../../assets/img/tab_home_nor.png"
import menu1 from "../../../assets/img/tab_menu_hig.png"
import menu2 from "../../../assets/img/tab_menu_nor.png"
import shopping1 from "../../../assets/img/tab_shopping_hig.png"
import shopping2 from "../../../assets/img/tab_shopping_nor.png"
import me1 from "../../../assets/img/tab_me_hig.png"
import me2 from "../../../assets/img/tab_me_nor.png"
import { NavLink } from "react-router-dom"
export default function Foot(props) {
    const arr = [
        {
            text: "首页",
            selectImg: home1,
            noSelect: home2,
            path: "/index"
        },
        {
            text: "分类",
            selectImg: menu1,
            noSelect: menu2,
            path: "/feilei"
        },
        {
            text: "购物车",
            selectImg: shopping1,
            noSelect: shopping2,
            path: "/shop"
        },
        {
            text: "我的",
            selectImg: me1,
            noSelect: me2,
            path: "/mine"
        },
    ]
    const {path}=props;
    return (
        <div className="footer">
            {
                arr.map(item => {
                    return (
                        <NavLink activeClassName="select" key={item.path} to={item.path}>
                            <img src={path===item.path?item.selectImg:item.noSelect} alt="" />
                            <div>{item.text}</div>
                        </NavLink>
                    )
                })
            }
        </div>
    )
}
