import axios from './axios'

// 数据请求中心

export function loginApi(username, password) {
  return axios.request({
    url: '/login',
    method: 'post',
    params: {
      username: username,
      password: password
    }
  })
}

export function logoutApi() {
  return axios.request({
    url: '/logout',
    method: 'post'
  })
}

// normal
export function loginCheckApi() {
  return axios.request({
    url: '/public/check',
    method: 'get'
  })
}

export function loginPageApi() {
  return axios.request({
    url: '/public/page',
    method: 'get'
  })
}

// normal
export function getMenuApi() {
  return axios.request({
    url: '/public/menu',
    method: 'get'
  })
}

// root
export function getPieDataApi() {
  return axios.request({
    url: '/home/pie',
    method: 'get'
  })
}
export function getStatDataApi() {
  return axios.request({
    url: '/home/stat',
    method: 'get'
  })
}
export function getLineDataApi() {
  return axios.request({
    url: '/home/line',
    method: 'get'
  })
}
export function getBarDataApi() {
  return axios.request({
    url: '/home/bar',
    method: 'get'
  })
}
export function getArticleTableDataApi() {
  return axios.request({
    url: '/home/article',
    method: 'get'
  })
}
export function getTagTableDataApi() {
  return axios.request({
    url: '/home/tag',
    method: 'get'
  })
}
export function getKindTableDataApi() {
  return axios.request({
    url: '/home/kind',
    method: 'get'
  })
}
export function getUserTableDataApi() {
  return axios.request({
    url: '/home/user',
    method: 'get'
  })
}

// admin
export function getKindListApi() {
  return axios.request({
    url: '/blog/kind/get',
    method: 'get'
  })
}
export function getTagListApi() {
  return axios.request({
    url: '/blog/tag/get',
    method: 'get'
  })
}
export function addArticleApi(info, content) {
  return axios.request({
    url: '/blog/article/add',
    method: 'post',
    header: { 'Content-Type': 'application/json' },
    data: {
      info: info,
      content: content
    }
  })
}

// root
export function updateArticleApi(info) {
  return axios.request({
    url: '/blog/article/update',
    method: 'post',
    header: { 'Content-Type': 'application/json' },
    data: {
      info: info
    }
  })
}
export function getArticleListApi(condition, pageNum) {
  return axios.request({
    url: '/blog/article/list',
    method: 'post',
    header: { 'Content-Type': 'application/json' },
    data: {
      condition: condition
    },
    params: {
      pageNum: pageNum
    }
  })
}
export function deleteArticleApi(id) {
  return axios.request({
    url: '/blog/article/delete',
    method: 'post',
    params: {
      id: id
    }
  })
}

// root
export function updateTagApi(tag, name) {
  return axios.request({
    url: '/blog/tag/update',
    method: 'post',
    params: {
      tag: tag,
      name: name
    }
  })
}
export function deleteTagApi(tag) {
  return axios.request({
    url: '/blog/tag/delete',
    method: 'post',
    params: {
      tag: tag
    }
  })
}

// root
export function deleteKindApi(name) {
  return axios.request({
    url: '/blog/kind/delete',
    method: 'post',
    params: {
      name: name
    }
  })
}
export function addUpdateKindApi(info, target) {
  var url
  if (target === 'add') {
    url = '/blog/kind/add'
  } else {
    url = '/blog/kind/update'
  }
  return axios.request({
    url: url,
    method: 'post',
    data: {
      info: info
    }
  })
}
export function getMenuKindListApi() {
  return axios.request({
    url: '/blog/kind-menu/get',
    method: 'get'
  })
}

// root
export function getUserApi() {
  return axios.request({
    url: '/blog/user/list',
    method: 'get'
  })
}
export function deleteUserApi(login) {
  return axios.request({
    url: '/blog/user/delete',
    method: 'post',
    params: {
      login: login
    }
  })
}

// root
export function getCommentApi() {
  return axios.request({
    url: '/blog/comment/list',
    method: 'get'
  })
}
export function deleteCommentApi(id) {
  return axios.request({
    url: '/blog/comment/delete',
    method: 'post',
    params: {
      id: id
    }
  })
}

// root
export function getMsgApi() {
  return axios.request({
    url: '/blog/message/list',
    method: 'get'
  })
}
export function deleteMsgApi(id) {
  return axios.request({
    url: '/blog/message/delete',
    method: 'post',
    params: {
      id: id
    }
  })
}

// root
export function getLinkApi() {
  return axios.request({
    url: '/site/link/list',
    method: 'get'
  })
}
export function updateLinkApi(info) {
  return axios.request({
    url: '/site/link/update',
    method: 'post',
    data: {
      info: info
    }
  })
}
export function addLinkApi(info) {
  return axios.request({
    url: '/site/link/add',
    method: 'post',
    data: {
      info: info
    }
  })
}
export function deleteLinkApi(id) {
  return axios.request({
    url: '/site/link/delete',
    method: 'post',
    params: {
      id: id
    }
  })
}

// root
export function getAdminApi() {
  return axios.request({
    url: '/site/admin/list',
    method: 'get'
  })
}
export function addUpdateAdminApi(info, target) {
  var url
  if (target === 'add') {
    url = '/site/admin/add'
  } else {
    url = '/site/admin/update'
  }

  return axios.request({
    url: url,
    method: 'post',
    data: {
      info: info
    }
  })
}
export function deleteAdminApi(name) {
  return axios.request({
    url: '/site/admin/delete',
    method: 'post',
    params: {
      name: name
    }
  })
}

// normal
export function getAboutApi() {
  return axios.request({
    url: '/public/about',
    method: 'get'
  })
}

// 授权登录模块
// /auth

// 1.getOauthLoginApi  请求授权跳转界面的url地址
// /auth/gitee
// export function getOauthLoginApi(backUrl) {
//   return axios.request({
//     url: '/auth/gitee',
//     method: 'get',
//     params: {
//       url: backUrl
//     }
//   })
// }

// 2.getLoginInfoApi  从gitee处  获取用户的gitee登录信息
// /auth/login
// export function getLoginInfoApi(code, backUrl) {
//   return axios.request({
//     url: '/auth/login',
//     method: 'post',
//     params: {
//       code: code,
//       backUrl: backUrl
//     }
//   })
// }
