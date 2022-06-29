import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import http from 'axios'
import '@/assets/scss/reset.scss' // 全局样式
import Icp from './components/Icp.vue'
// 全部引入
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

// 部分引入
import {
  Container, Main, Header, Aside, Footer,
  Menu, Submenu, MenuItem, MenuItemGroup,
  Button, Dropdown, DropdownMenu, DropdownItem, Table, TableColumn, Tag, Link, Divider, Input, Message, Notification, MessageBox, Avatar,
  Col, Row, Card,
  Carousel, CarouselItem,
  Dialog, Form, FormItem,
  Pagination
} from 'element-ui'

Vue.component('my-icp', Icp)

// container
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Footer)

// nav-aside
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

// common
Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.use(Link)
Vue.use(Divider)
Vue.use(Input)
Vue.use(Avatar)

// layout
Vue.use(Col)
Vue.use(Row)
Vue.use(Card)

// Carousel
Vue.use(Carousel)
Vue.use(CarouselItem)

// Form
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)

// Page
Vue.use(Pagination)

Vue.config.productionTip = false

// axios
Vue.prototype.$http = http
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

// mock  判断一下是不是开发环境
if (process.env.NODE_ENV === 'development') require('@/api/mock')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
