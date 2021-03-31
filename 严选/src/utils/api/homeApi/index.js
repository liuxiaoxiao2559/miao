import server from '@/utils/api/server.js'
//获取轮播图数据
const getBanners = async function () {
    let { data } = await server.get('/small4/banner/list')
    return data
}
export {
    getBanners
}
//获取首页展示列砍价数据
const Bargaining = async function () {
    let { data } = await server.get('/small4/shop/goods/kanjia/list')
    return data
}
export {
    Bargaining
}
//获取电影列表数据
const dianying = async function () {
    let { data } = await server.get('/small4/cms/news/list')
    return data
}
export {
    dianying
}
//获取人气推荐数据
const popularity = async function () {
    let { data } = await server.get('/small4/shop/goods/list')
    return data
}
export {
    popularity
}
//获取电影列表的详情数据
const dydetail = async function (params) {
    let data = await server({
        url: "/small4/cms/news/detail",
        method: "post",
        params: { id: params }
    })
    return data
}
export {
    dydetail
}
//商品详情数据
const spdetail = async function (params) {
    let data = await server({
        url: "/small4/shop/goods/detail",
        method: "post",
        params: { id: params }
    })
    return data
}
export {
    spdetail
}