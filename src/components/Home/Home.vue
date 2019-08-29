<template>
  <el-container>
    <!-- header -->
    <el-header>
      <v-head />
    </el-header>

    <el-container>
      <!-- aside -->
      <el-aside width='200px'>
        <v-aside />
      </el-aside>
      <!-- main -->
      <el-main>
        <v-main />
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
import HeadersTop from '../HeadersTop/HeadersTop'
import Aside from '../Aside/Aside'
import Main from '../Main/Main'

export default {
  name: "Layout",
  data() {
    return {};
  },
  // 挂载组件
  components:{
    'v-head':HeadersTop,
    'v-aside':Aside,
    'v-main':Main
  }
};
</script>

<style lang="scss">
.el-header {
  background-color: #1abc9c;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  // line-height: 160px;
}
</style>