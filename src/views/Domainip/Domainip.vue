<template>
  <el-row :gutter="20" style="width:100%;margin:0">
    <el-col :span="24" style="margin-bottom:5vh;padding:0">
      <el-card class="box-card" :body-style="{padding:'10px',color:'#666'}">
        <span>{{$route.meta.title}}</span>
      </el-card>
    </el-col>
    <el-col :span="24" style="background:#fff;">
      <el-button size="small" type="primary" icon="el-icon-plus" style="float:right;margin:10px 0">添加</el-button>
      <el-input placeholder="域名" style="width:40vh;float:right;margin:10px 10px 0 10px" size="small"></el-input>
      <el-input placeholder="IP" style="width:40vh;float:right;margin:10px 10px 0 10px" size="small"></el-input>
      
      <el-table ref="singleTable" border :data="tableData" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column property="date" label="域名"></el-table-column>
        <el-table-column property="name"  label="ip"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">  
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="deleteOne(scope.row)" type="text" size="small">删除</el-button> 
          </template>
        </el-table-column>
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
export default class Domainip extends Vue {
  tableData = [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }]
  currentRow = null
  handleCurrentChange(val: any) {
    this.currentRow = val;
  }
}
</script>

<style>

</style>