<template>
    <el-dialog title="编辑在线期望" :visible="visible" @update:visible="v=>$emit('update:dialogFormVisible',v)" width="40%" :top="'5vh'">
      <mo-expect-from></mo-expect-from>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submit()">保 存</el-button>
      </div>
    </el-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import moExpectFrom from "../ExpectFrom.vue"

@Component({
  components: {
    moExpectFrom
  },
})
export default class MessageBox extends Vue {
  @Prop()
  visible: any
  
  private submit() {
    this.$emit('update:dialogFormVisible', false)
  }
}                
</script>
<style>

</style>
