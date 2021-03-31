import axios from 'axios'//导入axios

const server = axios.create({
    baseURL: 'https://api.it120.cc',//配置请求的公共地址
    timeout: 5000//设置请求超时时间
})

//请求拦截
server.interceptors.request.use(config => {
    //config包含的是请求的相关信息
    //token是用来规定用户权限的 token有过期时间 token是有后台生成的 一般通过登录接口返回给前端
    if (localStorage.getItem('token')) {//判断如果本地存储中有token信息 则将token信息设置在请求头中
        config.headers.token = localStorage.getItem('token')
    }
    return config
}), err => {
    console.log('请求出错');
    //通过promise把错误传出去
    Promise.reject(err)
}

//响应拦截
server.interceptors.response.use(res => {
    return res.data
}, err => {
    switch (err.status) {
        case 500:
            alert('服务器错误')
            break;
        case 404:
            alert('资源找不到')
            break;
        default:
            Promise.reject(err)
            break
    }
})

export default server