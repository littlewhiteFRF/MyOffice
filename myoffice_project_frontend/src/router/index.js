import Vue from 'vue'
import Router from 'vue-router'

//公共部分
import Login from '@/components/public/Login'
import Home from '@/components/public/Home'

//头部导航栏
import ChangePassword from '@/components/header/ChangePassword'
import Help from '@/components/header/Help'

//人事管理
import MechanismIndex from '@/components/person/mechanism/MechanismIndex'
import DepartmentIndex from '@/components/person/department/DepartmentIndex'
import DepartmentSave from '@/components/person/department/DepartmentSave'
import EmployeeIndex from '@/components/person/employee/EmployeeIndex'
import EmployeeSave from '@/components/person/employee/EmployeeSave'
import EmployeeInfomation from '@/components/person/employee/EmployeeInfomation'

//日程管理
import MyselfIndex from '@/components/schedule/myself/MyselfIndex'
import MyselfAdd from '@/components/schedule/myself/MyselfAdd'
import DepartmentIndex2 from '@/components/schedule/department/DepartmentIndex2'
import NoteIndex from '@/components/schedule/note/NoteIndex'
import NoteAdd from '@/components/schedule/note/NoteAdd'

//文档管理
import FileTree from '@/components/file/file/FileTree'
import FileMain from '@/components/file/file/FileMain'
import FileInfomation from '@/components/file/file/FileInfomation'
import FileFolderAdd from '@/components/file/file/FileFolderAdd'
import RecycleBinIndex from '@/components/file/recycle_bin/RecycleBinIndex'
import FileSearchIndex from '@/components/file/file_search/FileSearchIndex'

//消息管理
import NewsIndex from '@/components/news/news/NewsIndex'
import NewsEdit from '@/components/news/news/NewsEdit'
import MailboxIndex from '@/components/news/mailbox/MailboxIndex'
import ReceiveMail from '@/components/news/mailbox/ReceiveMail'
import SendMail from '@/components/news/mailbox/SendMail'
import DraftMail from '@/components/news/mailbox/DraftMail'
import DeleteMail from '@/components/news/mailbox/DeleteMail'

//系统管理
import RoleIndex from '@/components/system/role/RoleIndex'
import LoginRecordIndex from '@/components/system/login_record/LoginRecordIndex'
import MenuSortIndex from '@/components/system/menu_sort/MenuSortIndex'
import OperationRecordIndex from '@/components/system/operation_record/OperationRecordIndex'

//考勤管理
import AttendanceCardIndex from '@/components/attendance/attendance_card/AttendanceCardIndex'
import AttendanceRecordIndex from '@/components/attendance/attendance_record/AttendanceRecordIndex'
import AttendanceStatisticsIndex from '@/components/attendance/attendance_statistics/AttendanceStatisticsIndex'

Vue.use(Router)

export default new Router({
  mode: 'history',//这样路径就不会生成“#”号
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      hidden: true,
    },
    
    //头部导航栏
    {
      path:"/header/ChangePassword",
      name: '修改密码页面',
      component: ChangePassword,
      hidden: true,
    },
    {
      path:"/header/Help",
      name: '帮助页面',
      component: Help,
      hidden: true,
    },
    {
      //所有页面共享的组件，实现路由嵌套，各个子页面
      path: '/home',
      name: '主页',
      component: Home,
      hidden: true,
      meta: {
        //keepAlive: false,//keepAlive:false此组件不需要被缓存
        requireAuth: true
      },
      children: [
        //人事管理
        {
          path:"/person/mechanism/MechanismIndex",
          name: '机构管理主页面',
          component: MechanismIndex,
          hidden: true,
          meta: {keepAlive: false, requireAuth: true} 
        },
        {
          path:"/person/department/DepartmentIndex",
          name: '部门管理主页面',
          component: DepartmentIndex,
          hidden: true,
          meta: {keepAlive: false, requireAuth: true} 
        },
        { 
          path:"/person/employee/EmployeeIndex",
          name: '员工管理主页面',
          component: EmployeeIndex,
          hidden: true,
          meta: {keepAlive: false, requireAuth: true} 
        },

        //日程管理
        {
          path:"/schedule/myself/MyselfIndex",
          name: '我的日程主页面',
          component: MyselfIndex,
          hidden: true,
          meta: {keepAlive: false, requireAuth: true} 
        },
        {
          path:"/schedule/department/DepartmentIndex2",
          name: '部门日程主页面',
          component: DepartmentIndex2,
          hidden: true,
          meta: {keepAlive: false, requireAuth: true} 
        },
        {
          path:"/schedule/note/NoteIndex",
          name: '便签管理主页面',
          component: NoteIndex,
          hidden: true,
          meta: {keepAlive: false, requireAuth: true} 
        },

        //文档管理
        {
          path:"/file/file/FileTree",
          name: '文件树状页面',
          component: FileTree,
          hidden: true,
          meta: {keepAlive: false, requireAuth: true} 
        },
        {
          path:"/file/recycle_bin/RecycleBinIndex",
          name: '回收站主页面',
          component: RecycleBinIndex,
          hidden: true,
          meta: {keepAlive: false, requireAuth: true} 
        },
        {
          path:"/file/file_search/FileSearchIndex",
          name: '文件搜索主页面',
          component: FileSearchIndex,
          hidden: true,
          meta: {keepAlive: false, requireAuth: true} 
        },

        //消息管理
        {
          path:"/news/news/NewsIndex",
          name: '消息管理主页面',
          component: NewsIndex,
          hidden: true,
          meta: {keepAlive: false, requireAuth: true} 
        },
        {
          path:"/news/mailbox/MailboxIndex",
          name: '信箱主页面',
          component: MailboxIndex,
          hidden: true,
          meta: {keepAlive: false, requireAuth: true} 
        },

        //系统管理
        {
          path:"/system/role/RoleIndex",
          name: '角色管理主页面',
          component: RoleIndex,
          hidden: true,
          meta: {keepAlive: false, requireAuth: true} 
        },
        {
          path:"/system/login_record/LoginRecordIndex",
          name: '登陆日志主页面',
          component: LoginRecordIndex,
          hidden: true,
          meta: {keepAlive: false, requireAuth: true} 
        },
        {
          path:"/system/menu_sort/MenuSortIndex",
          name: '菜单排序主页面',
          component: MenuSortIndex,
          hidden: true,
          meta: {keepAlive: false, requireAuth: true} 
        },
        {
          path:"/system/operation_record/OperationRecordIndex",
          name: '操作日志主页面',
          component: OperationRecordIndex,
          hidden: true,
          meta: {keepAlive: false, requireAuth: true} 
        },

        //考勤管理
        {
          path:"/attendance/attendance_card/AttendanceCardIndex",
          name: '考勤打卡主页面',
          component: AttendanceCardIndex,
          hidden: true,
          meta: {keepAlive: false, requireAuth: true} 
        },
        {
          path:"/attendance/attendance_record/AttendanceRecordIndex",
          name: '考勤记录主页面',
          component: AttendanceRecordIndex,
          hidden: true,
          meta: {keepAlive: false, requireAuth: true} 
        },
        {
          path:"/attendance/attendance_statistics/AttendanceStatisticsIndex",
          name: '考勤统计信息主页面',
          component: AttendanceStatisticsIndex,
          hidden: true,
          meta: {keepAlive: false, requireAuth: true} 
        },
      ]
    },

  ]
})
