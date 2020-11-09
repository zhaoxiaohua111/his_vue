<template>
  <el-container style="height: 500px; border: 1px solid #eee">
     <el-header style="text-align: center; font-size: 12px;background:pink">
      header区
      <i class="el-icon-star-on" style="font-size:20px;color:red" ></i>
      <!--<el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-link href="https://baidu.com" target="_blank">百度一下</el-link>
      -->
      <div style="text-align:right">
        <router-link to="/login">{{realname}}</router-link>
        <el-link :v-show="showflag" @click="logOut">退出</el-link>
      </div>
      
     </el-header>
     <el-row style="height:300px">
       <el-col :span="4" >
         <el-aside  class="left_box" >
           left -左侧区
         </el-aside>
       </el-col>
       <el-col :span="20">
          <el-main class="main_box" >
            hello-main区
          </el-main>
       </el-col> 
     </el-row>
    
   
    <el-footer style="background:lightblue">
    footer区
    </el-footer>

  </el-container>
</template>


<script>
export default {
  name: 'home',
  data () {
    return {
     'realname':sessionStorage.getItem("username")==null?'登录':sessionStorage.getItem("username"),
     'showflag':sessionStorage.getItem("username")==null?false:'退出'
    }
  },
  methods:{
    logOut:function(){
    //退出
    this.$router.replace("/login")
    sessionStorage.removeItem("username")

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .left_box{
   width:200px !important;
   background:#DCDFE6;
   height:300px;
 }
 .main_box{
   background:lightgreen;
   height:300px;
 }

</style>
