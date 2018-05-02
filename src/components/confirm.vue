<template>
  <div class="main-container">
    <div class="error" v-show="tt">
       <span class="iconfont icon-delete_fill"></span>
       抱歉,暂时没有符合您输入信息的可寄证书！
    </div>
     <div class="header">资格证书快递申请系统</div>
     <div>
        <div class="surricon"><span class="iconfont icon-people_fill"></span></div>
        <div class="surrinput" id="input1"><input class="input" :data-name="1" v-model="value1" v-on:focus="gg" v-on:blur="likai" placeholder="请输入姓名"></div>
     </div>
     <div>
        <div class="surricon"><span class="iconfont icon-businesscard_fill"></span></div>
        <div class="surrinput" id="input2"><input class="input"   v-model="value2" :data-name="2" v-on:focus="gg" v-on:blur="likai" placeholder="请输入身份证号"></div>
     </div>

    <x-button class="vv"  text="查询可寄证书" action-type="submit" @click.native="Findlist" ></x-button>
    <div v-html="a1">

    </div>
    <!--<div class="zhuyi"><div class="jj">注意事项</div>-->
      <!--<br/>-->
      <!--<div class="mm">一、目前本服务为<strong>试运行</strong>，只提供<strong>2017年4-12月份</strong>温州考试的全国计算机应用能力考试合格证书邮寄,<strong>可寄达的目的地为浙江省内</strong>；</div>-->
      <!--<div class="mm"> 二、邮寄信息登记成功后，会在<strong>下一个周四(节假日顺延)</strong>通过EMS寄出。</div>-->
      <!--<div class="mm"> 三、邮寄费15元，需<strong>收件人支付</strong>（到付）；</div>-->
      <!--<div class="mm"> 四、邮件签收：</div>-->
      <!--<div class="mm"> 1、本人签收：出示有效期内身份证<strong>原件</strong>给邮寄员核对，准许后拆封邮件核对证书信息，无误后在回执单上签字并将回执单交邮寄员回收。</div>-->
      <!--<div class="mm"> 2、他人代签：代签人出示本人有效期内身份证原件及收件人的有效期内身份证原件给邮寄员核对，准许后拆封邮件核对证书信息，无误后按回执单上的要求登记身份证号、手机号。</div>-->
      <!--<div class="mm"> 五、考生可微信添加公众号“EMS中国邮政速递物流”，关注并绑定可时时查询邮寄动态。</div>-->
    <!--</div>-->
  </div>
</template>

<script scoped>
import { Group, Cell,XInput,XButton,XTextarea} from 'vux'
// import api from "../../api";
import {findlist} from "@/api";
import axios from "axios";
export default {
  components: {
    Group,
    Cell,
    XButton,
    XTextarea
  },
  data () {
    return {
      value1:'',
      value2:'',
      tt:false,
      xxx:'',
      a1:'',
    }
  },
  methods:{
      Findlist(){
        console.log(555);
        if(this.value1==''||this.value2==''){
          alert('请输入姓名和身份证号');
        }else{
            let name=this.value1;
            let idcard=this.value2;
            let data={name:this.value1,idcard:this.value2}
            console.log(444)
          findlist(data).then((res)=>{
            console.log(res)
            this.$store.commit('SET_userinfo',data);
            this.$store.commit('SET_userinfolists',res.data.data);
          if(res.data.data==null){
            console.log(999);
            this.tt=true;
            }else if(res.data.data!==null) {
              this.$router.push({path: '/detail'});
            }
          }).catch(error=>{
            console.log(error)
            })
          }
      },
      gg(){
          let  name = event.currentTarget.dataset.name
          if(name=="1"){
            window.document.getElementById("input1").style.borderColor="#66afe9";
            window.document.getElementById("input1").style.boxShadow ="0 0 8px rgba(102,175,233,.9)";
          }else if(name=="2"){
            window.document.getElementById("input2").style.borderColor="#66afe9";
             window.document.getElementById("input2").style.boxShadow ="0 0 8px rgba(102,175,233,.9)";
          }
      },
      likai(){
         window.document.getElementById("input2").style.boxShadow ="none";
          window.document.getElementById("input1").style.borderColor="#ccc";
          window.document.getElementById("input2").style.boxShadow ="none";
          window.document.getElementById("input1").style.borderColor="#ccc";
      }
  },
  created(){

    axios({
      url: 'http://kd.wzks.cn/cert/info/findone',
      params: {
        location: 'top'
      }
    }).then((res)=>{

      this.a1=res.data.content;
    });
  }
}
</script>

<style>
.main-container{
      height:90%;
      width:auto;
      background-color:#eee;
      margin:0 30px 0 30px;
}
.error{
    margin-top:70px;
    color: #a94442;
    background-color: #f2dede;
    padding: 10px;
    border: 1px solid #ebccd1;
    border-radius: 4px;
    height:100%;
}
.error span{
    background-color: #f2dede;
    color:red;
}
.header{
  margin-top:100px;
  text-align:center;
  font-weight:900;
  font-size:25px;
}
.main-container :nth-child(3){
  display:block;
  margin-top:20px;
}
.surrinput{
   display:inline-block;
   height:42px;
   background-color:white;
   width:80%;
   margin-left:-6px;
   line-height: 42px;
   border-radius:0px 4px 4px 0px;
   border:1px solid #ccc;
}
.surricon{
  width:36px;
  height:42px;
  border:1px solid #ccc;
  display:inline-block;
  border-radius:4px 0px 0px 4px;

}

.input{
  width:80%;
  height:30px;
  border:none;
  outline:none;
  margin-left:10px;
}




.iconfont {
    color: #555;
    background-color: #eee;
    font-size:20px;
    line-height: 40px;
    margin-left:9px;
}

.vv{
    margin-top:30px;
    color: #fff!important;
    background-color: #337ab7!important;
    border-color: #2e6da4;
    border-radius: 8px
}
.zhuyi{
  margin-top:20px;
  background-color: #d9edf7;
  padding:15px;

}

.jj{
  color:#337ab7;
  font-weight: 700;
  line-height: 1.1;
  font-size: 18px
}
.mm{
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #31708f
}
.zz{
  border: 1px solid #ccc;
}
</style>
