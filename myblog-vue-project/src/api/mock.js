// import Mock from 'mockjs'
// import homeApi from './mockServerData/home'

// 使用mock模拟数据  假装这些就是后端需要发来的数据

// Mock.mock('/api/home/menu', homeApi.getStatisticalMenuData)

// Mock.mock('/api/home/owner', homeApi.getStatisticalOwnerData)

// Mock.mock('/api/home/message/list', homeApi.getStatisticalLeaveCommentData)
// Mock.mock(RegExp('/api/home/message/add.*'), homeApi.messageAddRes)

// Mock.mock('/api/home/tag', homeApi.getStatisticalTagInfo)

// Mock.mock('/api/home/link', homeApi.getStatisticalLinkInfo)

// Mock.mock('/api/home/carousel', homeApi.getCarousel)

// Mock.mock(RegExp('/api/auth/gitee.*'), homeApi.getGithubAuthUrl('http://192.168.0.9:31415/')) // homeApi.getGithubAuthUrl

// Mock.mock(RegExp('/api/auth/login.*'), homeApi.getLoginInfo)

// Mock.mock(RegExp('/api/auth/user.*'), homeApi.getUserInfo)

// 拦截page=7（最后一页）的请求 证明确实是发出了带页码的请求  并被后端接收
// Mock.mock(RegExp('/api/article/list/.*page=7'), homeApi.getArticleRes1)

// Mock.mock(RegExp('/api/article/list/category/.*'), homeApi.getArticleRes)
// Mock.mock(RegExp('/api/article/list/tag/.*'), homeApi.getArticleRes)
// Mock.mock(RegExp('/api/article/list/search/.*'), homeApi.getArticleRes)
// Mock.mock(RegExp('/api/article/list/about/.*'), homeApi.getArticleRes)
// Mock.mock(RegExp('/api/article/list/all.*'), homeApi.getArticleRes)

// Mock.mock(RegExp('/api/article/content/.*'), homeApi.getArticle(1001))

// Mock.mock(RegExp('/api/article/like/.*'), function () { console.log('点赞') })
// Mock.mock(RegExp('/api/article/share.*'), function () { console.log('分享') })

// Mock.mock(RegExp('/api/article/comment/list/.*'), homeApi.getCommentsList)

// Mock.mock(RegExp('/api/article/comment/add.*'), homeApi.commentAddRes)

// Mock.mock(RegExp('/api/category/info/.*'), homeApi.getCategoryInfo)

// Mock.mock(RegExp('/api/about/info'), homeApi.getAboutInfo)

// 跨域Test
// Mock.mock('/test', menuApi.getStatisticalData)
