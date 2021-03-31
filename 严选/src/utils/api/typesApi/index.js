import server from '@/utils/api/server.js'
//获取分类页数据
const types = async function () {
    var { data } = await server.get("/small4/shop/goods/category/all")
    return data
}
export {
    types
}