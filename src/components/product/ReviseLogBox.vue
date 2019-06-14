<template>
    <el-dialog title="修改日志" :visible="visible" @update:visible="v=>$emit('update:logBoxVisible',v)" width="70%"> 
        <el-table :data="tableData" stripe height="350">
            <el-table-column prop="date" label="业务线" width="180"></el-table-column>
            <el-table-column prop="date" label="接口" width="180"></el-table-column>
            <el-table-column prop="name" label="入参" width="180"></el-table-column>
            <el-table-column prop="address" label="返回值"> </el-table-column>
             <el-table-column prop="name" label="tag" width="180"></el-table-column>
            <el-table-column prop="address" label="remark"> </el-table-column>
        </el-table>  
    </el-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";


@Component({
  
})
export default class ReviseLogBox extends Vue {
    @Prop()
    visible: any

    tableData = [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普'
    }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市'
    }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普'
    }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普'
    }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普'
    }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普'
    }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市'
    }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市'
    }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普'
    }]

    private submit() {
        this.$emit('update:dialogFormVisible', false)
    }
}                
</script>
<style>

</style>
