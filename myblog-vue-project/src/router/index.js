import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  // 进入main界面
  {
    path: '/',
    component: Main,
    // 访问这个路径下的子路径
    // 通过name或path去找路径
    children: [
      {
        path: '/',
        name: 'main',
        // 懒加载方式引入组件  这种方式只有用到这个组件才会把他加载进来
        // @ 就是从src目录下开始寻找
        component: () => import('@/views/Home/Home.vue')
      },
      {
        path: '/category/:categoryName',
        name: 'category',
        // 懒加载方式引入组件  这种方式只有用到这个组件才会把他加载进来
        // @ 就是从src目录下开始寻找
        component: () => import('@/views/Category/Category.vue')
      },
      {
        path: '/article/:id',
        name: 'article',
        component: () => import('@/views/Article/Article.vue')
      },
      {
        path: '/tag/:tagName',
        name: 'tag',
        component: () => import('@/views/Tag/Tag.vue')
      },
      {
        path: '/search/:keyword',
        name: 'search',
        component: () => import('@/views/Search/Search.vue')
      },
      {
        path: '/router',
        name: 'router',
        component: () => import('@/views/RouterHelp.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
