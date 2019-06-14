<template>
    <el-dialog title="添加业务线" :visible="visible" @update:visible="v=>$emit('update:dialogFormVisible',v)" width="30%" :append-to-body="true">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="业务线" prop="product">
          <el-select v-model="ruleForm.product" placeholder="请选择活动区域" size="small" style="width:80%">
            <el-option v-for="(val,index) in productList" :key="index" :label="val.projectName" :value="val.projectName"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="添加业务" prop="productChild">
          <el-input v-model="ruleForm.productChild" placeholder="业务线(请用英文大写)" size="small" style="width:80%"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="$emit('update:dialogFormVisible',false)">取 消</el-button>
        <el-button type="primary" @click="submit()">添 加</el-button>
      </div>
    </el-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";


@Component({
  
})
export default class MessageBox extends Vue {
  @Prop()
  visible: any

  @Prop()
  productList: any
  
  @Prop()
  productName: any

  private ruleForm = {
    product: '',
    productChild : ''
  }

  private rules = {
    productChild: [
      { required: true, message: '请输入添加的业务线', trigger: 'blur' },
    ]
  }

  private created() {
    this.ruleForm.product = this.productName
  }

  private submit() {
    this.$emit('update:dialogFormVisible', false)
  }
}                
</script>
<style>

</style>
