import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import Nav from "./components/Nav/Nav"
import List from "./components/List/List"
import Foot from "./components/Foot"
import {requestBanner,requestgoods} from "../../utils/request"
export default class Index extends Component {
    constructor(){
            super()
            this.state={
                 list:[],
                 nav:[]
            }
    }
    componentDidMount(){
        // requestBanner().then(res=>{
        //     let arr = res.data.list;
        //     arr.forEach(item=>{
        //         item.img = this.$img+item.img
        //     })
        //     this.setState({
        //         banner:arr
        //     })
        // })

        requestgoods().then(res=>{
            var arr = res.data.list[0].content;
            arr.forEach(item=>{
                item.img = this.$img+item.img
            })
            this.setState({
                list:arr
            })
        })
    }
   
    render() {
        const {banner,list} = this.state
        return (
            <div>
                <Header></Header>
                <Banner></Banner>
                <Nav></Nav>
                <List list={list}></List>
                <Foot path={this.props.location.pathname}></Foot>
            </div>
            

        )
    }
}
