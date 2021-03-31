import server from '@/utils/api/server'

// 请求首页轮播图的接口
const getBanners = async function() {
    // console.log(await server.get('/small4/banner/list'))
    let { data } = await server.get('/small4/banner/list')
    return data
}


export {
    getBanners
}