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
       <div style="text-align:left">
         <el-button type="warning" icon="el-icon-folder-add" @click="dialogVisible = true">新增用户</el-button>
       </div>
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

    <el-dialog
    title="添加用户"
    :visible.sync="dialogVisible"
    width="40%">
    <span>
      <el-form ref="addForm" :model="addForm" label-width="80px">
            <el-input clas="myinput" v-model="addForm.username" placeholder="请输入用户名"></el-input> 
            <el-input clas="myinput" v-model="addForm.password" placeholder="请输入密码"  show-password></el-input>                
            <el-input clas="myinput" v-model="addForm.realname" placeholder="请输入姓名"></el-input>                
            <el-select clas="myinput" v-model="addForm.usetype" placeholder="请选择用户类别">
              <el-option
                v-for="item in usetypes"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>            
            <el-select clas="myinput" v-model="addForm.doctitleid" placeholder="请选择医生职称">
              <el-option
                v-for="item in doctitleids"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select clas="myinput" v-model="addForm.deptid" placeholder="请选择科室">
              <el-option
                v-for="item in deptids"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select> 
            <el-select clas="myinput" v-model="addForm.registleid" placeholder="请选择挂号级别">
            <el-option
              v-for="item in registleIDs"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>  
            <el-radio v-model="addForm.isscheduling" label="是">参与排班</el-radio>
            <el-radio v-model="addForm.isscheduling" label="否">不参与排班</el-radio>
      
      </el-form>
    </span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary"  @click="addUserInfo">确 定</el-button>
    </span>
  </el-dialog>

  </el-container>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
         tableData: [],
        multipleSelection: [],
       //按条件查询关键字
        keywords:'',
        dialogVisible:false,
        addForm:{
          username:'',
          password:'',
          realname:'',
          usetype:'',
          doctitleid:'',
          isscheduling:'是',
          deptid:'',
          registleid:'',
        },//用户类别选项
        usetypes: [{
          value: '0',
          label: '超级管理员'
        }, {
          value: '1',
          label: '医院管理员'
        }, {
          value: '2',
          label: '挂号收费员'
        }, {
          value: '3',
          label: '门诊医生'
        }, {
          value: '4',
          label: '医技医生'
        }],
        //医生职称选项
         doctitleids: [{
          value: '81',
          label: '主任医师'
        }, {
          value: '82',
          label: '副主任医师'
        }, {
          value: '83',
          label: '主治医师'
        }, {
          value: '84',
          label: '住院医师'
        }],
        //科室选择
        deptids: [{
          value: '1',
          label: '心血管内科'
        }, {
          value: '2',
          label: '神经内科'
        }, {
          value: '3',
          label: '普通内科'
        }],//挂号级别选择
         registleIDs: [{
          value: '1',
          label: '专家号'
        }, {
          value: '2',
          label: '普通号'
        }],
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
    //添加用户信息
    addUserInfo:function(){
      var this_=this;
      //判空
      if(this.addForm.username!=null&&this.addForm.username!=''&&
      this.addForm.password!=null&&this.addForm.password!=''&&
      this.addForm.realname!=null&&this.addForm.realname!=''&&
      this.addForm.usetype!=null&&this.addForm.usetype!=''&&
      this.addForm.deptid!=null&&this.addForm.deptid!=''){
      this.axios({
       method:'post',
       url:'/addUser',
       data:this.addForm
      }).then(function(){
        //成功
        alert("用户添加成功");
        this_.dialogVisible=false
        this_.getUsers('')
      })
      }
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