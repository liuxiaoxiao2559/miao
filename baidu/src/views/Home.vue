<template>
  <div class="home">
    <div class="search_box" :style="{
      border: show ? '2px solid #4e6ef2' : '2px solid #ccc'
    }">
      <section>
        <my-input @send:showlist="getData" @send:num="getNum" v-model="content"></my-input>
        <i></i>
      </section>
      <my-list @send:content="getName" :show="show" :num="num" :list="list"></my-list>
    </div>
    <button class="btn" @click="search">百度一下</button>
      
  </div>
</template>

<script>
import myInput from '@/components/myInput'
import myList from '@/components/myList'
export default {
  name: 'Home',
  components: {
    myInput,
    myList
  },
  data() {
    return {
      show: false,
      content: '',
      num: -1,
      list: []
    }
  },
  created() {
    this.list = JSON.parse(localStorage.getItem('list')) || []
    document.addEventListener('click', (e)=> {
      if(e.target.className != 'ipt' && e.target.className != 'del') {
        this.show = false
      }
    }) 
  },

  methods: {
    getData(data) {
      this.show = data
    },

    getNum(num) {
      this.num = num
      this.content = this.list[num].name
    },

    getName(name) {
      this.content = name
    },

    search() {
      let obj = {
        name: this.content,
        id: new Date().getTime()
      }
      this.list.unshift(obj)
      localStorage.setItem('list', JSON.stringify(this.list))
    }
  },


  watch: {
    content(to) {
      this.list = JSON.parse(localStorage.getItem('list')) || []
      this.list = this.list.filter(item => {
        return item.name.includes(to)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
    .home{
      display: flex;
      width: 1000px;
      margin: 100px auto;
    }
    .btn {
      background-color: #4e6ef2;
      width: 112px;
      height: 40px;
      line-height: 41px;
      border: none;
      font-size: 18px;
      color: #fff;
      outline: none;
      // font-weight: bold;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      margin-left: -1px;
    }
    .search_box{
      border: 2px solid #c4c7ce;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      section{
        height: 36px;
        width: 400px;
        input {
          height: 36px;
          width: 100%;
          display: block;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }
      }
    }

    input:focus {
     outline: none;
    }
</style>
