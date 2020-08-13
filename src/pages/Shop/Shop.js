import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import "./Shop.css"
import {successAlert} from "../../utils/alert"
import Foot from "../Index/components/Foot"
import selectImg from "../../assets/img/radio_hig.png"
import noSelect from "../../assets/img/radio_nor.png"
import editorY from "../../assets/img/editor_hig.png"
import editorN from "../../assets/img/editor_nor.png"
import imgcc from "../../assets/img/1.jpg"
import gwc from "../../assets/img/tab_shopping_nor.png"
import imgee from "../../assets/img/store.png"
import { connect } from "react-redux"
import { shopList, requestListAction, isEditor, changeIsEditorAction, isAll, changeIsAllAction, changeOneAction, requestEditAction, getAllPrice, requestDelAction } from "../../store"
class Shop extends Component {
    componentDidMount() {
        this.props.requestList()
    }
    sub(item) {
        if (item.num <= 1) {
            successAlert("宝贝不能再少了");
            return
        }
        this.props.requestEditAction({ id: item.id, type: 1 })
    }
    render() {
        const { list, isEditor, changeIsEditor, isAll, changeIsAll, changeOne, requestEditAction, getAllPrice, requestShopDel } = this.props
        return (

            <div className="shop">
                <Header con="购物车"></Header>
                {
                    list.length ? null : <div className="weiko">
                        <div className="neir">
                            <img src={gwc} alt="" />
                            <div className="neir_con">购物车还是空的快去逛逛吧~</div>
                        </div>

                    </div>
                }
                {
                    list.map((item, index) => {
                        return (
                            <div className="shop-item" key={item.id}>
                                <h3 className="shop-item-h3">
                                    <img className="shop-item-h3-img" src={imgee} alt="" />
                                    <i>杭州报税句仓</i>
                                </h3>
                                <div className={isEditor ? 'inner inner-del' : 'inner'}>
                                    <img src={item.checked ? selectImg : noSelect} onClick={() => changeOne(index)} className="shop-item-selectImg" alt="" />
                                    <img className="shop-item-img" src={item.img} alt="" />
                                    <div className="shop-item-info">
                                        <div>{item.goodsname}</div>
                                        <div className="shop-item-info-btn">
                                            <div className="btn" onClick={() => this.sub(item)} >-</div>
                                            <div>{item.num}</div>
                                            <div className="btn" onClick={() => requestEditAction({ id: item.id, type: 2 })}>+</div>
                                        </div>
                                        <div className="price">￥{item.price}</div>
                                        <div>总价:{item.price * item.num}</div>
                                    </div>
                                    <div className="shop-item-del" onClick={() => requestShopDel(item.id)}>删除</div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="shop-footer">
                    <div className="all" onClick={() => changeIsAll()}>
                        <img src={isAll ? selectImg : noSelect} alt="" />
                        <div>全选</div>
                    </div>
                    <div className="all" onClick={() => changeIsEditor()}>
                        <img src={isEditor ? editorY : editorN} alt="" />
                        <div>编辑</div>
                    </div>
                    <div className="allAA">
                        <i>合计:{getAllPrice}</i>
                        <p>(不含运费)</p>
                    </div>
                    <div className="allbb">
                        <button>去结算</button>
                    </div>
                </div>

                <Foot  path={this.props.location.pathname}></Foot>

            </div>
        )
    }
}
const mapState = state => {
    return {
        list: shopList(state),
        isEditor: isEditor(state),
        isAll: isAll(state),
        getAllPrice: getAllPrice(state)
    }
}
const mapDispatch = dispatch => {
    return {
        requestList: () => dispatch(requestListAction()),
        changeIsEditor: () => dispatch(changeIsEditorAction()),
        changeIsAll: () => dispatch(changeIsAllAction()),
        changeOne: (index) => dispatch(changeOneAction(index)),
        requestEditAction: (data) => dispatch(requestEditAction(data)),
        requestShopDel: id => dispatch(requestDelAction(id))
    }
}
export default connect(mapState, mapDispatch)(Shop)
