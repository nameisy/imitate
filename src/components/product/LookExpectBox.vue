<template>
    <el-dialog title="查看期望" :visible="visible" @update:visible="v=>$emit('update:expectBoxVisible',v)" width="70%"> 
        <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
            <el-form-item label="业务线">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="接口">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="tag">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
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
export default class LookExpect extends Vue {
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

    private formInline = {
        user: '',
        region: ''
    }

    private submit() {
        this.$emit('update:dialogFormVisible', false)
    }

    private  onSubmit() {
        console.log('submit!');
    }
}                
</script>
<style>

</style>
