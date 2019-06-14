<template>
  <el-row :gutter="20" style="width:100%">
    <el-col :span="24" style="margin-bottom:5vh;">
      <el-card class="box-card" :body-style="{padding:'10px',color:'#666'}">
        <span>{{$route.meta.title}}</span>
      </el-card>
    </el-col>
    <el-col :span="10" :offset="6" style="max-width:460px">
      <div class="grid-content bg-purple">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="small">
          <el-form-item label="业务线" prop="type">
            <el-select v-model="ruleForm.type" placeholder="请选择活动区域" style="width:100%">
              <el-option label="HTTP" value="HTTP"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="接口" prop="link">
            <el-input v-model="ruleForm.callSource"></el-input>
          </el-form-item>
          <el-form-item label="描述" prop="callSource">
            <el-input v-model="ruleForm.callSource"></el-input>
          </el-form-item >
          <el-form-item label="调用记录">
            <el-input v-model="ruleForm.identification"></el-input>
          </el-form-item>
          <el-form-item label="标识" prop="parameter">
            <el-input v-model="ruleForm.identification"></el-input>
          </el-form-item>
          <el-form-item label="默认返回值" prop="body">
            <el-input type="textarea" :rows="3" v-model="ruleForm.body"></el-input>
          </el-form-item>
          <el-form-item label="调用编码" prop="tag">
            <el-input v-model="ruleForm.tag"></el-input>
          </el-form-item>
          <el-form-item label="是否透传" prop="remark">
            <el-input v-model="ruleForm.remark"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" style="width:80%">立即保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    
  },
})
export default class Apimeta extends Vue {
    private ruleForm = {
      type : '',
      link : '',
      callSource : '',
      identification : '',
      parameter : '',
      body : '',
      tag : '',
      remark : ''
    }
    private rules = {
      type: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
      ]
    }

    submitForm(formName: any) {
      console.log(formName)
    }
}
</script>

<style>

</style>