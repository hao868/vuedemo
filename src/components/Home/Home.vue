<template>
  <!-- <div> -->
  <el-container>
    <!-- aside -->
    <el-aside width="200px">
      <!-- <v-aside /> -->
      <el-row class="tac">
        <el-col :span="24" style="text-align:left">
          <el-menu
            default-active="1"
            style="border:none"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>导航一</span>
              </template>
              <el-menu-item index="1-1"><router-link to="/home/menu1">我太难了1-1</router-link></el-menu-item>
              <el-menu-item index="1-2"><router-link to="/home/menu2">我太难了1-2</router-link></el-menu-item>
              <el-submenu index="1-3">
                <template slot="title">我太难了1-4</template>
                <el-menu-item index="1-3-1"><router-link to="/home/menu3">我太难了1-3-1</router-link></el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-location"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <!-- main -->
    <el-main>
      <v-main />
    </el-main>
  </el-container>
  <!-- </div> -->
</template>


<script>
// import HeadersTop from "./HeadersTop/HeadersTop";
// import Aside from "./Aside/Aside";
// import Main from "./Main/Main";

export default {
  name: "Home",
  data() {
    return {};
  },
  // 挂载组件
  components: {
    // "v-head": HeadersTop,
    // "v-aside": Aside,
    // "v-main": Main
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