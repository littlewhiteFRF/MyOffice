<template>

  <el-container>
    <el-aside width="300px" style="background-color:#20a0ff">
      <p id="welcome">
      欢迎：系统管理员<br>
      角色：系统管理员<br>
      部门：研发部<br>
      您共有0条新消息<br>

      </p>

      <el-row class="tac" >
        <el-col :span="12">
        
          <el-menu
            default-active="2"
            id="asidemenu"
            @open="handleOpen"
            @close="handleClose">

            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>人事管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" >机构管理</el-menu-item>
                <el-menu-item index="1-2">部门管理</el-menu-item>
                <el-menu-item index="1-3">员工管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>


            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>日程管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">我的日程</el-menu-item>
                <el-menu-item index="2-2">部门日程</el-menu-item>
                <el-menu-item index="2-3">我的便签</el-menu-item>
              </el-menu-item-group>
            </el-submenu>


            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>文档管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">文档管理</el-menu-item>
                <el-menu-item index="3-2">回收站</el-menu-item>
                <el-menu-item index="3-3">文件搜索</el-menu-item>
              </el-menu-item-group>
            </el-submenu>



            
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>消息传递</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">消息管理</el-menu-item>
                <el-menu-item index="4-2">信箱</el-menu-item>
              </el-menu-item-group>
            </el-submenu>


            
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>系统管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1">角色管理</el-menu-item>
                <el-menu-item index="5-2">登录日志</el-menu-item>
                <el-menu-item index="5-3">菜单排序</el-menu-item>
                <el-menu-item index="5-4">操作日志</el-menu-item>
              </el-menu-item-group>
            </el-submenu>


            
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>考勤管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="6-1">考勤统计</el-menu-item>
                <el-menu-item index="6-2">考勤历史记录查询</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

          </el-menu>
        </el-col>
      </el-row>

    </el-aside>


    <el-container>

      <el-header>
      <div >
          <div >
            <router-link to="/home" style="text-decoration:none">主页&emsp;&emsp;</router-link>
            <router-link to="/header/ChangePassword" style="text-decoration:none">修改密码&emsp;&emsp;</router-link>
            <router-link to="/" style="text-decoration:none">重新登录&emsp;&emsp;</router-link>
            <router-link to="/testElement" style="text-decoration:none">显示隐藏通知栏&emsp;&emsp;</router-link>
            <router-link to="/header/Help" style="text-decoration:none">帮助&emsp;&emsp;</router-link >
            

            今天是：2019-9-17 星期二
          </div>
          <router-view/>
        </div>
      </el-header>

        
      <el-main>
        机构名称：<el-input  style="width: 200px;margin-top: 50px;padding: 0px;"
              size="mini">
          </el-input>

          机构简称：<el-input  style="width: 200px; margin-left: 10px; padding-left: 0px;"
              size="mini"
              >
          </el-input>

          <el-button type="primary" size="mini" style="margin-left:20px;" @click="Add">添加
          </el-button>

          <el-button type="primary" size="mini" style="margin-left:15px;" @click="SaveModify">保存修改</el-button>
      </el-main>


      <el-footer style="margin-top:200px;"></el-footer>

    </el-container>


  </el-container>

</template>






<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #20a0ff;

}

#asidemenu {
  margin-top: 30px;
  background-color: #20a0ff;
  color: white;
}


#welcome{
  font-family: Arial, Helvetica, sans-serif;
  line-height: 35px;
  margin-left: 20px;
  font-size: 14px;
}



#nav {
  color: white;
  padding: 20px;
  margin-left: 0px;
  a {
   
    color: white;
    &.router-link-exact-active {
      color: white;
      text-decoration: none;
    }
  }
}

</style>
