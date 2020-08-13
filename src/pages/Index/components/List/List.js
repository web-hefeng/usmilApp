import React, { Component } from 'react'
import {Pricetwo} from "../../../../filters/Pricetwo"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {goods,requestgoodsAction} from "../../../../store"
import "./List.css"
 class List extends Component {
    componentDidMount(){
        this.props.requestGoods()
        // if(this.props.requestGoods()!== ""){
        //     return;
        // }
    }
    render() {
        const {goods}=this.props
        return (
            <div>
                <ul className="ListUl">
                    {goods.map(item => {
                        return (
                            <li className="Listli" key={item.id}>
                                <Link className="Listdiv1" to={"/detail?id="+item.id}>
                                    <img className="ListImg" src={item.img} alt="" />
                                </Link>
                                <div className="Listdiv2">
                                    <h3>{item.goodsname}</h3>
                                    <i>￥{Pricetwo(item.price)}</i>
                                    <br />
                                    <button>立即抢购</button>
                                </div>
                            </li>
                        )
                    })

                    }
                </ul>
            </div>
        )
    }
}
  const mapStateToProps=(state)=>{
      console.log(state)
      return {
          goods:goods(state)
      }
  }
  const mapDispatchToProps=dispatch=>{
      return {
          requestGoods:()=>dispatch(requestgoodsAction())
      }
  }
export default connect(mapStateToProps,mapDispatchToProps)(List)
