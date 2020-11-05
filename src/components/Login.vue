<template>

<div >

  <div class="background">
    <img :src="require('@/assets/login.png')" width="100%" height="100%" alt="" />
  </div>

  <div  class="login" >

<br><br>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <br>
          <el-form-item label="密码">
            <el-input v-model="form.name"></el-input>
          </el-form-item>


          <el-form-item> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            <el-button type="primary" @click="onSubmit">登录</el-button>&nbsp&nbsp&nbsp&nbsp
            <el-button>注册</el-button>
          </el-form-item>
        </el-form>




  </div>

</div>

</template>





<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.background{
    width:100%;
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
    position: absolute;

}

.login{
    z-index:1;
    position: absolute;

    width:600px;
    height:300px;
    margin-left: 550px;
    margin-top:300px;
}
</style>
