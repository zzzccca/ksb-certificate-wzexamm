<template>
    <div class="main">
        <div class="nn">
            <div class="top">
                {{$store.state.detail.certName}}
            </div>
            <div class="center">
                <div class="cc"><b>邮寄状态：</b>{{$store.state.detail.mailStatus}} EMS <b>{{$store.state.detail.emsNumber}}</b></div>
                <div class="cc"><b>收件人：</b>{{$store.state.detail.name}}</div>
                <div class="cc"><b>申请时间：</b>{{$store.state.detail.mailReqDate}}</div>
                <div class="cc"><b>联系电话：</b>{{$store.state.detail.mailMobile}}</div>
                <div class="cc"><b>邮寄地址：</b>{{$store.state.detail.mailAddr}}</div>
            </div>
        </div>
            <!--<x-button class="xx" text="修改邮寄信息" type="default" @click.native="changemessaage"></x-button>-->
            <x-button class="dd" text="返回证书列表" type="primary" @click.native="reback"></x-button>
            <x-button class="uu" text="退出" type="warn" @click.native="tuichu"></x-button>
    </div>
</template>
<script>
import {XButton} from 'vux'
import {findone} from '@/api'
export default {
  components: {

    XButton
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  methods:{
      changemessaage(){
          this.$router.push({path:'/address2'})
      },
      reback(){
          let data={id:this.$store.state.detail.id};
          console.log(data);
        //   findone(data).then((res)=>{
        //       this.$store.commit('SET_userinfolists',res.data.data);
        //       console.log(res.data);
        //   })
          this.$router.push({path:'/detail'})
      },
      tuichu(){
          this.$router.push({path:'/'})
      }
  }
}
</script>
<style>
.main{
    padding-top:80px;
    padding-left:20px;
    padding-right:20px;
}
.cc{
    padding:5px;
}
.nn{
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid  #337ab7;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
    border-radius: 8px
}
.top{
    font-size: 14px;
    color: #fff;
    background-color: #337ab7;
    border-color: #337ab7;
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
.center{
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    color: #333;
}
.xx{
    color: #fff!important;
    background-color: #337ab7!important;
    border-color: #2e6da4;
    border-radius: 8px
}
.dd{
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
    border-radius: 8px
}
.uu{
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;
    border-radius: 8px
}
</style>
