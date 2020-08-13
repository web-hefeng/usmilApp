import React, { Component } from 'react'
import "./Event.css"
import {requestaddShop} from "../../../../../utils/request"
import {getUser} from "../../../../../store"
import querystring from "querystring"
import {successAlert} from "../../../../../utils/alert"
class Event extends Component {
    constructor() {
        super()
        this.state = {
            isShow: false,
            xx: 1
        }
    }
    componentDidMount(){
        console.log(this.props)
    }
    addShop(){
        console.log(JSON.parse(sessionStorage.getItem("user")).uid)
        requestaddShop({
            uid: JSON.parse(sessionStorage.getItem("user")).uid,
            goodsid: this.props.id,
            num: 1
        }).then(res=>{
            console.log(res)
        })
        this.setState({
            isShow: true
        })
        successAlert("宝贝添加成功");
    }
    dianji(index) {
        console.log(index)
        this.setState({
            xx: index
        })
    }
    show() {
        this.setState({
            isShow: true
        })
        console.log(this.state.isShow)
    }
    hide(ev) {
        if (ev.target.className === "mask" ||ev.target.className === "dr" ) {
            this.props.aa(false)
        }
        console.log(ev)
    }

    render() {
        
        const { detail } = this.props
        const { xx } = this.state
        console.log(this.props.detail)
        return (
            <div className="show">
                {
                    <div className="mask" onClick={this.hide.bind(this)}>
                        <div className="mask_con">
                            <div className="diyi">
                                <img src={detail.img} alt="" />
                                <span>{detail.goodsname}</span>
                            </div>
                            <div className="dier">
                                <h3>{detail.specsname}</h3>
                                <p>
                                    {
                                        detail.specsattr ? JSON.parse(detail.specsattr).map((item, index) => {

                                            return (<a onClick={this.dianji.bind(this, index)} className={xx === index ? "ss" : null} key={item.specsid}>{item}</a>)
                                        }) : null
                                    }
                                </p>
                                <div className="evebtn">
                                    <button className="dr" onClick={this.addShop.bind(this)}>加入购物车</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default Event