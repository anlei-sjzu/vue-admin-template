<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column fixed prop="date" label="时间" width="150"></el-table-column>
    <el-table-column prop="name" label="类型" width="120"></el-table-column>
    <el-table-column prop="province" label="名称" width="120"></el-table-column>
    <el-table-column prop="city" label="用户" width="120"></el-table-column>
    <el-table-column prop="address" label="操作" width="300"></el-table-column>
    <el-table-column prop="zip" label="状态" width="120"></el-table-column>
    <el-table-column fixed="right" label="详情">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },

  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ]
    };
  }
};
</script>
