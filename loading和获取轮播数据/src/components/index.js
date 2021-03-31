import Vue from 'vue'
import loading from '@/components/loading/loading'
//创建全局组件
const Loading=Vue.extend(loading)
//实例化该组件并创建一个挂载点
const instence=new Loading({
    el:document.createElement('div')
})
// console.log(instence);
instence.show=true

const $loading={
    show(obj){
        instence.show=true
        instence.msg=obj
        document.body.appendChild(instence.$el)
    },
    hide(){
        instence.show=false
    }
}

export default {
    //函数名不能随便取 必须是install
    install(){
        if(!Vue.$loading){
            Vue.$loading=$loading
        }
        Vue.mixin({
            created(){
                this.$loading=Vue.$loading
            }
        })
    }
}