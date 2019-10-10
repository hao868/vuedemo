<template>
  <div>
    <!--搜索框-->
    <el-row>
      <el-col :span="3" class="grid">
        <el-input v-model="input" placeholder="请输入id" size="mini"></el-input>
      </el-col>
      <el-col :span="2" class="grid">
        <el-button type="success" icon="el-icon-search" size="mini">搜索</el-button>
      </el-col>
      <!--新增按钮-->
      <el-col :span="2" class="grid">
        <router-link to="/addBlog">
          <el-button type="success" icon="el-icon-circle-plus-outline" size="mini" round>新增</el-button>
        </router-link>
      </el-col>
    </el-row>
    <br />
    <!--表格数据及操作-->
    <!-- 加载设置 -->
    <el-table
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      fit
      :data="list"
      border
      style="width: 100%"
      ref="multipleTable"
      tooltip-effect="dark"
    >
      <el-table-column prop="id" label="id" width="60" align="center" sortable></el-table-column>
      <el-table-column prop="title" label="标题" header-align="center"></el-table-column>
      <el-table-column prop="link" label="链接" align="center"></el-table-column>
      <el-table-column prop="date" label="日期" align="center" :formatter="dateFormat" sortable></el-table-column>
      <el-table-column prop="author" label="作者" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            @click="del(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import "../../../../../mock/mock";
export default {
  data() {
    return {
      //查询输入框数据
      input: 0,
      list: [] // 存放列表数据
    };
  },
  mounted() {
    this.getdata();
    // console.log(this.getdata())
  },
  methods: {
    //时间格式化
    dateFormat: function(row, column) {
      var date = row[column.property];
      if (date == undefined) {
        return "未填";
      }
      return this.$moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
    getdata: function() {
      this.$axios.get("/list", {}).then(res => {
        // console.log(res.data);
        this.list = res.data.data;
      });
    },
    // 删除数据
    del(index, row) {
      // console.log(index, row);
      this.$confirm("您确定要删除此项吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(res => {
          this.$axios
            .post("/list", {
              id: row.id
            })
            .then(re => {
              this.list.splice(index, 1);
              this.$message({
                type: "success",
                message: "删除成功！"
              });
            })
            .catch(err => {
              console.error(err);
            });
        })
        .catch(err => {
          // console.log(err);
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    
  }
};
</script>