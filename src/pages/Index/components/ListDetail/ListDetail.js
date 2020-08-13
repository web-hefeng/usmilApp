import React, { Component } from 'react'
import Header from "../../../../components/Header/Header"
import { connect } from "react-redux"
import querystring from "querystring"
import "./ListDetail.css"
import Event from "./components/Event"
import { requestaddShop } from "../../../../utils/request"
import { detail, requestDeatilAction } from "../../../../store"
class ListDetail extends Component {
    constructor() {
        super()
        this.state = {
            isAshow: false
        }
    }
    componentDidMount() {
        const id = querystring.parse(this.props.location.search.slice(1)).id
        this.props.requestDetail(id)
        var p = document.createElement("p")
        // p.innerHTML
        this.refs.kua.appendChild(p)
        console.log(this.props.detail)
    }

    addShop() {
        requestaddShop({
            uid: JSON.parse(sessionStorage.getItem("user")).uid,
            goodsid: this.id,
            num: 1
        }).then(res => {
            console.log(res)
        })
    }
    aa() {
        this.setState({
            isAshow: false
        })
        document.body.style.overflow = "visible"
        document.body.style.position = "static"
    }
    add() {
        this.setState({
            isAshow: true
        })
        document.body.style.overflow = "hidden"
        document.body.style.position = "fixed"
        document.body.style.left = "0";
        document.body.style.top = "0";
    }
    render() {
        const id = querystring.parse(this.props.location.search.slice(1)).id
        console.log(id)
        const { isAshow } = this.state
        const { detail } = this.props
        console.log(JSON.parse(sessionStorage.getItem("user")))
        return (
            <div ref="kua" className="box">
                <Header left="返回" con="商品详情"></Header>
                <div className="content">

                    <img className="ListDetailImg" src={detail.img} alt="" />
                    <div className="Listxiaodiv">
                        <h3>{detail.goodsname}</h3>
                        <span>
                            收藏
                        </span>
                    </div>
                    <div className="divPrice">
                        <i>￥{detail.price}</i>
                        <a>
                            <font>热卖</font>
                            <font>热卖</font>
                        </a>
                    </div>
                    <div className="delI">
                        <del>￥{detail.market_price}</del>
                    </div>
                </div>
                <div className="Listlogo" dangerouslySetInnerHTML={{ __html: detail.description }}></div>
                <div className="Listfooter">
                    <button onClick={() => this.add(this)}>加入购物车</button>
                </div>
                {isAshow ? <Event id={id} aa={this.aa.bind(this)} detail={detail}></Event> : null}

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        detail: detail(state)
    }
}
const mapDispatchToprops = (dispatch) => {
    return {
        requestDetail: (id) => dispatch(requestDeatilAction(id))
    }
}
export default connect(mapStateToProps, mapDispatchToprops)(ListDetail)
