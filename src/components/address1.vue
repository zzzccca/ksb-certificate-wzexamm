<template>
  <div class="main">
    <div class="vux-demo">
        <b>{{cerinfo.name}},请你填写以下邮寄信息</b>
    </div>
     <div class="enn">
        <div class="surr" align="center">姓名:</div>
        <div class="surrmess2" id="sp2" :data-name="2"  v-on:focus="gg" v-on:blur="likai"><span>{{cerinfo.name}}</span></div>
     </div>
     <div class="enn">
        <div class="surr">证件号码:</div>
        <div class="surrmess1" id="sp1" :data-name="1"  v-on:focus="gg" v-on:blur="likai"><span>{{cerinfo.idCard}}</span></div>
     </div>
    <div class="enn">
      <div class="surr">考试名称:</div>
      <div class="surrmess1" id="sp1" :data-name="1"  v-on:focus="gg" v-on:blur="likai"><span>{{cerinfo.qualification}}</span></div>
    </div>
    <div class="enn">
      <div class="surr">合格时间:</div>
      <div class="surrmess1" id="sp1" :data-name="1"  v-on:focus="gg" v-on:blur="likai"><span>{{cerinfo.appropriatetime}}</span></div>
    </div>
    <div class="enn">
      <div class="surr">证书号码:</div>
      <div class="surrmess1" id="sp1" :data-name="1"  v-on:focus="gg" v-on:blur="likai"><span>{{cerinfo.certNumber}}</span></div>
    </div>
     <div class="enn1">
        <div class="surricon"><span class="iconfont icon-mobilephone_fill"></span></div>
        <div class="surrinput" id="sp3"><input class="input" type="text" :data-name="3" v-model="phonenumber" v-on:focus="gg" v-on:blur="likai" placeholder="请输入手机号码"/></div>
     </div>
     <div class="enn">
        <div class="surricon"><span class="iconfont icon-daohang"></span></div>
        <div class="surrinput" id="sp4"><input class="input"   type="text" v-model="address" :data-name="4" v-on:focus="gg" v-on:blur="likai" placeholder="请输入地址"/></div>
     </div>
      <div class="enn">
        <div class="surricon"><span class="iconfont icon-yanzhengma"></span></div>
        <div class="surrinput" id="sp5"><input class="input"  type="text" v-model="code" :data-name="5" v-on:focus="gg" v-on:blur="likai" placeholder="请输入验证码"/></div>
     </div>

    <br/>
    <x-button class="hh" text="发送短信验证码" @click.native="sendcode"></x-button>
    <x-button class="xx" text="提交"  @click.native="submitmessage"></x-button>
    <x-button class="dd" text="返回证书列表" type="primary" @click.native="rebacke"></x-button>
    <x-button class="uu" text="退出" type="warn" @click.native="outa"></x-button>
  </div>
</template>

<script>
import { Group, Cell,XInput,XButton,XTextarea} from 'vux';
import {saveMessage,findone,sendCode,findlist} from '@/api';
export default {
  components: {
    Group,
    Cell,
    XInput,
    XButton,
    XTextarea
  },

  data () {
    return {
      name:'',
      phonenumber:'',
      address:'',
      code:'',
      cerinfo:{

      }
    }
  },
  created(){
    console.log(this.$route.query.cerid)
    this.get_cerinfo(this.$route.query.cerid)
  },
  // created:{
  //   console.log($store.state.userinfolists[0].name);
  // },
  methods:{
    get_cerinfo(id){
      id={id};
      findone(id).then((res)=>{
        this.cerinfo=res.data.data;
        console.log(res);
      })
    },
      submitmessage(){
        let date={id:this.$route.query.cerid,mailmobile:this.phonenumber,mailaddr:this.address,code:this.code };
        saveMessage(date).then((res)=>{
        if(res.data.code=="1"){
            alert("您输入的验证码有误")
          }else if(res.data.code=="0"){
            let data={id:this.$route.query.cerid}
            console.log(data);
            findone(data).then((res)=>{
            console.log("我进入了")
            this.$store.commit('SET_detail',res.data.data);
            this.$router.push({path:'/applyed'})
        })
          }
        })
      },
      rebacke(){
        this.$router.push({path:'/detail'})
      },
     sendcode(){
       if(this.phonenumber==""){
         alert("请填写手机号")
       }else{
        let data={phone:this.phonenumber}
        sendCode(data).then((res)=>{
          console.log(res);
        })}
      },
      outa(){
        this.$router.push({path:'/'})
      },
      gg(event){
          console.log(this.$store.state.userinfolists);
          let  name = event.currentTarget.dataset.name
          if(name=="1"){
            window.document.getElementById("sp1").style.borderColor="#66afe9";
            window.document.getElementById("sp1").style.boxShadow ="0 0 8px rgba(102,175,233,.9)";
          }else if(name=="2"){
            window.document.getElementById("sp2").style.borderColor="#66afe9";
            window.document.getElementById("sp2").style.boxShadow ="0 0 8px rgba(102,175,233,.9)";
          }else if(name=="3"){
            window.document.getElementById("sp3").style.borderColor="#66afe9";
            window.document.getElementById("sp3").style.boxShadow ="0 0 8px rgba(102,175,233,.9)";
          }else if(name=="4"){
            window.document.getElementById("sp4").style.borderColor="#66afe9";
            window.document.getElementById("sp4").style.boxShadow ="0 0 8px rgba(102,175,233,.9)";
          }else if(name=="5"){
            window.document.getElementById("sp5").style.borderColor="#66afe9";
            window.document.getElementById("sp5").style.boxShadow ="0 0 8px rgba(102,175,233,.9)";
          }
      },
      likai(){
          window.document.getElementById("sp1").style.boxShadow ="none";
          window.document.getElementById("sp1").style.borderColor="#ccc";
          window.document.getElementById("sp2").style.boxShadow ="none";
          window.document.getElementById("sp2").style.borderColor="#ccc";
          window.document.getElementById("sp3").style.boxShadow ="none";
          window.document.getElementById("sp3").style.borderColor="#ccc";
          window.document.getElementById("sp4").style.boxShadow ="none";
          window.document.getElementById("sp4").style.borderColor="#ccc";
          window.document.getElementById("sp5").style.boxShadow ="none";
          window.document.getElementById("sp5").style.borderColor="#ccc";
      }
  }
}
</script>
<style scoped>
.hh{
  color: #fff !important;
  background-color: #3e4d3e  !important;
  border-color: #293129 ;
  border-radius: 8px;
  width:100%;
  height:3rem;
  font-size:1.2rem;
  padding-top:2px;
}
.input{
  width:auto;
  height:30px;
  border:none;
  outline:none;
  margin-left:20px;
}
.surrmess1{
  display: flex;
  background-color:white;
  border:1px solid #ccc;
  height:42px;
  margin-bottom:-20px;
  width:86%;
}
.surrmess1 span{
  margin:auto;
  margin-left:1.2rem;
}
.surrmess2{
  display:flex;
  background-color:white;
  border:1px solid #ccc;
  width:86%;
  height:42px;
}
.surrmess2 span{
  margin:auto;
  margin-left:1.2rem;
}
.surrinput{
   height:42px;
   background-color:white;
   line-height: 42px;
   border-radius:0px 4px 4px 0px;
   border:1px solid #ccc;
   width:90%;
   margin-left:0.01rem;
}
.surricon{
  width:36px;
  height:42px;
  border:1px solid #ccc;
  border-radius:4px 0px 0px 4px;
}
.surr{
  width:80px;
  height:42px;
  border:1px solid #ccc;
  border-radius:4px 0px 0px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.uuu{
  display:block;
}
.enn1{
  display:flex;
  margin-top:15px;
}
.main{
    padding-top:40px;
    padding-left:20px;
    padding-right:20px;
}
.vux-demo{
    font-weight: 500;
    line-height: 1.1;
    font-size: 18px;
  margin-bottom: 3%;
}
.enn{
  display:flex;
}
.xx{
    color: #fff !important;
    background-color: #337ab7 !important;
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
.kk{
    float: none;
    padding-right: 0;
    padding-left: 0;
    position: relative;
    display: table;
    border-collapse: separate;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
}
</style>
