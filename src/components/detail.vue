<template>
<div class="ll">
    <div>
        <b>{{$store.state.userinfo.name}}</b>,请选择要查看的证书:
    </div>
    <div v-for="(v,i) in $store.state.userinfolists" :key="i">
        <div class="hh" @click="toappl(v.mailStatus,v.id)">{{v.qualification}}
              <span class="gg">{{v.mailStatus}}</span>
        </div>
    </div>
    <x-button class="ff"  @click.native="out">退出</x-button>
</div>
</template>
<script>
import { Group, Cell,XInput,XButton} from 'vux'
import axios from "axios";
import {findone,findlist} from "@/api";
export default {
  components: {
    Group,
    Cell,
    XInput,
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
  created(){
    this.get_certlist();
  },
  methods:{
    get_certlist(){
      let data=this.$store.state.userinfo;
        findlist(data).then((res)=>{
          this.$store.commit('SET_userinfo',data);
          this.$store.commit('SET_userinfolists',res.data.data);
        })
    },
    out(){
      console.log(777);
      this.$router.push({path:'/'})
    },
    toappl(mailStatus,id){
      if(mailStatus=="可寄送"){
          this.$router.push({path:'/address1',query:{cerid:id}})
      }else if(mailStatus=="已申请寄送"){
        console.log(111);
        let data={id:id}
        findone(data).then((res)=>{
          this.$store.commit('SET_detail',res.data.data);
          this.$router.push({path:'/applyed'})
        })
      }else if(mailStatus=="已寄送"||mailStatus=="本人领证"||mailStatus=="他人代领"){
               console.log(111);
               let data={id:id}
               findone(data).then((res)=>{
                 this.$store.commit('SET_detail',res.data.data);
                 this.$router.push({path:'/applyedtwo'})
               })
             }
    }
  }
}
</script scope>
<style>
.hh{
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    background-color: #fff;
    width:auto;
    height:40px;
    margin-top:30px;
    border:1px solid #eee;
    text-align: center;
    padding-top: 15px;
    padding-left:15px;
    border-radius: 8px;
}
.ll{
  padding-top:80px;
  padding-left:25px;
  padding-right:25px;
}
.ff{
    margin-top:30px;
    color: #fff!important;
    background-color: #d9534f!important;
    border-color: #d43f3a;
    border-radius: 8px;
}
.gg{
    display: inline-block;
    min-width: 10px;
    padding: 3px 7px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    background-color: #777;
    border-radius: 10px;
    float: right;
}
</style>
