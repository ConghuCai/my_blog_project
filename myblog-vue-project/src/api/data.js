import axios from './axios'

// 主页请求模块
// /home

// 1.getMenuApi  请求菜单栏
// /home/menu
export const getMenuApi = () => {
  return axios.request({
    url: '/home/menu',
    method: 'get'
  })
}

// 2.getOwnerInfoApi  请求站主信息
// /home/owner
export const getOwnerInfoApi = () => {
  return axios.request({
    url: '/home/owner',
    method: 'get'
  })
}

// 3.getMessageApi  请求主页留言信息
// /home/message
export const getMessageApi = () => {
  return axios.request({
    url: '/home/message/list',
    method: 'get'
  })
}

// 3.1 addMessageApi  添加留言
// /home/message/add
export function addMessageApi(msg, login) {
  return axios.request({
    url: '/home/message/add',
    method: 'post',
    params: {
      login: login,
      msg: msg
    }
  })
}

// 4.getTagApi  请求主页tag信息
// /home/tag
export const getTagApi = () => {
  return axios.request({
    url: '/home/tag',
    method: 'get'
  })
}

// 5.getLinkApi  请求友链信息
// /home/link
export const getLinkApi = () => {
  return axios.request({
    url: '/home/link',
    method: 'get'
  })
}

// 6.getCarouselApi  请求走马灯图片信息
// /home/carousel
export function getCarouselApi() {
  return axios.request({
    url: '/home/carousel',
    method: 'get'
  })
}

// 授权登录模块
// /auth

// 1.getOauthLoginApi  请求授权跳转界面的url地址
// /auth/gitee
export function getOauthLoginApi(backUrl) {
  return axios.request({
    url: '/auth/gitee',
    method: 'get',
    params: {
      url: backUrl
    }
  })
}

// 2.getLoginInfoApi  从gitee处  获取用户的gitee登录信息
// /auth/login
export function getLoginInfoApi(code, backUrl) {
  return axios.request({
    url: '/auth/login',
    method: 'post',
    params: {
      code: code,
      backUrl: backUrl
    }
  })
}

// 3.getUserInfoApi  从数据库处  获取用户信息
// /auth/user
export function getUserInfoApi(user) {
  return axios.request({
    url: '/auth/user/' + user,
    method: 'post'
  })
}

// 文章模块
// /article

// 1. getArticlListApi  文章列表
// /article/list/*

// 拿到全部文章：/api/article/list/all?page=1
// 拿到标签文章：/api/article/list/tag/xxx?page=1
// 拿到分类文章：/api/article/list/category/xxx?page=1
// 拿到检索文章：/api/article/list/search/xxx?page=1
// 拿到网站文章：/api/article/list/about/site?page=1
// 拿到推荐文章：/api/article/list/recommend/xxx?page=1
export function getArticlListApi(target, name, page) {
  let subfix = ''
  if (target === 'all') {
    subfix = 'list/all'
  } else {
    subfix = 'list/' + target + '/' + name
  }
  return axios.request({
    url: '/article/' + subfix,
    method: 'get',
    params: {
      page: page
    }
  })
}

// 2. getArticlContentApi  文章列表
// /article/content/*
export function getArticlContentApi(id) {
  return axios.request({
    url: '/article/content/' + id,
    method: 'get'
  })
}

// 3. atrticleLikeApi  点赞文章
// /article/like/*
export function atrticleLikeApi(id) {
  return axios.request({
    url: '/article/like/' + id,
    method: 'get'
  })
}

// 4. atrticleShareApi  分享文章
// /article/share/*
export function atrticleShareApi(id) {
  return axios.request({
    url: '/article/share/' + id,
    method: 'get'
  })
}

// 5 getCommentApi  获取文章的评论列表
// /article/comment/list/*
export function getCommentApi(id) {
  return axios.request({
    url: '/article/comment/list/' + id,
    method: 'get'
  })
}

// 5.1 addCommentApi  添加评论
// /article/comment/add/
export function addCommentApi(id, comm, user) {
  return axios.request({
    url: '/article/comment/add',
    method: 'post',
    params: {
      articleID: id,
      comm: comm,
      user: user
    }
  })
}

// 种类介绍模块
// /category

// 1. getCategoryInfoApi  获取*种类的介绍信息
// /api/category/getInfo/
export function getCategoryInfoApi(name) {
  return axios.request({
    url: '/category/info/' + name,
    method: 'get'
  })
}

// 网站相关信息介绍模块
// /about

// 1.getAboutInfoApi  获取网页相关页的信息
// /about/info

export function getAboutInfoApi() {
  return axios.request({
    url: '/about/info',
    method: 'get'
  })
}

export function helloApi() {
  return axios.request({
    url: '/home/hello',
    method: 'get'
  })
}

export function getGiteeLogoApi() {
  return axios.request({
    url: '/home/gitee',
    method: 'get'
  })
}
