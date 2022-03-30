// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '../layouts'
import { examList, examAdmin, questionAdmin } from '../core/icons'

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '无机化学领域辅助分类系统' },
    redirect: '/dashboard/home',
    children: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/home',
        component: RouteView,
        hideChildrenInMenu: true,
        meta: { title: '首页', keepAlive: true, icon: 'home', permission: ['dashboard'] },
        children: [
          {
            path: '/dashboard/home',
            name: 'Workplace',
            component: () => import('../views/Home'),
            meta: { title: '首页', keepAlive: true, permission: ['dashboard'] }
          }
        ]
      },

      {
        path: '/classify_auxiliary-card',
        name: 'classify_auxiliary-card',
        redirect: '/list/classify_auxiliary-card',
        component: PageView,
        hideChildrenInMenu: true,
        meta: { title: '考试卡片', keepAlive: true, icon: examList, permission: ['classify_auxiliary-card'] },
        children: [
          {
            path: '/list/classify_auxiliary-card',
            name: 'ExamCardList',
            component: () => import('../views/list/ExamCardList'),
            meta: { title: '考试卡片列表', keepAlive: true, permission: ['classify_auxiliary-card'] }
          }
        ]
      },
      {
        path: '/question-admin',
        name: 'question-admin',
        redirect: '/list/question-table-list',
        component: PageView,
        hideChildrenInMenu: true,
        meta: { title: '问题管理', keepAlive: true, icon: questionAdmin, permission: ['question-admin'] },
        children: [
          {
            path: '/list/question-table-list',
            name: 'QuestionTableListWrapper',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('../views/list/QuestionTableList'),
            meta: { title: '问题列表', keepAlive: true, permission: ['question-admin'] }
          }
        ]
      },
      // list
      {
        path: '/list/classify_auxiliary-table-list',
        name: 'classify_auxiliary-table-list',
        component: PageView,
        redirect: '/list/classify_auxiliary-table-list',
        hideChildrenInMenu: true,
        meta: { title: '考试管理', icon: examAdmin, permission: ['classify_auxiliary-table-list'] },
        children: [
          {
            path: '/list/classify_auxiliary-table-list',
            name: 'ExamTableListWrapper',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('../views/list/ExamTableList'),
            meta: { title: '考试列表', keepAlive: true, permission: ['classify_auxiliary-table-list'] }
          }
        ]
      },
      {
        path: '/classify_auxiliary-record-list',
        name: 'classify_auxiliary-record-list',
        redirect: '/list/classify_auxiliary-record-list',
        component: PageView,
        hideChildrenInMenu: true,
        meta: { title: '我的考试', keepAlive: true, icon: 'user', permission: ['classify_auxiliary-record-list'] },
        children: [
          {
            path: '/list/classify_auxiliary-record-list',
            name: 'ExamRecordList',
            component: () => import('../views/list/ExamRecordList'),
            meta: { title: '我参与过的考试列表', keepAlive: true, permission: ['classify_auxiliary-record-list'] }
          }
        ]
      },
      // account
      {
        path: '/account',
        component: RouteView,
        redirect: '/account/center',
        name: 'account',
        // 隐藏当前菜单，但是因为是需要的，所以不能删掉
        hidden: true,
        meta: { title: '个人页', icon: 'user', keepAlive: true, permission: ['user'] },
        children: [
          {
            path: '/account/settings',
            name: 'settings',
            component: () => import('../views/account/settings/Index'),
            meta: { title: '个人设置', hideHeader: true, permission: ['user'] },
            redirect: '/account/settings/base',
            hideChildrenInMenu: true,
            children: [
              {
                path: '/account/settings/base',
                name: 'BaseSettings',
                component: () => import('../views/account/settings/BaseSetting'),
                meta: { title: '基本设置', hidden: true, permission: ['user'] }
              },
              {
                path: '/account/settings/custom',
                name: 'CustomSettings',
                component: () => import('../views/account/settings/Custom'),
                meta: { title: '个性化设置', hidden: true, keepAlive: true, permission: ['user'] }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    // 所有访问不到的路径最终都会落到404里
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由，不在主菜单上展示，独立的路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '../views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '../views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '../views/user/RegisterResult')
      }
    ]
  },

  {
    path: '/test',
    component: BlankLayout,
    redirect: '/test/home',
    children: [
      {
        path: 'home',
        name: 'TestHome',
        component: () => import('../views/Home')
      },
      {
        path: 'note',
        name: 'NoteTest',
        component: () => import('@views/test/SummerNoteDemo')
      },
      {
        path: 'table',
        name: 'TableTest',
        component: () => import('@views/test/BootStrapTableDemo')
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '../views/exception/404')
  },
  {
    path: '/classify_auxiliary/:id',
    component: () => import(/* webpackChunkName: "fail" */ '../views/list/ExamDetail')
  },
  {
    path: '/classify_auxiliary/record/:exam_id/:record_id',
    component: () => import(/* webpackChunkName: "fail" */ '../views/list/ExamRecordDetail')
  }
]
