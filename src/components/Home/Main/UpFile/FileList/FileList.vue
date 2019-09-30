<template>
  <div>
    <el-row style="margin-bottom:10px" v-if="select">
      <el-col :span="1.5">
        <el-button size="mini" @click="cancelSelect()">取消选中</el-button>
      </el-col>
      <el-col :span="2">
        <el-button size="mini" type="danger" @click="deleteSelected()">删除所选</el-button>
      </el-col>
    </el-row>

    <el-table
      :data="tableData" 
      border
      style="width: 100%"
      ref="multipleTable"
      @selection-change="handleSelectionChange"
      :default-sort="{prop: 'update',order:'descending'}"
    >
      <el-table-column type="selection" width="40"></el-table-column>
      <el-table-column prop="num" label="序号" width="74" align="center" :sortable="true"></el-table-column>
      <el-table-column prop="id" label="ID" width="60" align="center"></el-table-column>
      <el-table-column prop="fileName" label="附件名称" width="120" align="center"></el-table-column>
      <el-table-column prop="type" label="附件类型" width="110" align="center" :sortable="true"></el-table-column>
      <el-table-column prop="path" label="路径" header-align="center"></el-table-column>
      <el-table-column
        prop="links"
        label="链接"
        min-width="200"
        :formatter="formatter"
        header-align="center"
      ></el-table-column>
      <el-table-column prop="size" label="大小/MB" width="100" align="center" :sortable="true"></el-table-column>
      <el-table-column prop="date" label="披露时间" width="100" align="center"></el-table-column>
      <el-table-column prop="update" label="上传时间" width="120" align="center" :sortable="true"></el-table-column>
      <el-table-column prop="handle" label="操作" width="150" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  name: "FileList",
  data() {
    return {
      tableData: [
        {
          num: 1,
          id: "112",
          type: "pdf",
          path: "发行人相关文件/招股说明书/会计师/首轮",
          links:
            "https://teststatic.yxxy.tv/user-file/b1b846e5-0103-4139-9de6-e1b36bcbe852.pdf",
          date: "/",
          fileName: "高新兴.pdf",
          update: "2019.06.20",
          size: "0.51"
        },
        {
          num: 2,
          id: "12",
          type: "mp4",
          path: "发行人相关文件/上市委会议公告及结果/公告",
          links:
            "https://teststatic.yxxy.tv/user-file/de8364b8-cbae-4e80-81f4-13e9de16b0d2.mp4",
          date: "/",
          fileName: "000.mp4",
          update: "2018.04.30",
          size: "5.64"
        },
        {
          num: 3,
          id: "13",
          type: "mp3",
          path: "发行人相关文件/上市委会议公告及结果/会议结果",
          links:
            "https://teststatic.yxxy.tv/user-file/2879d4f4-6f2f-415a-bc78-cbece033bf44.mp3",
          date: "/",
          fileName: "WANDS - 世界が終るまでは… (直到世界尽头).mp3",
          update: "2020.01.26",
          size: "8.48"
        },
        {
          num: 4,
          id: "14",
          type: "doc",
          path: "案例相关/资道雷达",
          links:
            "https://teststatic.yxxy.tv/user-file/376bc286-1137-457c-bda9-e2961a4d4104.doc",
          date: "/",
          fileName: "测试.doc",
          update: "2017.03.10",
          size: "60.20"
        }
      ],
      multipleSelection: [],
      select: false
    };
  },
  methods: {
    //格式化表格
    formatter(row, column) {
      return row.links;
    },
    //编辑
    handleEdit(index, row) {
      console.log(index, row);
    },
    //删除
    handleDelete(index, row) {
      // console.log(index, row);
      this.$confirm("您确定要删除此项吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.tableData.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //选中的操作
    handleSelectionChange(val) {
      this.multipleSelection = val; //将选中的项赋给data数据
      this.multipleSelection != ""
        ? (this.select = true)
        : (this.select = false);
    },
    //取消选中
    cancelSelect() {
      this.$refs.multipleTable.clearSelection();
    },
    //删除所选
    deleteSelected() {
      this.$confirm("您确定要删除所有选中项吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          let mult = this.multipleSelection;

          this.tableData.forEach((element, i) => {
            for (var k = 0; k < mult.length; k++) {
              if (element.id == mult[k].id) {
                this.tableData.splice(i, mult.length);
              }
            }
          });
          this.$refs.multipleTable.clearSelection();

          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>