<template>
  <el-container style="height: 500px; border: 1px solid #eee">
     <el-header style="text-align: center; font-size: 12px;">
       <el-row>
         <el-col :span="5">
           <el-input v-model="keywords" size="medium" placeholder="账号名|姓名"/>
         </el-col> 
         <el-col :span="19" style="text-align:left;padding-left:10px">  
           <el-button type="success" size="medium" icon="el-icon-search" @click="selectUserByName">查询</el-button>
         </el-col>
       </el-row>
     </el-header>
     <el-main>
           <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              highlight-current-row
              @current-change="handleCurrentChange"
              @selection-change="handleSelectionChange">
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                label="编号"
                width="120">
                <template slot-scope="scope">{{ scope.row.id }}</template>
              </el-table-column>
              <el-table-column
                prop="username"
                label="账户名"
                width="120">
              </el-table-column>
              <el-table-column
                prop="realname"
                label="姓名"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="primary"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>


     </el-main>
     

  </el-container>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
        tableData: [],
        multipleSelection:[],
        keywords:''
        }
    },
  methods:{
     handleSelectionChange(val) {
        this.multipleSelection = val;
      },
     handleEdit(index, row) {
        console.log(index, row);
      },
     handleDelete(index, row) {
        console.log(index, row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
        this.multipleSelection.push(val);
        console.log(this.multipleSelection);
      },
        //查询用户信息
    getUsers(str){
        //1.向后台服务器发送请求，查询用户列表
        //2.查询结果赋值给tableData
        // var this_=this
        // this.axios({
        //   method:'get',
        //   url:'/getAllUsers?keywords='+str,
        //   // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        // }).then(function(res){
        //     console.log(res.data)
        //     this_.tableData=res.data
        // })
        var this_=this
        this.axios({
          method:'post',
          url:'/getAllUsers',
          data:{'keywords':str} ,
          headers: {'Content-Type': 'application/json'},
        }).then(function(res){
            console.log(res.data)
            this_.tableData=res.data
        })
    },
       //根据条件查询用户信息
      selectUserByName(){
        this.getUsers(this.keywords)
    },
  },
      mounted:function(){
      this.getUsers('')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body,html{
  height:100vh;
}
</style>