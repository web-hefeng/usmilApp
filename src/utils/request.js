import axios from "axios"
import qs from "qs"
import React, { Component } from 'react';
import { routerRedux } from "dva/router"
import App from "../liapp"
import {successAlert} from "../utils/alert"
import { Router, Route, Switch } from 'dva/router';

axios.interceptors.request.use(config => {
    if (config.url != "/api/register" && config.url != "/api/login") {
        config.headers.authorization = JSON.parse(sessionStorage.getItem("user")).token
    }

    return config

})



axios.interceptors.response.use(res => {
    console.log(res)
    if (res.data.msg === "登录已过期或访问权限受限") {
        alert("登录已过期或访问权限受限")
        console.log(this.props.history)
        this.props.history.push('/login')
    }
    return res
})


export const requestLogin = (params) => {
    return axios({
        url: "/api/login",
        method: "post",
        data: qs.stringify(params)
    })
}
export const requestregister = (params) => {
    return axios({
        url: "/api/register",
        method: "post",
        data: qs.stringify(params)
    })
}

export const requestBanner = () => {
    return axios({
        url: "/api/getbanner",
        method: "get"
    })
}

export const requestgoods = () => {
    return axios({
        url: "/api/getindexgoods"
    })
}
export const requestgoodsinfo = (params) => {
    return axios({
        url: "/api/getgoodsinfo",
        method: "get",
        params
    })
}
export const requestcate = () => {
    return axios({
        url: "/api/getcate"
    })
}
export const requestcateshu = () => {
    return axios({
        url: "/api/getcatetree"
    })
}
export const requestcateinfo = (params) => {
    return axios({
        url: "/api/getgoods",
        params: { fid: params }
    })
}
export const requestaddShop = (params) => {
    return axios({
        url: "/api/cartadd",
        method: "post",
        data: qs.stringify(params)
    })
}
export const requestShopList = (params) => {
    return axios({
        url: "/api/cartlist",
        params
    })
}
//修改
export const requestShopEdit = (data) => {
    return axios({
        url: "/api/cartedit",
        method: "post",
        data: qs.stringify(data)
    })
}
export const requestShopDel = (data) => {
    return axios({
        url: "/api/cartdelete",
        method: "post",
        data: qs.stringify(data)
    })
}