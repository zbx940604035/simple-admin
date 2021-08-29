<template>
  <div class="nav">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"/>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item
            index="1-1"
            route="/user-container"
            @click="gotoRouteHandle('/user-container')">选项1</el-menu-item>
          <el-menu-item
            index="1-2"
            route="/components"
            @click="gotoRouteHandle('/components')">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Nav',
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    gotoRouteHandle(path) {
      this.$router.push(path)
    }
  }
}
</script>

