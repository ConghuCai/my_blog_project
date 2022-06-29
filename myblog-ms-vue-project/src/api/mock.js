// import Mock from 'mockjs'
// import mockApi from './mockServerData/fakeData'

// 使用mock模拟数据  假装这些就是后端需要发来的数据

// Mock.mock('/api/page', mockApi.loginPageApiMock)

// Mock.mock('/api/check', mockApi.loginCheckApiMock)

// Mock.mock('/api/logout', mockApi.logoutApiMock)

// Mock.mock('/api/menu', mockApi.getMenuApiMock)

// Mock.mock('/api/home/pie', mockApi.getPieApiMock)
// Mock.mock('/api/home/stat', mockApi.getStatApiMock)
// Mock.mock('/api/home/line', mockApi.getLineApiMock)
// Mock.mock('/api/home/bar', mockApi.getBarApiMock)
// Mock.mock('/api/home/article', mockApi.getArticleTableApiMock)
// Mock.mock('/api/home/tag', mockApi.getTagTableApiMock)
// Mock.mock('/api/home/kind', mockApi.getKindTableApiMock)
// Mock.mock('/api/home/user', mockApi.getUserTableApiMock)

// Mock.mock('/api/blog/kind/get', mockApi.getKindListApiMock)
// Mock.mock('/api/blog/tag/get', mockApi.getTagListApiMock)

// Mock.mock(RegExp('/api/blog/article/add.*'), mockApi.articleUploadApiMock)
// Mock.mock(RegExp('/api/blog/article/delete.*'), mockApi.articleUploadApiMock)
// Mock.mock(RegExp('/api/blog/article/list.*pageNum=4'), mockApi.getArticleListApiMock1)
// Mock.mock(RegExp('/api/blog/article/list.*'), mockApi.getArticleListApiMock)
// Mock.mock(RegExp('/api/blog/article/update.*'), mockApi.articleUploadApiMock)

// Mock.mock(RegExp('/api/blog/tag/update.*'), mockApi.articleUploadApiMock)
// Mock.mock(RegExp('/api/blog/tag/delete.*'), mockApi.articleUploadApiMock)

// Mock.mock(RegExp('/api/blog/kind/delete.*'), mockApi.articleUploadApiMock)
// Mock.mock(RegExp('/api/blog/kind/add.*'), mockApi.articleUploadApiMock)
// Mock.mock(RegExp('/api/blog/kind/update.*'), mockApi.articleUploadApiMock)
// Mock.mock('/api/blog/kind-menu/get', mockApi.getMenuKindListApiMock)

// Mock.mock('/api/blog/user/list', mockApi.getUserApiMock)
// Mock.mock(RegExp('/api/blog/user/delete.*'), mockApi.articleUploadApiMock)

// Mock.mock('/api/blog/comment/list', mockApi.getCommentApiMock)
// Mock.mock(RegExp('/api/blog/comment/delete.*'), mockApi.articleUploadApiMock)

// Mock.mock('/api/blog/message/list', mockApi.getMsgApiMock)
// Mock.mock(RegExp('/api/blog/message/delete.*'), mockApi.articleUploadApiMock)

// Mock.mock('/api/site/link/list', mockApi.getLinkApiMock)
// Mock.mock(RegExp('/api/site/link/delete.*'), mockApi.articleUploadApiMock)
// Mock.mock(RegExp('/api/site/link/update.*'), mockApi.articleUploadApiMock)
// Mock.mock(RegExp('/api/site/link/add.*'), mockApi.articleUploadApiMock)

// Mock.mock('/api/site/admin/list', mockApi.getAdminApiMock)
// Mock.mock(RegExp('/api/site/admin/delete.*'), mockApi.articleUploadApiMock)
// Mock.mock(RegExp('/api/site/admin/update.*'), mockApi.articleUploadApiMock)
// Mock.mock(RegExp('/api/site/admin/add.*'), mockApi.articleUploadApiMock)

// Mock.mock(RegExp('/api/about.*'), mockApi.getAboutApiMock)

// Mock.mock('/api/home/owner', homeApi.getStatisticalOwnerData)

// Mock.mock('/api/home/message/list', homeApi.getStatisticalLeaveCommentData)

// Mock.mock('/api/home/tag', homeApi.getStatisticalTagInfo)

// Mock.mock('/api/home/link', homeApi.getStatisticalLinkInfo)

// Mock.mock('/api/home/carousel', homeApi.getCarousel)

// Mock.mock(RegExp('/api/auth/gitee.*'), homeApi.getGithubAuthUrl('http://192.168.0.9:31415/')) // homeApi.getGithubAuthUrl

// Mock.mock(RegExp('/api/auth/login.*'), homeApi.getLoginInfo)

// Mock.mock(RegExp('/api/auth/user.*'), homeApi.getUserInfo)

// 拦截page=7（最后一页）的请求 证明确实是发出了带页码的请求  并被后端接收

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
