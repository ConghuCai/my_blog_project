import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/',
        name: 'main',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/blog-ms',
        // 懒加载方式引入组件  这种方式只有用到这个组件才会把他加载进来
        // @ 就是从src目录下开始寻找
        component: () => import('@/views/Blog/BlogMS.vue')
      },
      {
        path: '/blog-edit',
        component: () => import('@/views/Blog/BlogEdit.vue')
      },
      {
        path: '/blog-kind',
        component: () => import('@/views/Blog/BlogKind.vue')
      },
      {
        path: '/blog-tag',
        component: () => import('@/views/Blog/BlogTag.vue')
      },
      {
        path: '/user-ms',
        component: () => import('@/views/User/UserMS.vue')
      },
      {
        path: '/user-msg',
        component: () => import('@/views/User/UserMsg.vue')
      },
      {
        path: '/user-comment',
        component: () => import('@/views/User/UserComment.vue')
      },
      {
        path: '/site-link',
        component: () => import('@/views/Site/SiteLink.vue')
      },
      {
        path: '/site-admin',
        component: () => import('@/views/Site/SiteAdmin.vue')
      },
      {
        path: '/about',
        component: () => import('@/views/About.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
