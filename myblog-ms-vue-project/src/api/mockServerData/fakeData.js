// mock数据模拟
// import Mock from 'mockjs'
var permitCode = 20000
export default {
  loginPageApiMock: () => {
    return {
      code: 20000,
      data: {
        background: 'https://s2.loli.net/2021/12/13/SYUrwBngRtuaWO7.jpg',
        avatar: 'https://i.loli.net/2021/12/01/5MrvyJLdH1cn27V.png'
      }
    }
  },

  loginApiMock: () => {
    return {
      code: 20000,
      success: true,
      msg: '登录成功！'
    }
  },

  logoutApiMock: () => {
    return { msg: '已注销', code: 30000, success: true }
  },

  loginCheckApiMock: () => {
    return {
      code: permitCode,
      success: true,
      user: {
        name: 'ConghuCai',
        avatar: 'http://cdn.conghucai.site/myblog/home/logo.png',
        role: 'root'
      }
    }
  },

  getMenuApiMock: () => {
    return {
      code: 20000,
      data: {
        title: '蔡同学的小站',
        sname: 'CBlog',
        logo: 'http://cdn.conghucai.site/myblog/home/logo.png',
        menu: [
          {
            label: '专栏·博文',
            icon: 'collection',
            children: [
              {
                path: '/blog-edit',
                label: '写篇博客',
                icon: 'edit-outline'
              },
              {
                path: '/blog-ms',
                label: '已发表博文',
                icon: 'reading'
              },
              {
                path: '/blog-kind',
                label: '专栏',
                icon: 'guide'
              },
              {
                path: '/blog-tag',
                label: '标签',
                icon: 'attract'
              }
            ]
          },
          {
            label: '读者·留言',
            icon: 'connection',
            children: [
              {
                path: '/user-ms',
                label: '读者管理',
                icon: 'user'
              },
              {
                path: '/user-msg',
                label: '留言',
                icon: 'message'
              },
              {
                path: '/user-comment',
                label: '评论',
                icon: 'chat-line-square'
              }
            ]
          },
          {
            label: '网站·博客',
            icon: 'brush',
            children: [
              {
                path: '/site-link',
                label: '链接管理',
                icon: 'link'
              },
              {
                path: '/site-admin',
                label: '博主管理',
                icon: 'key'
              }
            ]
          }
        ]
      }
    }
  },

  getPieApiMock: () => {
    return {
      code: permitCode,
      data: {
        legend: ['Java', 'Golang', 'Vue'],
        value: [10, 5, 4]
      }
    }
  },

  getStatApiMock: () => {
    return {
      code: permitCode,
      data: [
        {
          name: '站点访问量',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '博文阅读量',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '评论',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          name: '留言',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '博文总数',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '点赞转发',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        }
      ]
    }
  },

  getLineApiMock: () => {
    return {
      code: permitCode,
      data: {
        legend: ['访问量', '评论留言'],
        axis: ['11-29', '11-30', '11-31', '12-01', '12-02', '12-03'],
        value: [
          ['400', '320', '351', '601', '552', '109'],
          ['10', '30', '40', '45', '35', '30']
        ]
      }
    }
  },

  getBarApiMock: () => {
    return {
      code: permitCode,
      data: {
        legend: ['点击阅读', '点赞转发留言'],
        axis: ['Java', 'Vue', 'Golang', 'Redis', 'EEG', 'MySql'],
        value: [
          [4.3, 2.1, 3.5, 6, 5.5, 1],
          [1, 3, 4, 4.5, 3.5, 3]
        ]
      }
    }
  },

  getArticleTableApiMock: () => {
    return {
      code: permitCode,
      data: [
        {
          id: '21ae2eb9fa484e84ae37a812700d2fa7',
          name: 'Linux安装nodejs+cnpm+vue+vue/cli，创建部署vue项目的步骤',
          click: 500,
          likeShare: 3500,
          comment: 22000
        },
        {
          id: '21ae2eb9fa484e84ae37a812700d2fa7',
          name: 'Linux安装nodejs+cnpm+vue+vue/cli，创建部署vue项目的步骤',
          click: 500,
          likeShare: 3500,
          comment: 22000
        },
        {
          id: '21ae2eb9fa484e84ae37a812700d2fa7',
          name: 'Linux安装nodejs+cnpm+vue+vue/cli，创建部署vue项目的步骤',
          click: 500,
          likeShare: 3500,
          comment: 22000
        },
        {
          id: '21ae2eb9fa484e84ae37a812700d2fa7',
          name: 'Linux安装nodejs+cnpm+vue+vue/cli，创建部署vue项目的步骤',
          click: 500,
          likeShare: 3500,
          comment: 22000
        },
        {
          id: '21ae2eb9fa484e84ae37a812700d2fa7',
          name: 'Linux安装nodejs+cnpm+vue+vue/cli，创建部署vue项目的步骤',
          click: 500,
          likeShare: 3500,
          comment: 22000
        }
      ]
    }
  },

  getKindTableApiMock: () => {
    return {
      code: permitCode,
      data: [
        {
          name: 'Java',
          aClick: 500.1,
          aInter: 35.3
        },
        {
          name: 'Java',
          aClick: 500.1,
          aInter: 35.3
        },
        {
          name: 'Java',
          aClick: 500.1,
          aInter: 35.3
        },
        {
          name: 'Java',
          aClick: 500.1,
          aInter: 35.3
        },
        {
          name: 'Java',
          aClick: 500.1,
          aInter: 35.3
        }
      ]
    }
  },

  getTagTableApiMock: () => {
    return {
      code: permitCode,
      data: [
        {
          name: 'Spring',
          aClick: 500,
          aInter: 3500
        },
        {
          name: 'Spring',
          aClick: 500,
          aInter: 3500
        }, {
          name: 'Spring',
          aClick: 500,
          aInter: 3500
        }, {
          name: 'Spring',
          aClick: 500,
          aInter: 3500
        }, {
          name: 'Spring',
          aClick: 500,
          aInter: 3500
        }
      ]
    }
  },

  getUserTableApiMock: () => {
    return {
      code: permitCode,
      data: [
        {
          login: 'Itarikun',
          name: '碇真嗣',
          inter: 3500
        },
        {
          login: 'Itarikun',
          name: '碇真嗣',
          inter: 3500
        },
        {
          login: 'Itarikun',
          name: '碇真嗣',
          inter: 3500
        },
        {
          login: 'Itarikun',
          name: '碇真嗣',
          inter: 3500
        },
        {
          login: 'Itarikun',
          name: '碇真嗣',
          inter: 3500
        }
      ]
    }
  },

  getKindListApiMock: () => {
    return {
      code: permitCode,
      data: [
        {
          label: 'JAVA',
          value: 'java'
        },
        {
          label: 'Golang',
          value: 'golang'
        },
        {
          label: 'Linux',
          value: 'linux'
        },
        {
          label: 'Redis',
          value: 'redis'
        },
        {
          label: '数据结构和算法',
          value: 'algorithm'
        }
      ]
    }
  },

  getTagListApiMock: () => {
    return {
      code: permitCode,
      data: [
        {
          label: '踩坑记录',
          value: '踩坑记录',
          color: '',
          count: 3
        },
        {
          label: 'SpringBoot',
          value: 'SpringBoot',
          color: 'info',
          count: 3
        },
        {
          label: 'Dubbo',
          value: 'Dubbo',
          color: 'danger',
          count: 3
        },
        {
          label: 'Spring',
          value: 'Spring',
          color: 'warning',
          count: 3
        },
        {
          label: '前端开发',
          value: '前端开发',
          color: '',
          count: 3
        },
        {
          label: 'MyBatis',
          value: 'MyBatis',
          color: 'success',
          count: 3
        }
      ]
    }
  },

  articleUploadApiMock: () => {
    return {
      code: permitCode,
      success: true,
      msg: 'success'
    }
  },

  getArticleListApiMock: () => {
    return {
      code: permitCode,
      data: {
        articles: [
          {
            id: '1001',
            title: '2021-11-13 记录：Java连接远程Redis的报错信息和解决办法',
            intro: 'Redis刚刚入门，用Java程序远程连接Redis，报了很多错误，许久才连上数据库。记录一下这些错误信息和引发原因、解决办法。Redis刚刚入门，用Java程序远程连接Redis，报了很多错误，许久才连上数据库。记录一下这些错误信息和引发原因、解决办法。Redis刚刚入门，用Java程序远程连接Redis，报了很多错误，许久才连上数据库。记录一下这些错误信息和引发原因、解决办法。',
            clickCount: 213,
            likeCount: 10,
            commentCount: 8,
            shareCount: 10,
            carousel: 1,
            time: '2021-11-13 13:35:30',
            tag: ['spring', 'springboot', 'vue', 'redis'],
            tagType: ['info', 'warning', 'success', 'danger'],
            type: 'Java',
            typeValue: 'java',
            icon: 'mouse',
            src: ''
          },
          {
            id: '1002',
            title: '2021-11-14 记录：Java连接远程Redis的报错信息和解决办法',
            intro: 'Redis刚刚入门，用Java程序远程连接Redis，报了很多错误，许久才连上数据库。记录一下这些错误信息和引发原因、解决办法。',
            clickCount: 213,
            likeCount: 10,
            commentCount: 8,
            shareCount: 10,
            carousel: 1,
            time: '2021-11-13 13:35:30',
            tag: ['spring', 'springboot', 'vue', 'redis'],
            tagType: ['info', 'warning', 'success', 'danger'],
            type: 'Java',
            typeValue: 'java',
            icon: 'sunny',
            src: ''
          },
          {
            id: '1003',
            title: '2021-11-15 记录：Java连接远程Redis的报错信息和解决办法',
            intro: 'Redis刚刚入门，用Java程序远程连接Redis，报了很多错误，许久才连上数据库。记录一下这些错误信息和引发原因、解决办法。',
            clickCount: 213,
            likeCount: 10,
            commentCount: 8,
            shareCount: 10,
            carousel: 1,
            time: '2021-11-13 13:35:30',
            tag: ['spring', 'springboot', 'vue', 'sql', 'mvc'],
            tagType: ['info', 'warning', 'success', 'danger'],
            type: 'Java',
            typeValue: 'java',
            icon: 'place',
            src: ''
          },
          {
            id: '1004',
            title: '2021-11-16 记录：Java连接远程Redis的报错信息和解决办法',
            intro: 'Redis刚刚入门，用Java程序远程连接Redis，报了很多错误，许久才连上数据库。记录一下这些错误信息和引发原因、解决办法。',
            clickCount: 213,
            likeCount: 10,
            commentCount: 8,
            shareCount: 10,
            carousel: 1,
            time: '2021-11-13 13:35:30',
            tag: ['spring', 'springboot', 'vue', 'restful'],
            tagType: ['info', 'warning', 'success', 'danger'],
            type: 'Java',
            typeValue: 'java',
            icon: 'discover',
            src: ''
          },
          {
            id: '1005',
            title: '2021-11-17 记录：Java连接远程Redis的报错信息和解决办法',
            intro: 'Redis刚刚入门，用Java程序远程连接Redis，报了很多错误，许久才连上数据库。记录一下这些错误信息和引发原因、解决办法。Redis刚刚入门，用Java程序远程连接Redis，报了很多错误，许久才连上数据库。记录一下这些错误信息和引发原因、解决办法。',
            clickCount: 213,
            likeCount: 10,
            commentCount: 8,
            shareCount: 10,
            carousel: 1,
            time: '2021-11-13 13:35:30',
            tag: ['spring', 'springboot', 'vue', 'redis'],
            tagType: ['info', 'warning', 'success', 'danger'],
            type: 'Java',
            typeValue: 'java',
            icon: 'trophy',
            src: ''
          }
        ],
        totalItem: 16,
        pageSize: 5
      }
    }
  },

  getArticleListApiMock1: () => {
    return {
      code: permitCode,
      data: {
        articles: [
          {
            id: '1001',
            title: '2021-11-13 记录：Java连接远程Redis的报错信息和解决办法',
            intro: 'Redis刚刚入门，用Java程序远程连接Redis，报了很多错误，许久才连上数据库。记录一下这些错误信息和引发原因、解决办法。Redis刚刚入门，用Java程序远程连接Redis，报了很多错误，许久才连上数据库。记录一下这些错误信息和引发原因、解决办法。Redis刚刚入门，用Java程序远程连接Redis，报了很多错误，许久才连上数据库。记录一下这些错误信息和引发原因、解决办法。',
            clickCount: 213,
            likeCount: 10,
            commentCount: 8,
            shareCount: 10,
            time: '2021-11-13 13:35:30',
            tag: ['spring', 'springboot', 'vue', 'redis'],
            tagType: ['info', 'warning', 'success', 'danger'],
            type: 'Java',
            icon: 'mouse',
            src: ''
          }
        ],
        totalItem: 16,
        pageSize: 5
      }
    }
  },

  getMenuKindListApiMock: () => {
    return {
      code: permitCode,
      data: {
        menuID: 2,
        menuData: [
          {
            label: '后端技术',
            id: 2
          },
          {
            label: '前端技术',
            id: 3
          }
        ],
        kindData: [
          {
            name: 'java',
            label: 'JAVA',
            avatar: 'http://cdn.conghucai.site/java.png',
            intro: '脑电图作为一种无创的脑电生理活动监测技术，记录的信号包含丰富的脑电生理信息，从神经生理学的角度来看，这些信息能直接、准确地解释情绪。脑电图信号中包含的振荡特征和特定频带（Delta (1-4Hz)、Theta (4-7Hz)、Alpha (8-13Hz)、Beta (13-30Hz)、Gamma (>30Hz)内大脑活动的节律对理解情绪诱导、思维、认知和记忆等大脑活动起着指导作用。情感脑机接口(Affective Brain-Computer interface, aBCI)通过测量来自外周神经系统和中枢神经系统的信号，提取与用户情感状态相关的特征，并利用这些特征来适应人机交互(human-computer interaction, HCI)系统。脑电信号因其高时间分辨率和快速传输的优势在aBCI中得到了广泛的应用。aBCI使用心理学的理论和方法、神经科学和计算机科学的技术来诱导、测量和检测情绪状态，并应用由此产生的信息来改善人机交互。aBCI领域的研究集中在感知情绪状态、情绪过程建模、合成情感表达和行为，并基于情感背景改善人与机器之间的互动。',
            time: '2021-11-25',
            count: 3,
            sort: 1,
            menu: 2
          },
          {
            name: 'python',
            label: 'PYTHON',
            avatar: 'http://cdn.conghucai.site/java.png',
            intro: '这是一个专栏简介',
            time: '2021-11-25',
            count: 3,
            sort: 2,
            menu: 2
          },
          {
            name: 'golang',
            label: 'GOLANG',
            avatar: 'http://cdn.conghucai.site/java.png',
            intro: '这是一个专栏简介',
            time: '2021-11-25',
            count: 0,
            sort: 3,
            menu: 2
          },
          {
            name: 'javascript',
            label: 'JavaScript',
            avatar: 'http://cdn.conghucai.site/java.png',
            intro: '这是一个专栏简介',
            time: '2021-11-25',
            count: 3,
            sort: 1,
            menu: 3
          },
          {
            name: 'vue',
            label: 'VUE',
            avatar: 'http://cdn.conghucai.site/java.png',
            intro: '这是一个专栏简介',
            time: '2021-11-25',
            count: 3,
            sort: 2,
            menu: 3
          }
        ]
      }
    }
  },

  getUserApiMock: () => {
    return {
      code: permitCode,
      data: [
        {
          login: 'Itari',
          name: '碇',
          inter: 210,
          watched: 10,
          followers: 10,
          stared: 2,
          date: '2021-10-19',
          avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          bio: '别轻易倒下',
          email: 'itari@nerv.mail',
          home: 'https://gitee.com/conghucai'
        },
        {
          login: 'conghucai',
          name: 'ConghuCai',
          inter: 210,
          watched: 10,
          followers: 10,
          stared: 2,
          date: '2021-10-19',
          avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          bio: '别轻易倒下',
          email: 'itari@nerv.mail',
          home: 'https://gitee.com/conghucai'
        },
        {
          login: 'Itari',
          name: '碇',
          inter: 210,
          watched: 10,
          followers: 10,
          stared: 2,
          date: '2021-10-19',
          avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          bio: '别轻易倒下',
          email: 'itari@nerv.mail',
          home: 'https://gitee.com/conghucai'
        },
        {
          login: 'Itari',
          name: '碇',
          inter: 210,
          watched: 10,
          followers: 10,
          stared: 2,
          date: '2021-10-19',
          avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          bio: '别轻易倒下',
          email: 'itari@nerv.mail',
          home: 'https://gitee.com/conghucai'
        },
        {
          login: 'Itari',
          name: '碇',
          inter: 210,
          watched: 10,
          followers: 10,
          stared: 2,
          date: '2021-10-19',
          avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          bio: '别轻易倒下',
          email: 'itari@nerv.mail',
          home: 'https://gitee.com/conghucai'
        }
      ]
    }
  },

  getCommentApiMock: () => {
    return {
      code: permitCode,
      data: [
        {
          id: '1861ee3ab8c3402d9d03bafc37b8ea17',
          login: 'batu',
          name: '拔都',
          time: '2021-11-30 11:45:12',
          articleID: 'f2ab12575c774a778fd5f3063e6d5219',
          title: 'Linux安装nodejs+cnpm+vue+vue/cli，创建部署vue项目的步骤',
          comment: '我永远支持前后端分离！',
          avatar: 'https://gitee.com/assets/no_portrait.png'
        },
        {
          id: '1861ee3ab8c3402d9d03bafc37b8ea18',
          login: 'napoleon',
          name: '拿破仑',
          time: '2021-11-30 11:45:12',
          articleID: 'f2ab12575c774a778fd5f3063e6d5219',
          title: 'Linux安装nodejs+cnpm+vue+vue/cli，创建部署vue项目的步骤',
          comment: '我永远支持前后端分离！',
          avatar: 'https://gitee.com/assets/no_portrait.png'
        },
        {
          id: '1861ee3ab8c3402d9d03bafc37b8ea19',
          login: 'chinginskhan',
          name: '成吉思汗',
          time: '2021-11-30 11:45:12',
          articleID: 'f2ab12575c774a778fd5f3063e6d5219',
          title: 'Linux安装nodejs+cnpm+vue+vue/cli，创建部署vue项目的步骤',
          comment: '我永远支持前后端分离！',
          avatar: 'https://gitee.com/assets/no_portrait.png'
        },
        {
          id: '1861ee3ab8c3402d9d03bafc37b8ea20',
          login: 'salah-ad-din',
          name: '萨拉丁',
          time: '2021-11-30 11:45:12',
          articleID: 'f2ab12575c774a778fd5f3063e6d5219',
          title: 'Linux安装nodejs+cnpm+vue+vue/cli，创建部署vue项目的步骤',
          comment: '我永远支持前后端分离！',
          avatar: 'https://gitee.com/assets/no_portrait.png'
        },
        {
          id: '1861ee3ab8c3402d9d03bafc37b8ea21',
          login: 'yelvdashi',
          name: '耶律大石',
          time: '2021-11-30 11:45:12',
          articleID: 'f2ab12575c774a778fd5f3063e6d5219',
          title: 'Linux安装nodejs+cnpm+vue+vue/cli，创建部署vue项目的步骤',
          comment: '我永远支持前后端分离！',
          avatar: 'https://gitee.com/assets/no_portrait.png'
        }
      ]
    }
  },

  getMsgApiMock: () => {
    return {
      code: permitCode,
      data: [
        {
          id: '1861ee3ab8c3402d9d03bafc37b8ea17',
          login: 'batu',
          name: '拔都',
          time: '2021-11-30 11:45:12',
          msg: '全体目光向我看齐奥，我宣布个事儿',
          avatar: 'https://gitee.com/assets/no_portrait.png'
        },
        {
          id: '1861ee3ab8c3402d9d03bafc37b8ea18',
          login: 'napoleon',
          name: '拿破仑',
          time: '2021-11-30 11:45:12',
          msg: '全体目光向我看齐奥，我宣布个事儿',
          avatar: 'https://gitee.com/assets/no_portrait.png'
        },
        {
          id: '1861ee3ab8c3402d9d03bafc37b8ea19',
          login: 'chinginskhan',
          name: '成吉思汗',
          time: '2021-11-30 11:45:12',
          msg: '全体目光向我看齐奥，我宣布个事儿',
          avatar: 'https://gitee.com/assets/no_portrait.png'
        },
        {
          id: '1861ee3ab8c3402d9d03bafc37b8ea20',
          login: 'salah-ad-din',
          name: '萨拉丁',
          time: '2021-11-30 11:45:12',
          msg: '全体目光向我看齐奥，我宣布个事儿',
          avatar: 'https://gitee.com/assets/no_portrait.png'
        },
        {
          id: '1861ee3ab8c3402d9d03bafc37b8ea21',
          login: 'yelvdashi',
          name: '耶律大石',
          time: '2021-11-30 11:45:12',
          msg: '全体目光向我看齐奥，我宣布个事儿',
          avatar: 'https://gitee.com/assets/no_portrait.png'
        }
      ]
    }
  },

  getLinkApiMock: () => {
    return {
      code: permitCode,
      data: [
        {
          id: 1,
          name: 'gitee主页',
          url: 'https://gitee.com/conghucai'
        },
        {
          id: 2,
          name: 'github主页',
          url: 'https://github.com/ConghuCai'
        },
        {
          id: 3,
          name: 'LeetCode',
          url: 'https://leetcode-cn.com/problemset/all/'
        },
        {
          id: 4,
          name: 'CSDN博客',
          url: 'https://blog.csdn.net/qq_29586495'
        },
        {
          id: 5,
          name: '合肥工业大学',
          url: 'http://www.hfut.edu.cn/'
        }
      ]
    }
  },

  getAdminApiMock: () => {
    return {
      code: permitCode,
      data: [
        {
          name: '拔都',
          count: 3,
          time: '2021-10-01 00:00:00',
          avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          email: 'batu@email.mail'
        },
        {
          name: '拿破仑',
          count: 3,
          time: '2021-10-01 00:00:00',
          avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          email: 'napoleon@email.mail'
        },
        {
          name: '成吉思汗',
          count: 5,
          time: '2021-10-01 00:00:00',
          avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          email: 'chinginskhan@email.mail'
        },
        {
          name: '萨拉丁',
          count: 1,
          time: '2021-10-01 00:00:00',
          avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          email: 'salah@email.mail'
        },
        {
          name: '耶律大石',
          count: 0,
          time: '2021-10-01 00:00:00',
          avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          email: 'yelvdashi@email.mail'
        }
      ]
    }
  },

  getAboutApiMock: () => {
    return {
      code: 20000,
      data: {
        intro: '简介信息',
        urlGitee: '123',
        urlGithub: '123',
        introMain: '请访问主站',
        urlMain: '312'
      }
    }
  }
}
