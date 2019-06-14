<template>
    <el-row class="linkList">
        <el-col :span="24" v-for="(value,index) in data" :key="index" style="padding:8px 0;height:66px">
            <div class="nameTips" @click="goLinkDetails(value)">
                <span>{{value.name.charAt(0).toUpperCase()}}</span>
            </div>
            <div style="float:left;font-size:14px;cursor:pointer;" @click="goLinkDetails(value)">
                <div class="grid-cont-right">
                    <div class="grid-num">{{value.name}}</div>
                    <div style="color:#666;line-height:30px">{{value.link}}</div>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script lang="ts">
import { Component, Vue , Prop} from "vue-property-decorator";

@Component({
  components: {
    
  },
})
export default class LinkDetails extends Vue {
    public data = [
        {
            name : 'aaa',
            link : 'test.a.demo.com'
        },
        {
            name : 'bbb',
            link : 'test.b.demo.com'
        },
        {
            name : 'aaa',
            link : 'test.a.demo.com'
        },
        {
            name : 'bbb',
            link : 'test.b.demo.com'
        },
        {
            name : 'aaa',
            link : 'test.a.demo.com'
        },
        {
            name : 'bbb',
            link : 'test.b.demo.com'
        },
        {
            name : 'aaa',
            link : 'test.a.demo.com'
        },
         {
            name : 'bbb',
            link : 'test.b.demo.com'
        },
        {
            name : 'aaa',
            link : 'test.a.demo.com'
        },
         {
            name : 'bbb',
            link : 'test.b.demo.com'
        }
    ]

    goLinkDetails(value: any): void {
        this.$router.push({name: 'linkdetails', params: value})
    }
}
</script>

<style>
.linkList{
    padding:0 12px;
    border-top: 1px solid #e8e8e8;
    background:#fff;
}
.nameTips{
  float:left;
  width:50px;
  height:50px;
  border-radius:50%;
  background: #8edee9;
  margin-right:10px;
  text-align: center;
  cursor : pointer;
}
.nameTips span{
  line-height: 50px;
  color: #fff;
  font-size: 28px;
}
.linkList .el-col-24{
  border-bottom: 1px solid #e8e8e8;
}
</style>