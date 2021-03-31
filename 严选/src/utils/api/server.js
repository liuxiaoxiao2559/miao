//导入axios
import axios from 'axios'
const server = axios.create({
    baseURL: 'https://api.it120.cc',
    timeout: 10000
})

//请求拦截
server.interceptors.request.use(config => {
    if (localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token')
    }
    return config
}, err => {
    Promise.reject(err)
})

//响应拦截
server.interceptors.response.use(res => {
    switch (res.data.code) {
        case 500:
            alert('服务器错误')
            return;
        case 400:
            alert('资源找不到')
            return;
    }
    return res.data
},err=>{
    alert('服务器响应超时')
    Promise.reject('服务器响应超时')
})
export default server