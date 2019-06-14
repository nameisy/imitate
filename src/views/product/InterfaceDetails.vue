<template>
    <el-row style="background:#fff;padding:10px">
        <el-col :span="24" class="mock-input">
            <el-form size="mini" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-col :span="12">
                    <el-form-item label="业务线" prop="product">
                        <el-input v-model="ruleForm.product" :disabled="true"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="接口" prop="link">
                        <el-input v-model="ruleForm.link" :disabled="true"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="返回值" prop="returnValue">
                        <el-input type="textarea" :rows="3" v-model="ruleForm.returnValue"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="描述" prop="describe">
                        <el-input v-model="ruleForm.describe"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="标识" prop="identification">
                        <el-input v-model="ruleForm.identification"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="调用编码" prop="callEncoding">
                        <el-input v-model="ruleForm.callEncoding" placeholder="默认为UTF-8"></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="16">
                    <el-form-item label="调用记录">
                        <el-switch v-model="keepLog" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                        <span style="margin-left:10px">是否保存调用记录，默认是不保存(如果稍后在测试中需要断言传递给mock的参数是否正确则要保存)</span>
                    </el-form-item>
                </el-col>
            </el-form>
        </el-col>
        <el-col :span="24" style="margin-top:20px">
            <el-button @click="toUpdate">更新</el-button>
            <el-button>删除</el-button>
            <el-button @click="$router.push('/mocklog')">查看日志</el-button>
            <el-button @click="expectBoxVisible = true">查看期望</el-button>
            <el-button @click="logBoxVisible = true">修改记录</el-button>
        </el-col>
        <el-col :span="24" style="margin-top:20px">
            <mo-link-list></mo-link-list>
        </el-col>
        <!-- form dialog -->
        <mo-edit-expect-box
        :visible = "dialogFormVisible" 
        :dialogFormVisible.sync = "dialogFormVisible" 
        v-if="dialogFormVisible">
        </mo-edit-expect-box>

        <!-- look expect list -->
        <mo-look-expect-box
        :visible = "expectBoxVisible" 
        :expectBoxVisible.sync = "expectBoxVisible" 
        v-if="expectBoxVisible">   
        </mo-look-expect-box>

        <!-- revise log-->
         <mo-revise-log-box
        :visible = "logBoxVisible" 
        :logBoxVisible.sync = "logBoxVisible" 
        v-if="logBoxVisible">   
        </mo-revise-log-box>
    </el-row>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import moLinkList from "@/components/product/LinkList.vue"
import moEditExpectBox from "@/components/product/EditExpectBox.vue"
import moLookExpectBox from "@/components/product/LookExpectBox.vue"
import moReviseLogBox from "@/components/product/ReviseLogBox.vue"
import bus from "../../utils/bus"

@Component({
  components: {
    moLinkList,
    moEditExpectBox,
    moLookExpectBox,
    moReviseLogBox
  },
})
export default class LinkDetails extends Vue {
    private keepLog = false
    private dialogFormVisible = false
    private expectBoxVisible = false 
    private logBoxVisible = false

    private  ruleForm = {
        product: '',
        link : '',
        returnValue : '',
        describe : '',
        identification : '',
        callEncoding : '',
        callLog : ''
    }
    private rules = {
        describe: [
            { required: true, message: '接口描述不能为空', trigger: 'blur' },
        ]
    }
    private mounted() {
        bus.$on("dialogFormVisible", () => {
            this.dialogFormVisible = true;
        })
    }

    private toUpdate(): void {
        let ruleForm: any = this.$refs.ruleForm

        ruleForm.validate((valid: boolean) => {
            if (valid) {
                console.log(this.ruleForm)
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }
}
</script>

<style>
.mock-input span{
    font-size: 12px;
    color:#666;
}
.mock-input-title{
    display: inline-block;
    width: 100px;
}
</style>