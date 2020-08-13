import React, { Component } from 'react'
import querystring from "querystring"
import { connect } from "react-redux"
import {Link} from "react-router-dom"
import Header from "../../components/Header/Header"
import { cateDetail, requestcateDeatilAction } from "../../store"
import "./FenleiDetail.css"
class FenleiDetail extends Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
    }
    componentDidMount() {
        const id = querystring.parse(this.props.location.search.slice(1)).fid
        console.log(this.props.location.search.slice(1))
        console.log(id)
        this.props.requestcateDetail(id)
        const name = querystring.parse(this.props.location.search.slice(8)).name
        console.log(name)
        this.setState({
            name: name
        })
    }
    render() {
        const { name } = this.state
        const { cateDetail } = this.props

        console.log(this.props.cateDetail)
        return (
            <div>
                <Header left="返回" con={name}></Header>
                <div>
                    {
                        cateDetail.map(item => {
                            return <div className="xqdiv" key={item.id}>
                                <div className="xqdiv_item">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="xqdiv_item1">
                                    <h3>{item.goodsname}</h3>
                                    <i>￥{item.price}</i>
                                    <div>
                                        <Link className="LinkBtn" to={"/detail?id="+item.id}>立即抢购</Link>
                                    </div>
                                </div>


                            </div>
                        })
                    }
                </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        cateDetail: cateDetail(state)
    }
}
const mapDispatchToprops = (dispatch) => {
    return {
        requestcateDetail: (id) => dispatch(requestcateDeatilAction(id))
    }
}
export default connect(mapStateToProps, mapDispatchToprops)(FenleiDetail)
