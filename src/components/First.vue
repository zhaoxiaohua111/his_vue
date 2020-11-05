<template>



<body>





<el-container>
  <el-aside width="220px"></el-aside>
  <el-container>
    <el-header style="height: 300px; ">
        <div class="image_1">
            <img :src="require('@/assets/image_1.png')"  />
        </div>
        <body  style="width:1300px; ">
          <el-menu
            style=" text-align:center"
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#027DB4"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">基础信息维护</el-menu-item>
            <el-menu-item index="2">门诊挂号收费</el-menu-item>
            <el-menu-item index="3">门诊医生工作站</el-menu-item>
            <el-menu-item index="4">门诊医技工作站</el-menu-item>
            <el-menu-item index="5">门诊药房工作站</el-menu-item>
            <el-menu-item index="6">门诊财务管理</el-menu-item>
          </el-menu>
        </body>
    </el-header>
    <el-main>
      <el-container>
        <el-aside width="300px">

          <el-row class="tac">

            <el-col :span="24">

              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#027DB4"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="1">
                  <i class="el-icon-menu"></i>
                  <span slot="title" font=8>医院公告</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-setting"></i>
                  <span slot="title">公告一</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-setting"></i>
                  <span slot="title">公告三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">公告四</span>
                </el-menu-item>
                <el-menu-item index="5">
                  <i class="el-icon-setting"></i>
                  <span slot="title">公告五</span>
                </el-menu-item>
                <el-menu-item index="6">
                  <i class="el-icon-setting"></i>
                  <span slot="title">公告六</span>
                </el-menu-item>

              </el-menu>
            </el-col>
          </el-row>


        </el-aside>
        <el-main>
          <div class="image_2">
              <img :src="require('@/assets/image_2.jpeg')"  />
          </div>
        </el-main>
      </el-container>

    </el-main>
    <el-footer style="height: 261px; width:1324px; ">


      <div class="font_1" style="color:white">
        制作：东北林业大学<br>
        地址：哈尔滨市香坊区和兴路26号<br>
        电话：1234567<br>
        邮编：150000<br>
        技术支持：制作人的智慧结晶
      </div>

    </el-footer>
  </el-container>
</el-container>



</body>

</template>




<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-footer {
      background-color: #027DB4;
      color: #333;
      text-align: center;
      line-height: 30px;
    }

  .el-aside {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 0px;
  }

  .el-main {
    background-color: white;
    color: #333;
    line-height: 0px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .font_1{
    margin-top:35px;
  }
</style>
