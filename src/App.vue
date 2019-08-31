<template>
  <div id="app">
    <el-container>
      <!-- header -->
      <el-header>
        <router-link to="/home">Home</router-link>
        <router-link to="/news">News</router-link>
        <router-link to="/somes">Somes</router-link>
        <span class="headers">{{headersTop}}</span>
      </el-header>

      <transition name="fade">
        <router-view></router-view>
      </transition>
      
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      headersTop: "这是一个没有感情的Header!"
    };
  }
};
</script>

<style>
#app {
  font-size: 14px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ul,
li,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

a{
  text-decoration: none;
  color: #333;
}

.headers {
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
}

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
}
</style>
