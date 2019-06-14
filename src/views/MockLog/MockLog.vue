<template>
  <el-row :gutter="20" style="width:100%;margin:0">
    <el-col :span="24" style="padding:0;margin-bottom:5vh">
      <el-card class="box-card" :body-style="{padding:'10px',color:'#666'}">
        <span>{{$route.meta.title}}</span>
      </el-card>
    </el-col>
    <el-col :span="24" style="background:#fff;">
      <el-input placeholder="请输入内容" style="width:300px;float:right;margin:10px 0" size="small"></el-input>
      <el-table :data="tableData" border>
        <el-table-column fixed prop="date" label="时间"></el-table-column>
        <el-table-column prop="name" label="业务线"></el-table-column>
        <el-table-column prop="province" label="接口"></el-table-column>
        <el-table-column prop="city" label="内容"></el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    
  },
})
export default class MockLog extends Vue {
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
  }]
}
</script>

<style>

</style>