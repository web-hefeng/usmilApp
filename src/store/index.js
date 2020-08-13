import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { requestgoods, requestgoodsinfo, requestcate, requestcateshu, requestcateinfo,requestBanner, requestShopList ,requestShopEdit,requestShopDel} from "../utils/request"
import {successAlert} from "../utils/alert"

const initState = {
    banner:[],
    goods: [],
    detail: {},
    cate: [],
    cateshu: [],
    cateDetail: [],
    user: sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : null,
    list: [],
    isEditor: false,
    isAll: false
}
const changeBannerAction = (arr)=>{
    return {type: "changebanner",banner:arr}
}
export const requestBannerAction = ()=>{
    return (dispatch,getState)=>{
        requestBanner().then(res=>{
            dispatch(changeBannerAction(res.data.list))
        })
    }
}


const changeGoodsAction = (arr) => {
    return { type: "changegoods", list: arr }
}


//页面一进来，就要发出一股请求
export const requestgoodsAction = () => {
    return (dispatch, getState) => {
        const { goods } = getState()
        if (goods.length > 0) {
            return;
        }


        //发请求
        requestgoods().then(res => {
            dispatch(changeGoodsAction(res.data.list[0].content))
        })
    }
}

const changeDetailAction = (obj) => {
    return { type: "changeDetail", detail: obj }
}

export const requestDeatilAction = (id) => {
    return (dispatch, getState) => {
        if (id === getState().detail.id) {
            return
        }

        requestgoodsinfo({ id: id }).then(res => {
            dispatch(changeDetailAction(res.data.list[0]))
        })
    }
}
const changeCateAction = (arr) => {
    return { type: "changecate", cate: arr }
}
export const requestcateAction = () => {
    return (dispatch, getState) => {
        const { cate } = getState()
        if (cate.length > 0) {
            return;
        }


        //发请求
        requestcate().then(res => {
            dispatch(changeCateAction(res.data.list))

        })
    }
}
const changeCateShuAction = (arr) => {
    return { type: "changecateshu", cateshu: arr }
}
export const requestcateshuAction = () => {
    return (dispatch, getState) => {
        // const { cateshu } = getState()
        // if (cateshu.length > 0) {
        //     return;
        // }


        //发请求
        requestcateshu().then(res => {
            dispatch(changeCateShuAction(res.data.list))

        })
    }
}

const changecateDetailAction = (arr) => {
    return { type: "changecateDetail", cateDetail: arr }
}

export const requestcateDeatilAction = (id) => {
    return (dispatch, getState) => {
        if (id === getState().detail.id) {
            return
        }

        requestcateinfo(id).then(res => {
            dispatch(changecateDetailAction(res.data.list))
        })
    }
}
//修改user的action
export const changeUserAction = (user) => {
    return {
        type: "changeUser",
        user
    }
}

export const changeListAction = list => ({
    type: "changeList",
    list
})

export const requestListAction = () => {
    const id = JSON.parse(sessionStorage.getItem("user")).uid
    return (dispatch, getState) => {
        requestShopList({ uid: id }).then(res => {
            const old = getState().list
            console.log(old)
            const list = res.data.list ? res.data.list : [];
                list.forEach((item,index) => {
                    if(old.length>index){
                        item.checked = old[index].checked
                    }else{
                        item.checked = false
                    }
                })
            console.log(res)
            dispatch(changeListAction(list))
        })
    }
}

export const changeIsEditorAction = () => ({
    type: "changeIsEditor"
})

//修改isAll
export const changeIsAllAction = () => ({
    type: "changeIsAll"
})

export const changeOneAction = index => ({
    type: "changeOne",
    index
})
//用户点+ - 
export const requestEditAction = data=>{
    
    return (dispatch)=>{
        // const {list} = data
        // console.log(list)
        requestShopEdit(data).then(res=>{
            dispatch(requestListAction())
        })
    }
}
export const requestDelAction=(id)=>{
    return (dispatch)=>{
        requestShopDel({id:id}).then(res=>{
            successAlert("宝贝\已删除");
            dispatch(requestListAction())
        })
    }
}


const reducer = (state = initState, action) => {
    switch (action.type) {
        case "changegoods":
            return {
                ...state,
                goods: action.list
            }
        case "changebanner":
            return {
                ...state,
                banner:action.banner
            }
        case "changeDetail":
            return {
                ...state,
                detail: action.detail
            }
        case "changecate":
            return {
                ...state,
                cate: action.cate
            }
        case "changecateshu":
            return {
                ...state,
                cateshu: action.cateshu
            }
        case "changecateDetail":
            return {
                ...state,
                cateDetail: action.cateDetail
            }
        case "changeUser":
            return {
                ...state,
                user: action.user
            }
        case "changeList":
            return {
                ...state,
                list: action.list
            }
        case "changeIsEditor":
            return {
                ...state,
                isEditor: !state.isEditor
            }
        case "changeIsAll":
            return {
                ...state,
                isAll: !state.isAll,
                list: state.list.map(item => {
                    item.checked = !state.isAll;
                    return item
                })
            }
        case "changeOne":
            const {list} = state
            list[action.index].checked = !list[action.index].checked
            return {
                ...state,
                list:[...list],
                isAll:list.every(item => item.checked)
            }
        case "changeNum":
             let arr = []
             console.log(...state.list)
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export const goods = (state) => state.goods
export const banner = (state) =>state.banner
export const detail = state => state.detail
export const cate = (state) => state.cate
export const cateshu = (state) => state.cateshu
export const cateDetail = (state) => state.cateDetail
export const getUser = state => state.user
export const shopList = state => state.list
export const isEditor = state => state.isEditor
export const isAll = state => state.isAll
export const getAllPrice = state =>{
    const {list} = state
    return list.reduce((val,item)=>item.checked ? val+item.price * item.num :val,0)
}
export default store