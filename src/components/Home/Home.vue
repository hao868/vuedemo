<template>
  <!-- <div> -->
  <el-container>
    <!-- aside -->
    <el-aside width="200px">
      <v-aside />
      
    </el-aside>
    <!-- main -->
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
  <!-- </div> -->
</template>


<script>
import Aside from "./Aside/Aside";

export default {
  name: "Home",
  data() {
    return {};
  },
  // 挂载组件
  components: {
    "v-aside": Aside
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