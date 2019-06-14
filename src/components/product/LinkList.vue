<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column fixed prop="date" label="接口"></el-table-column>
    <el-table-column prop="name" label="入参"></el-table-column>
    <el-table-column prop="province" label="参数"></el-table-column>
    <el-table-column prop="city" label="返回值"></el-table-column>
    <el-table-column prop="address" label="tag"></el-table-column>
    <el-table-column prop="zip" label="remark"></el-table-column>
    <el-table-column fixed="right" label="操作">
      <template slot-scope="scope">  
        <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="deleteOne(scope.row)" type="text" size="small">删除</el-button> 
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { Component, Vue , Watch } from "vue-property-decorator";
import bus from "../../utils/bus"

@Component({
  components: {
   
  },
})

export default class LinkList extends Vue {
  private tableData = [{
    date: '2016-05-02',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  }, {
    date: '2016-05-04',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1517 弄',
    zip: 200333
  }, {
    date: '2016-05-01',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1519 弄',
    zip: 200333
  }, {
    date: '2016-05-03',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1516 弄',
    zip: 200333
  }]
  
  handleClick(row: any) {
    bus.$emit("dialogFormVisible")
  }

  deleteOne(row: any) {
    console.log(row)
  }
}
</script>