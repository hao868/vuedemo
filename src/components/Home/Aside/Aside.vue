<template>
  <el-row class="tac">
    <el-col :span="24" style="text-align:left">
      <el-menu
        default-active="1-1"
        unique-opened
        style="border:none"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :default-openeds="['1']"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>导航一</span>
          </template>
          <router-link to="/home/nav1">
            <el-menu-item index="1-1">我太难了1</el-menu-item>
          </router-link>
          <router-link to="/home/nav2">
            <el-menu-item index="1-2">我太难了2</el-menu-item>
          </router-link>
          <router-link to="/home/nav1">
            <el-menu-item index="1-3">我太难了3</el-menu-item>
          </router-link>
          <el-submenu index="1-4">
            <template slot="title">我太难了4</template>
            <router-link to="/home/nav2">
              <el-menu-item index="1-4-1">我太难了5</el-menu-item>
            </router-link>
          </el-submenu>
        </el-submenu>
        <router-link to="/home/nav1">
          <el-menu-item index="2">
            <i class="el-icon-location"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Aside",
  components: {
    // 组件挂载
  },
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss">
</style>