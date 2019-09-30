<template>
  <el-tabs type="border-card">
    <el-tab-pane label="附件列表" style="color:#1abc9c">
      <v-fileList />
    </el-tab-pane>

    <el-tab-pane label="添加">
      <v-addFile />
    </el-tab-pane>
  </el-tabs>
  
</template>

<script>
import FileList from '../UpFile/FileList/FileList'
import AddFile from '../UpFile/AddFile/AddFile'

export default {
  name: "Main",
  data() {
    return {
      
    };
  },
  components: {
    // 组件挂载
    'v-fileList':FileList,
    'v-addFile':AddFile
  }
};
</script>
