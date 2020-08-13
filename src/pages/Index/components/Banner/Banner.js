import React, { Component } from 'react'
import {Carousel} from "antd-mobile"
import {connect} from "react-redux"
import "./Banner.css"
import {banner,requestBannerAction} from "../../../../store"

 class Banner extends Component {
    constructor(){
        super()
        this.state={
            homeFlag:false
        }
        // const banner1 =  this.props.banner
    }
    componentDidMount(){
        this.props.requestBanner()
    }
    componentDidUpdate(){
        if(this.state.homeFlag===true){
            return;
        }
        if(this.props.banner.length !==0){
            this.setState({
                homeFlag:true
            })
        }
    }
    render() {
        // this.setState({
        //     banner: this.props.Banner
        // })
        // console.log(this.props.banner)
        const {banner} = this.props
        // console.log
        return (
            <div className="banner">
                <Carousel autoplay={this.state.homeFlag} infinite speed={500} autoplayInterval={2000}>
                    {   
                        banner.map((item)=>{
                            return <img key={item.id} src={item.img} alt="" />
                        })
                    }
                </Carousel>
            </div>
        )
    }
}
const mapState=(state)=>{
    return {
        banner:banner(state)
    }
}
const mapDispatch=dispatch=>{
    return {
        requestBanner:()=>dispatch(requestBannerAction())
    }
}
export default connect(mapState,mapDispatch)(Banner)