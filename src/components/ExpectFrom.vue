<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="small">
        <el-form-item label="类型" prop="type">
            <el-select v-model="ruleForm.type" placeholder="请选择活动区域" style="width:100%">
                <el-option label="HTTP" value="HTTP"></el-option>
                <el-option label="RPC" value="RPC"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="接口" prop="link">
            <el-select v-model="ruleForm.link" placeholder="请选择活动区域" style="width:100%">
                <el-option label="/api" value="shanghai"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="调用来源" prop="callSource">
            <el-input v-model="ruleForm.callSource"></el-input>
        </el-form-item>
            <el-form-item label="调用标识" prop="identification">
            <el-input v-model="ruleForm.identification"></el-input>
        </el-form-item>
        <el-form-item v-show="ruleForm.type === 'RPC'" label="参数" prop="parameter">
            <el-input type="textarea" :rows="3" v-model="ruleForm.parameter"></el-input>
        </el-form-item>
        <el-form-item label="Body" prop="body">
            <el-input type="textarea" :rows="3" v-model="ruleForm.body"></el-input>
        </el-form-item>
        <el-form-item label="tag" prop="tag">
            <el-input v-model="ruleForm.tag"></el-input>
        </el-form-item>
        <el-form-item label="remark" prop="remark">
            <el-input v-model="ruleForm.remark"></el-input>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { Component, Prop, Vue , Watch} from 'vue-property-decorator';
import { ElementUIComponent } from 'element-ui/types/component';

@Component({
 
})
export default class Home extends Vue {
    @Prop()
    ruleForm: any

    private rules = {
        type: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
        ]
    }

    private submit() {
        console.log('dd')
    }
}
</script>
<style>

</style>
