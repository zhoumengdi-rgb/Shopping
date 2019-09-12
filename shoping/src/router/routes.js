import React from "react"

import Loadable from "react-loadable"

function Loading(){
    return <div>loading...</div>
}

const Login = Loadable({
    loader:()=> import('../views/login'),
    loading:Loading,
})
const Citys = Loadable({
    loader:()=> import('../views/citys'),
    loading:Loading,
})
const Detail = Loadable({
    loader:()=> import('../views/detail'),
    loading:Loading,
})
const My = Loadable({
    loader:()=> import('../views/my'),
    loading:Loading,
})
const Order = Loadable({
    loader:()=> import('../views/order'),
    loading:Loading,
})
const Registry = Loadable({
    loader:()=> import('../views/registry'),
    loading:Loading,
})
const Shops = Loadable({
    loader:()=> import('../views/shops'),
    loading:Loading,
})
const Write = Loadable({
    loader:()=> import('../views/write'),
    loading:Loading,
})


const routes = [
    {
        path:'/login',
        component:Login
    },
    {
        path:'/citys',
        component:Citys
    },
    {
        path:'/detail/:id',
        component:Detail
    },
    {
        path:'/my',
        component:My
    },
    {
        path:'/order',
        component:Order
    },
    {
        path:'/registry',
        component:Registry
    },
    {
        path:'/shops/:id',
        component:Shops
    },
    {
        path:'/write',
        component:Write
    },
    {
        path:'/',
        redirect:'/citys'
    }
]

export default routes;