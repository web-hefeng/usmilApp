import React, { Component } from 'react'
import { connect } from "react-redux"
import {Link} from "react-router-dom"
import "./Fenlei.css"
import Foot from "../Index/components/Foot"

import Header from "../../components/Header/Header"
import { cate, requestcateAction, cateshu, requestcateshuAction } from "../../store"
class Fenlei extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            n: 0
        }
    }
    componentDidMount() {
        this.props.requestCate()
        console.log(this.props)
        this.props.requestCateshu()
    }
    changeN(index) {
        this.setState({
            n: index
        })
    }
    render() {
        const { n } = this.state
        const { cate, cateshu } = this.props
        // {cate?cate:[]}
        console.log(cateshu)
        return (
            <div className="fenlei" >
                <Header con="分类"></Header>
                <div className="clea">
                    <div className="nav">
                        {
                            cate.map((item, index) => {
                                return <a onClick={() => this.changeN(index)} className={n === index ? "select" : ""} key={item.id}>{item.catename}</a>
                            })
                        }
                    </div>
                    <div className="navright">
                        {
                            cateshu.length > 0 ? cateshu[n].children.map(item => {
                                return (<Link to={"/catedetail?fid="+item.id+"&name="+item.catename} key={item.id}><img src={item.img} alt=""/>
                                    <p>{item.catename}</p>
                                </Link>)
                            }) : null
                        }
                    </div>
                </div>
                <Foot path={this.props.location.pathname}></Foot>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cate: cate(state),
        cateshu: cateshu(state)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        requestCate: () => dispatch(requestcateAction()),
        requestCateshu: () => dispatch(requestcateshuAction())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Fenlei)
