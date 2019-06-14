<template>
  <el-row :gutter="20" style="width:100%;margin:0">
    <el-col :span="24" style="margin-bottom:5vh;padding:0">
      <el-card class="box-card" :body-style="{padding:'10px',color:'#666'}">
        <span>{{$route.meta.title}}</span>
      </el-card>
    </el-col>
    <el-col :span="24" v-for="(val,index) in ruleForm" :key="index" style="margin-bottom : 50px">
      <el-col :span="2" :offset="5">
        <div class="round">{{ index + 1}}</div>
      </el-col>
      <el-col :span="10" style="max-width:460px;">
        <div class="grid-content bg-purple">
          <mo-expect-from ref="formTemplate" :ruleForm = "val"></mo-expect-from>
        </div>
      </el-col>
      <el-button @click="deleteForm($event,index)" size="small">删除模版</el-button>
    </el-col>
    <el-col :span="24">
      <el-col :span="10" :offset="7" style="max-width:460px;text-align: center">
        <el-button @click="addForm">添加</el-button>
        <el-button @click="submitForm">提交期望</el-button>
      </el-col>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import moExpectFrom from "@/components/ExpectFrom.vue"
@Component({
  components: {
    moExpectFrom
  },
})
export default class Expecttation extends Vue {
  private ruleForm = []

  private addForm() {
    let formData = {
        type: '',
        link: '',
        callSource: '',
        identification: '',
        parameter: '',
        body: '',
        tag: '',
        remark: ''
    }
    this.ruleForm.push(formData)
  }

  private deleteForm( event: any , formIndex: number ): void {
    this.ruleForm.splice(formIndex , 1)
  }

  private submitForm(): void {
    let formNode: any = this.$refs.formTemplate
    for (let i = 0, len = formNode.length; i < len ; i ++) {
      console.log(formNode[i].submit())
    }
  }
}
</script>

<style scoped>
.round{
  width: 40px;
  height:40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, .8);
  color: #fff;
  line-height: 40px;
  text-align: center
}
</style>