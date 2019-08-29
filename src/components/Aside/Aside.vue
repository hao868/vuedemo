<template>
  <el-row class="tac">
    <el-col :span="24" style="text-align:left">
      <el-menu default-active="1" style="border:none" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>导航一</span>
          </template>
          <el-menu-item index="1-1">我太难了1</el-menu-item>
          <el-menu-item index="1-2">我太难了2</el-menu-item>
          <el-menu-item index="1-3">我太难了3</el-menu-item>
          <el-submenu index="1-4">
            <template slot="title">我太难了4</template>
            <el-menu-item index="1-4-1">我太难了1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-location"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
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