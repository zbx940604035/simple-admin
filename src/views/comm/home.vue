<!--  -->
<template>
  <div class="home">
    <span>foo</span>
    <ul class="grid">
      <li class="item item-1">1</li>
      <li class="item item-2">2</li>
      <li class="item item-3">3</li>
      <li class="item item-4">4</li>
      <li class="item item-5">5</li>
      <li class="item item-6">6</li>
      <li class="item item-7">7</li>
      <li class="item item-8">8</li>
      <!-- <li class="item item-9">9</li> -->
    </ul>
    <span>footer</span>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  mixins: [],
  props: {
    // title: {
    //   type: String,
    //   default: ''
    // }
  },
  data() {
    return {

    }
  },
  // 计算属性
  computed: {
  },
  watch: {
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // grid 阮一峰 http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html

  },
  methods: {

  }
}
</script>
<style scoped lang='scss'>
/* @import 's'; 引入css类 */
@import '../../assets/scss/grid.scss';
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item {
  font-size: 16px;
  border: 1px solid #fc0404;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-1 {
  background-color: #ef342a;
}

.item-2 {
  background-color: #f68f26;
}

.item-3 {
  background-color: #4ba946;
}

.item-4 {
  background-color: #0376c2;
}

.item-5 {
  background-color: #c077af;
}

.item-6 {
  background-color: #f8d29d;
}

.item-7 {
  background-color: #b5a87f;
}

.item-8 {
  background-color: #d0e4a9;
}

.item-9 {
  background-color: #4dc7ec;
}
</style>
