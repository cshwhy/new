/*
 * @Author: your name
 * @Date: 2020-11-02 09:43:59
 * @LastEditTime: 2020-11-02 10:05:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\new\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from  'vue-router'

//安装插件
Vue.use(VueRouter)

//创建路由对象
const routes = [
    {
        path:'/home',
        component:() =>import('../views/home/Home')
    }
];
const router = new VueRouter({
    routes,
    mode:'history'
})

//导出
export default router


