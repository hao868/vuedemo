<template>
  <div>
    <el-row>
      <el-col :span="2">
        <el-upload
          class="upload-demo"
          action='https://jsonplaceholder.typicode.com/posts/'
          :on-remove="handleRemove"
          :show-file-list="true"
          :auto-upload="true"
          :before-remove="beforeRemove"
          accept=".doc, .docx, .ppt, .pdf, .xls"
          multiple
          :on-progress="progress"
          :on-success="uploadFile"
        >
          <el-button size="small" type="primary">上传附件</el-button>
        </el-upload>
      </el-col>

      <!-- <el-col :span="2">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">上传视频</el-button>
        </el-upload>
      </el-col>

      <el-col :span="2">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">上传音频</el-button>
        </el-upload>
      </el-col>-->
    </el-row>
    <el-row>
      <el-col :span="24" class="tips">支持格式：doc,docx</el-col>
    </el-row>
    <form name="form" id="fileForm" ref="fileForm">
        <div class="fileList">
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
        </div>
        <el-button type="submit" size="mini" @click="submitAll()">提交</el-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddFile",
  data() {
    return {
      fileList: [],
      percent:0
    };
  },
  methods: {
    progress(up,file,info){
        console.log(up,file,info)
        // this.$alert(`<el-progress type="circle" :percentage="${info.percent}"></el-progress>`,  {
        //   dangerouslyUseHTMLString: true,
        //   showClose:false,
        //   showConfirmButton:true
        // });
    },
    uploadFile(up,file,info){
        // console.log(up,file,info)
        var fileName=file.name
        var fileSize=file.size
        var fileType=file.name.split('.')[1]
        // console.log(fileType)
        // this.fileList
        var data={
            name:fileName,
            size:fileSize,
            type:fileType
        }
        this.fileList.push(data)
        console.log(this.fileList)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>

<style lang="scss">
.tips {
  font-size: 12px;
  color: #ccc;
  text-align: left;
  margin: 10px;
}

</style>