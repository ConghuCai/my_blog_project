// mock数据模拟
// import Mock from 'mockjs'

export default {
  getStatisticalMenuData: () => {
    return {
      code: 20000,
      data: {
        title: {
          name: '蔡同学的小站',
          sname: 'CBlog',
          avatar: 'http://47.96.39.11:8080/image-base/myblog/home/logo.png'
        },
        menu: [
          // 定义一个json数据决定menu上显示的值
          {
            path: '/',
            name: 'main',
            label: '首页',
            icon: 's-home'
          },
          {
            label: '后端技术',
            icon: 's-operation',
            children: [
              {
                path: '/java',
                name: 'java',
                label: 'JAVA',
                icon: 'caret-right'
              },
              {
                path: '/python',
                name: 'python',
                label: 'PYTHON',
                icon: 'caret-right'
              },
              {
                path: '/golang',
                name: 'golang',
                label: 'GOLANG',
                icon: 'caret-right'
              },
              {
                path: '/cpp',
                name: 'cpp',
                label: 'C++',
                icon: 'caret-right'
              }
            ]
          },
          {
            label: '前端技术',
            icon: 's-marketing',
            children: [
              {
                path: '/javascript',
                name: 'javascript',
                label: 'JavaScript',
                icon: 'caret-right'
              },
              {
                path: '/jquery',
                name: 'jquery',
                label: 'JQuery',
                icon: 'caret-right'
              },
              {
                path: '/vue',
                name: 'vue',
                label: 'VUE',
                icon: 'caret-right'
              }
            ]
          },
          {
            label: '数据库',
            icon: 'coin',
            children: [
              {
                path: '/mysql',
                name: 'mysql',
                label: 'MySql',
                icon: 'caret-right'
              },
              {
                path: '/mssql',
                name: 'mssql',
                label: 'MSSql',
                icon: 'caret-right'
              },
              {
                path: '/redis',
                name: 'redis',
                label: 'Redis',
                icon: 'caret-right'
              }
            ]
          },
          {
            label: '计算机基础',
            icon: 'notebook-1',
            children: [
              {
                path: '/algorithm',
                name: 'algorithm',
                label: '数据结构和算法',
                icon: 'caret-right'
              },
              {
                path: '/os',
                name: 'os',
                label: '操作系统基础',
                icon: 'caret-right'
              },
              {
                path: '/linux',
                name: 'linux',
                label: 'Linux',
                icon: 'caret-right'
              },
              {
                path: '/network',
                name: 'network',
                label: '计算机网络',
                icon: 'caret-right'
              }
            ]
          },
          {
            label: '人工智能',
            icon: 'cpu',
            children: [
              {
                path: '/eeg',
                name: 'eeg',
                label: 'EEG情感计算',
                icon: 'caret-right'
              },
              {
                path: '/cv',
                name: 'cv',
                label: '计算机视觉',
                icon: 'caret-right'
              }
            ]
          },
          {
            label: '深度好文',
            icon: 'collection-tag',
            children: [
              {
                path: '/collection',
                name: 'collection',
                label: '博主收藏',
                icon: 'caret-right'
              }
            ]
          },
          {
            label: '杂项',
            icon: 'coordinate',
            children: [
              {
                path: '/movie',
                name: 'movie',
                label: '观影感受',
                icon: 'caret-right'
              },
              {
                path: '/music',
                name: 'music',
                label: '天涯何处觅知音',
                icon: 'caret-right'
              }
            ]
          }
        ]
      }
    }
  },

  getStatisticalOwnerData: () => {
    return {
      code: 20000,
      data: {
        ownerInfo: {
          name: '小蔡同学',
          access: '博主',
          introduction: '欢迎你！这是我的小站，博主目前在读研中，欢迎技术交流！',
          location: '合肥 · 合肥工业大学',
          avatar: 'http://47.96.39.11:8080/image-base/myblog/home/front.jpg'
        }
      }
    }
  },

  getStatisticalLeaveCommentData: () => {
    return {
      code: 20000,
      data: {
        leaveCommentData: [
          {
            userName: '小鲁',
            message: 'hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!',
            time: '2021-11-28 14:13:49',
            avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png'
          },
          {
            userName: '小宝',
            message: 'hello world!',
            time: '2021-11-28 14:13:49',
            avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png'
          },
          {
            userName: '小蓓',
            message: 'hello world!',
            time: '2021-11-17',
            avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png'
          },
          {
            userName: '小飞',
            message: 'hello world!',
            time: '2021-11-17',
            avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png'
          },
          {
            userName: '小帅',
            message: 'hello world!',
            time: '2021-11-17',
            avatar: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png'
          }
        ],
        leaveCommentLabel: {
          userName: '访客',
          message: '留言内容',
          time: '留言时间'
        }
      }
    }
  },

  getStatisticalTagInfo: () => {
    return {
      code: 20000,
      data: {
        tags: [
          {
            tagName: 'Spring',
            tagUrl: 'Spring',
            tagType: 'warning'
          },
          {
            tagName: 'SpringBoot',
            tagUrl: 'SpringBoot',
            tagType: 'danger'
          },
          {
            tagName: 'JavaScript',
            tagUrl: 'JavaScript',
            tagType: 'info'
          },
          {
            tagName: 'NodeJs',
            tagUrl: 'NodeJs',
            tagType: 'success'
          },
          {
            tagName: 'VueJs',
            tagUrl: 'VueJs',
            tagType: 'danger'
          },
          {
            tagName: 'Spring',
            tagUrl: 'Spring',
            tagType: 'warning'
          },
          {
            tagName: 'Spring',
            tagUrl: 'Spring',
            tagType: 'danger'
          }
        ]
      }
    }
  },

  getStatisticalLinkInfo: () => {
    return {
      code: 20000,
      data: {
        links: [
          {
            name: '百度一下',
            url: 'http://www.baidu.com'
          },
          {
            name: 'Gitee主页',
            url: 'http://www.github.com'
          },
          {
            name: 'Gitee主页',
            url: 'http://www.github.com'
          },
          {
            name: 'Github主页',
            url: 'http://www.github.com'
          },
          {
            name: 'Gitee主页',
            url: 'http://www.github.com'
          },
          {
            name: 'Gitee主页',
            url: 'http://www.github.com'
          },
          {
            name: 'Github主页',
            url: 'http://www.github.com'
          },
          {
            name: 'Gitee主页',
            url: 'http://www.github.com'
          },
          {
            name: 'Gitee主页',
            url: 'http://www.github.com'
          },
          {
            name: 'Github主页',
            url: 'http://www.github.com'
          },
          {
            name: 'Gitee主页',
            url: 'http://www.github.com'
          },
          {
            name: 'Gitee主页',
            url: 'http://www.github.com'
          },
          {
            name: 'Github主页',
            url: 'http://www.github.com'
          },
          {
            name: 'Gitee主页',
            url: 'http://www.github.com'
          },
          {
            name: 'Gitee主页',
            url: 'http://www.github.com'
          },
          {
            name: 'Github主页',
            url: 'http://www.github.com'
          },
          {
            name: 'Gitee主页',
            url: 'http://www.github.com'
          },
          {
            name: 'Gitee主页',
            url: 'http://www.github.com'
          },
          {
            name: 'Github主页',
            url: 'http://www.github.com'
          },
          {
            name: 'Gitee主页',
            url: 'http://www.github.com'
          },
          {
            name: 'Gitee主页',
            url: 'http://www.github.com'
          }
        ]
      }
    }
  },

  getCarousel: () => {
    return {
      code: 20000,
      data: {
        images: [
          {
            id: '1001',
            src: 'http://47.96.39.11:8080/image-base/myblog/article/1.jpg'
          },
          {
            id: '1002',
            src: 'http://47.96.39.11:8080/image-base/myblog/article/2.jpg'
          },
          {
            id: '1003',
            src: 'http://47.96.39.11:8080/image-base/myblog/article/3.jpg'
          },
          {
            id: '1004',
            src: 'http://47.96.39.11:8080/image-base/myblog/article/4.jpg'
          },
          {
            id: '1005',
            src: 'http://47.96.39.11:8080/image-base/myblog/article/5.jpg'
          }
        ]
      }
    }
  },

  getGithubAuthUrl(url) {
    return {
      code: 20000,
      data: {
        authorizeUrl: 'https://gitee.com/oauth/authorize?client_id=8872dbc653839fed4df573e31b2f0e03b9883141f3a3f8d2c5447f4ec09b6dd8&response_type=code&state=1&redirect_uri=' + url
      }
    }
  },

  getLoginInfo: (code) => {
    return {
      code: 20000,
      data: {
        loginInfo: {
          gists_url: 'https://gitee.com/api/v5/users/conghucai/gists{/gist_id}',
          repos_url: 'https://gitee.com/api/v5/users/conghucai/repos',
          following_url: 'https://gitee.com/api/v5/users/conghucai/following_url{/other_user}',
          bio: '别轻易倒下',
          created_at: '2021-10-19T15:16:53+08:00',
          remark: '',
          login: 'conghucai',
          type: 'User',
          blog: null,
          subscriptions_url: 'https://gitee.com/api/v5/users/conghucai/subscriptions',
          weibo: null,
          updated_at: '2021-11-18T20:31:29+08:00',
          id: 9887341,
          public_repos: 4,
          email: null,
          organizations_url: 'https://gitee.com/api/v5/users/conghucai/orgs',
          starred_url: 'https://gitee.com/api/v5/users/conghucai/starred{/owner}{/repo}',
          followers_url: 'https://gitee.com/api/v5/users/conghucai/followers',
          public_gists: 0,
          url: 'https://gitee.com/api/v5/users/conghucai',
          received_events_url: 'https://gitee.com/api/v5/users/conghucai/received_events',
          watched: 6,
          followers: 0,
          avatar_url: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          events_url: 'https://gitee.com/api/v5/users/conghucai/events{/privacy}',
          html_url: 'https://gitee.com/conghucai',
          following: 0,
          name: 'ConghuCai',
          stared: 1
        }
      }
    }
  },

  getUserInfo: () => {
    return {
      code: 20000,
      data: {
        userInfo: {
          bio: '别轻易倒下',
          created_at: '2021-10-19T15:16:53+08:00',
          login: 'conghucai',
          email: null,
          watched: 6,
          followers: 0,
          avatar_url: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
          html_url: 'https://gitee.com/conghucai',
          name: 'ConghuCai',
          stared: 1
        }
      }
    }
  },

  // url:/api/message/add
  messageAddRes: () => {
    return {
      code: 20000,
      data: {
        addRes: 'success'
      }
    }
  },

  // url:/api/search/XXX
  getArticleRes: () => {
    return {
      code: 20000,
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
            tag: ['spring', 'springboot', 'vue', 'redis', 'spring', 'springboot', 'vue', 'redis', 'spring', 'springboot', 'vue', 'redis'],
            tagType: ['info', 'warning', 'success', 'danger', 'info', 'warning', 'success', 'danger', 'info', 'warning', 'success', 'danger'],
            type: 'Java',
            icon: 'mouse'
          },
          {
            id: '1002',
            title: '2021-11-14 记录：Java连接远程Redis的报错信息和解决办法',
            intro: 'Redis刚刚入门，用Java程序远程连接Redis，报了很多错误，许久才连上数据库。记录一下这些错误信息和引发原因、解决办法。',
            clickCount: 213,
            likeCount: 10,
            commentCount: 8,
            shareCount: 10,
            time: '2021-11-13 13:35:30',
            tag: ['spring', 'springboot', 'vue', 'redis'],
            tagType: ['info', 'warning', 'success', 'danger'],
            type: 'Java',
            icon: 'sunny'
          },
          {
            id: '1003',
            title: '2021-11-15 记录：Java连接远程Redis的报错信息和解决办法',
            intro: 'Redis刚刚入门，用Java程序远程连接Redis，报了很多错误，许久才连上数据库。记录一下这些错误信息和引发原因、解决办法。',
            clickCount: 213,
            likeCount: 10,
            commentCount: 8,
            shareCount: 10,
            time: '2021-11-13 13:35:30',
            tag: ['spring', 'springboot', 'vue', 'sql', 'mvc'],
            tagType: ['info', 'warning', 'success', 'danger'],
            type: 'Java',
            icon: 'place'
          },
          {
            id: '1004',
            title: '2021-11-16 记录：Java连接远程Redis的报错信息和解决办法',
            intro: 'Redis刚刚入门，用Java程序远程连接Redis，报了很多错误，许久才连上数据库。记录一下这些错误信息和引发原因、解决办法。',
            clickCount: 213,
            likeCount: 10,
            commentCount: 8,
            shareCount: 10,
            time: '2021-11-13 13:35:30',
            tag: ['spring', 'springboot', 'vue', 'restful'],
            tagType: ['info', 'warning', 'success', 'danger'],
            type: 'Java',
            icon: 'discover'
          },
          {
            id: '1005',
            title: '2021-11-17 记录：Java连接远程Redis的报错信息和解决办法',
            intro: 'Redis刚刚入门，用Java程序远程连接Redis，报了很多错误，许久才连上数据库。记录一下这些错误信息和引发原因、解决办法。Redis刚刚入门，用Java程序远程连接Redis，报了很多错误，许久才连上数据库。记录一下这些错误信息和引发原因、解决办法。',
            clickCount: 213,
            likeCount: 10,
            commentCount: 8,
            shareCount: 10,
            time: '2021-11-13 13:35:30',
            tag: ['spring', 'springboot', 'vue', 'redis'],
            tagType: ['info', 'warning', 'success', 'danger'],
            type: 'Java',
            icon: 'trophy'
          }
        ],
        totalItem: 32,
        pageSize: 5
      }
    }
  },

  getArticleRes1: () => {
    return {
      code: 20000,
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
            tag: ['spring', 'springboot', 'vue', 'redis', 'spring', 'springboot', 'vue', 'redis', 'spring', 'springboot', 'vue', 'redis'],
            tagType: ['info', 'warning', 'success', 'danger', 'info', 'warning', 'success', 'danger', 'info', 'warning', 'success', 'danger'],
            type: 'Java',
            icon: 'mouse'
          },
          {
            id: '1002',
            title: '2021-11-14 记录：Java连接远程Redis的报错信息和解决办法',
            intro: 'Redis刚刚入门，用Java程序远程连接Redis，报了很多错误，许久才连上数据库。记录一下这些错误信息和引发原因、解决办法。',
            clickCount: 213,
            likeCount: 10,
            commentCount: 8,
            shareCount: 10,
            time: '2021-11-13 13:35:30',
            tag: ['spring', 'springboot', 'vue', 'redis'],
            tagType: ['info', 'warning', 'success', 'danger'],
            type: 'Java',
            icon: 'sunny'
          }
        ],
        totalItem: 32,
        pageSize: 5
      }
    }
  },

  // url:/api/getArticle/xxx
  getArticle: (id) => {
    return {
      code: 20000,
      data: {
        articlesInfo: {
          id: '1001',
          title: '2021-11-17 记录：Java连接远程Redis的报错信息和解决办法',
          intro: 'Redis刚刚入门，用Java程序远程连接Redis，报了很多错误，许久才连上数据库。记录一下这些错误信息和引发原因、解决办法。Redis刚刚入门，用Java程序远程连接Redis，报了很多错误，许久才连上数据库。记录一下这些错误信息和引发原因、解决办法。',
          clickCount: 213,
          likeCount: 10,
          commentCount: 8,
          shareCount: 10,
          md: '---\r\ntypora-root-url: md_pic\r\n---\r\n\r\n# CRM开发日志\r\n\r\n## 10/18\t[Monday]  \r\n\r\n1. 【知识储备】**模板设计模式**：模板模式是GoF23种设计模式的其中一种，它的功能是将程序执行的流程或者算法的骨架搭建出来，里面具体的实现方式交给方法去做。\r\n\r\n   * 在Servlet继承体系中就有这种设计模式，Servlet父类将service方法执行流程的骨架搭建出来（判断是method是post还是get的流程），剩下的交给具体方法去做（doPost、doGet方法）。\r\n   * 【实际开发】在实际开发中，如果让一个单一的CURD功能对应到一个servlet，会导致servlet过多，相互之间的功能交叉，导致系统冗余、代码复用性不好。因此会**将一个模块都交给一个servlet去做**，servlet将这个模块的首先需要做的统一的业务流程搭建好，剩下不同的业务流程交给不同的方法去做。即：**模板设计模式**。\r\n\r\n2. 【数据库-表设计】非主键字段一般不会用int、double、datetime这些数据类型，而是**统一使用string/varchar**，因为操作方便。外键不会真的在数据库做出来，因为在查询时会导致多表联查，浪费系统资源，**外键关系只是项目编写时逻辑上的，而非底层物理上的**。\r\n\r\n3. 【数据库-表设计】主键字段的设计-UUID：\r\n\r\n   * 一般不会采用自增的int类型数据，因为这种自增方案相当于每次在插入数据时，都会在全表范围内搜寻最大的ID值（O(logn)操作），再进行插入操作，效率低下。\r\n   * 主键选择UUID字符串来保证其唯一性。因为机器生成的UUID是全球唯一的。随机数怕撞车、时间戳怕高并发，UUID则不存在这些问题。\r\n   * UUID由10字符+”-“+4字符+”-“+4字符+”-“+4字符+”-“+10字符组成：00000000-0000-0000-0000-000000000000，在使用时会str.placeAll()去掉其”-“，节省不必要的存储花销。\r\n\r\n4. 【javase-多线程】**ThreadLocal类管理Connection对象**，避免多线程访问Connection对象的安全问题：\r\n\r\n   * 什么是ThreadLocal类：在并发编程的时候，如果各个线程都在操作同一个变量，显然是不行的，这会引发线程安全问题。那么在有一种情况之下，我们需要满足这样一个条件：**变量是同一个，但是每个线程都只是使用同一个变量的一个新的副本**，在对这个变量操作时，只是维护好自己那个版本就好，这样就不存在线程安全问题了。\r\n\r\n   * ThreadLocal多线程的特点：**被共享的那个变量其实只有一个，但是大家都持有一个副本**，都只是对这个副本进行操作，变量本身存的值没有什么意义，因为大家用的都是副本。\r\n\r\n   * ThreadLocal管理Connection对象：\r\n\r\n     * ```java\r\n       public class ConnectionUtil {\r\n           private static ThreadLocal<Connection> tl = new ThreadLocal<Connection>();\r\n           private static Connection initConn = null;\r\n           static {//初始化initConn，这是一个单例的对象，只有一个\r\n               try {\r\n                   initConn = DriverManager.getConnection("***");\r\n               } catch (SQLException e) {\r\n                   e.printStackTrace();\r\n               }\r\n           }\r\n       \r\n           public Connection getConn() {\r\n               Connection c = tl.get();\t//ThreadLocal的get方法拿副本\r\n               if(null == c) tl.set(initConn);\t//如果conn对象还没放进ThreadLocal中，就把它放进去(set)\r\n               return tl.get();\r\n           }\r\n           \r\n           public void close(Connection conn){\r\n               if(conn != null ){\r\n                   conn.close();\r\n                   tl.remove();\t//一定要手动remove！非常重要！\r\n               }\r\n           }\r\n       }\r\n       ```\r\n\r\n       这样大家拿到的都是同一个连接对象的副本，只有一个连接对象但是每个连接都是新的。配合单例对象，很好地单例对象的解决多线程安全问题。\r\n\r\n   * ThreadLocal原理简述：\r\n\r\n     * ThreadLocal是Java中所提供的**线程本地存储机制**，可以利用这个机制**将线程共享的数据存储在线程内部**。线程可以在任何时刻和任意方法中获取存储的数据。其提供的方法包括get set remove\r\n     * **ThreadLocal底层通过ThreadLocalMap来实现**，每个Thread对象都存在一个ThreadLocalMap，其中**Map的key为ThreadLocal**，val为需要缓存的值。\r\n     * 在**线程池**中的线程由于不会被回收，在这种线程中**使用ThreadLoca会造成内存泄漏**。当ThreadLocal对象使用完成后，应该把设置的key、val也就是Entru对象回收掉，但是线程池中线程不会被回收，而线程对象通过强引用指向ThreadLocalMap，ThreadLocalMap也通过强引用指向Entry对象，线程不被回收，Entry也一直不被回收，从而造成内存泄漏问题。解决方法是在**使用完ThreadLocal对象后，手动调用remove方法将其手动清除，保证线程是纯净的**。\r\n     * ThreadLocal**经典应用场景就是连接管理**，多个线程使用同一个连接对象，线程之间不共享同一个对象。\r\n\r\n5. 【代理模式/单一职责开发原则】开发过程中，持久层使用动态代理访问业务层，并进行事务操作：业**务处理不应该混杂持久层的税务操作，只应该关注其业务逻辑本身**（单一职责开发原则）。因此我们需要将业务逻辑中的**事务操作部分抽象出来，而使用代理类去访问不同的业务处理类**（代理模式）。而业务处理多种多样，如何才能用一个方法去代理所有的业务逻辑？——动态代理。\r\n\r\n   ```java\r\n   public class TransactionInvocationHandler implements InvocationHandler {\r\n       private Object target;\r\n   \r\n       public TransactionInvocationHandler(Object target) {\r\n           this.target = target;   //目标对象\r\n       }\r\n   \r\n       @Override\r\n       public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {\r\n           SqlSession sqlSession = null;\r\n           Object obj = null;\r\n           try{\r\n               sqlSession = SqlSessionUtil.getSqlSession();\r\n               //调用目标对象的方法，处理业务逻辑\r\n               obj = method.invoke(target, args);\r\n               //调用完成后提交事务\r\n               sqlSession.commit();\r\n   \r\n           }catch (Exception e){\r\n               if(sqlSession != null)\r\n                   sqlSession.rollback();\r\n               e.printStackTrace();\r\n           }finally {\r\n               SqlSessionUtil.close(sqlSession);\r\n           }\r\n   \r\n           //返回处理结果\r\n           return obj;\r\n       }\r\n   \r\n       public Object getProxy(){\r\n           //返回动态代理对象\r\n           return Proxy.newProxyInstance(target.getClass().getClassLoader(), target.getClass().getInterfaces(), this);\r\n       }\r\n   }\r\n   ```\r\n\r\n   * 业务处理过程中，Dao层访问数据库，Service层调用Dao层实现类处理业务，使用Service层对象时需要使用动态代理类。\r\n\r\n     ```java\r\n     /**\r\n     * 一个业务处理实现类的设计，主要是调用dao层对象完成的。\r\n     */\r\n     public class StudentServiceImpl implements StudentService {\r\n         private StudentDao studentDao = new StudentDaoImpl();\r\n     \r\n         @Override\r\n         public Student getById(String id) {\r\n             Student s = studentDao.getById(id);\r\n             return s;\r\n         }\r\n     \r\n         @Override\r\n         public void save(Student s) {\r\n             studentDao.save(s);\r\n         }\r\n     }\r\n     \r\n     \r\n     /**\r\n     * 使用动态代理访问业务层实现类对象\r\n     */\r\n     public class Test1 {\r\n     \r\n         public static void main(String[] args) {\r\n             StudentService ss = (StudentService) ServiceFactory.getService(new StudentServiceImpl());\t//使用动态代理访问业务层对象，完成业务提交\r\n     \r\n             Student s = ss.getById("A0001");\r\n             System.out.println(s);\r\n     \r\n         }\r\n     }\r\n     ```\r\n\r\n   * 重复一遍：在业务层使用动态代理是为了**将事务管理从业务层中抽取出来**，符合单一业务原则和MVC架构原则。\r\n   \r\n6. 【MyBatis】使用MyBatis对dao层动态代理的支持：\r\n\r\n   * 在Mapper.xml中将namespace设置为UserDao.java接口的全限定名\r\n   * 将Mapper.xml中statement的id和UserDao.java接口的方法名保持一致。\r\n   * 将Mapper.xml中statement的parameterType和UserDao.java接口的方法输入参数类型保持一致\r\n   * 将Mapper.xml中statement的resultType和UserDao.java接口的方法输出结果类型保持一致\r\n   * 注意结合业务层动态代理提交事务\r\n\r\n\r\n\r\n## 10/19 [Tuesday]\t\r\n\r\n1. 【MyBatis】resultType，查询返回多个数值的情况下，有两种设置方案：\r\n\r\n   * resultType = domian对象，用domian对象接收多个值，注意对象的属性名必须和查询到的列表名一模一样。\r\n   * resultType = map，用HashMap/Map接收，得到的是一个Map集合的List，List的每一个Map是一列结果，Map的key是列名，value是列值。这种情况主要用于domian对象接受不了的情况。比如：带聚合函数的分组查询多表联查这种。用于需求量不高的情况，做一个临时救火的角色。\r\n   * resultType = vo对象。vo即Value Object，作用是把某个指定的所有数据封装起来。它存在的意义就是封装数据，针对一些前端需求量较高、需要反复用这个对象封装数据的情况。\r\n\r\n2. 【git命令】 在需要上传仓库的【工作区】的根目录下使用git命令\r\n\r\n   * git init\t初始化本地库、暂存区\r\n\r\n   * git config   --global user.name     系统用户级别设置签名 (项目级别不带--global)\r\n\r\n     git config   --global user.email\r\n\r\n   * git add X    将X文件/文件夹上传暂存区，*\\\\.\\A代表上传工作区所有文件\r\n   \r\n   * git commit   暂存区提交本地仓库\r\n   \r\n   * git remote add name url   添加远程仓库（注意url在windows系统下不要ctrl v 不然会有异常符号被写进去）\r\n   \r\n   * git push origin:master   推送到远程仓库origin下的master分支下\r\n   \r\n3. 【数据库-char和varchar】在字段长度已经完全确定的情况下，使用char效率远高于varchar。比如常用的两种日期字符串：yyyy-mm-dd(10); yyyy-mm-dd hh:mm:ss(19)就只需要使用char就行。\r\n\r\n\r\n\r\n## 10/20 [Wednesday]\r\n\r\n1. MVC架构之间各种角色的配合：\r\n\r\n\t* 对于前端发送来的请求，Controller进行接收和判断请求类型，并调用相应的Model进行业务处理。\r\n\t* Model的业务处理主要注重业务处理的逻辑，需要涉及的数据库交互交给Dao来实现。\r\n\t* Dao提供操作数据库接口。\r\n\t* 根据Model业务处理的结果，View生成需要展示的内容，由Controller响应给前端用户。\r\n2. Dao层只定义接口。\r\n    * 使用MyBatis框架提供的动态代理机制，通过Dao定义的接口和MapperXml文件，得到Dao接口的实现对象。\r\n3. Service层的类全部定义成接口的实现类\r\n    * 由于涉及到了数据库操作，因此需要在业务处理结束后进行数据库的commit或异常的rollback。\r\n    * commit和rollback操作本身不是Service层需要关系的事情。\r\n    * 因此需要为Service层对象提供动态代理对象，由代理对象来完成commit和rollback的功能增强。\r\n    * 项目使用jdk动态代理，这就要求Service层对象必须实现接口。\r\n\r\n## 10/21 [Thursday]\r\n\r\n1. 【jsp和session作用域】JSP会自动为接入进来的浏览器分配session对象，因此在进行是否登录的filter时不应该判断session是否为空，而应该以session字段里面的字段是否存在来判断。\r\n2. 【mvc模式】对于domian不存在，但是在数据库、dao、controller、service、前端之间传递需求量特别大的数据对象，一般不用map封装，定义单独的类，即vo对象。\r\n\r\n## 10/22 [Friday]\r\n\r\n1. 【servlet】接收前端发来的同一个参数名下的多个参数，使用req.getParameterValues("ids");\r\n\r\n2. 【数据库】由后端来完成级联删除操作。先删子表记录，再删主表记录。\r\n\r\n   * 由于可能涉及多个更新操作，所以再删除之前先查一下有多少记录是需要删除的，删完之后做一个比对，确保需要做的操作都做了。\r\n\r\n3. 【Jquery】对于动态生成的元素，无法用原生js对其绑定事件的。使用\r\n\r\n   `$(需要绑定元素的有效的外层元素).on(绑定事件的方式,需要绑定的元素的jquery对象,回调函数)`\r\n\r\n4. 【Jquery】\\<textarea>标签虽然内容卸载标签对之间，没有value属性，但是其仍然属于表单标签，使用jq的.val()取值，而非.html()。\r\n\r\n',
          time: '2021-11-23 11:12:13',
          author: 'ConghuCai',
          avatar_url: 'http://47.96.39.11:8080/image-base/myblog/home/front.jpg',
          type: 'Java',
          url_name: 'java',
          tags: ['Mybatis', 'Sql', 'XXX', 'LocalThread'],
          tagType: ['info', 'warning', 'success', 'danger']
        }
      }
    }
  },

  commentAddRes: () => {
    return {
      code: 20000,
      data: {
        res: 'success'
      }
    }
  },

  getCommentsList: () => {
    return {
      code: 20000,
      data: {
        comments: [
          {
            user: 'conghucai',
            avatar_url: 'http://47.96.39.11:8080/image-base/myblog/home/front.jpg',
            content: '冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲',
            time: '2021-11-23'
          },
          {
            user: 'conghucai',
            avatar_url: 'https://portrait.gitee.com/uploads/avatars/user/3295/9887341_conghucai_1634639623.png',
            content: '冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲',
            time: '2021-11-23'
          },
          {
            user: 'conghucai',
            avatar_url: 'http://47.96.39.11:8080/image-base/myblog/home/zhangteng.jpg',
            content: '冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲',
            time: '2021-11-23'
          },
          {
            user: 'conghucai',
            avatar_url: 'http://47.96.39.11:8080/image-base/myblog/home/front.jpg',
            content: '冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲',
            time: '2021-11-23'
          },
          {
            user: 'conghucai',
            avatar_url: 'http://47.96.39.11:8080/image-base/myblog/home/front.jpg',
            content: '冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲冲',
            time: '2021-11-23'
          }
        ],
        pageSize: 4
      }
    }
  },

  getCategoryInfo: () => {
    return {
      code: 20000,
      data: {
        categoryInfo: {
          name: 'Java',
          time: '2021-11-25',
          avatar: 'http://47.96.39.11:8080/image-base/myblog/category/java.png',
          intro: 'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程。',
          count: 5
        }
      }
    }
  },

  getAboutInfo: () => {
    return {
      code: 20000,
      data: {
        aboutInfo: {
          intro: '这是一个私人博客项目，项目采用前后端分离开发方法，后端使用微服务框架开发完成。技术栈包括SpringBoot，MyBatis，MySql，Redis，Tomcat，VueJs，NodeJs等。并在开发中融入了REST架构、Oauth2授权等技术架构。<br>网站采用前后端分离+微服务框架的设计理念，前后端的服务器和代码完全分离，后端采用Springboot框架实现微服务设计。<br>代码计划在Github和Gitee平台上开源。',
          urlGitee: 'https://gitee.com/conghucai',
          urlGithub: 'https://gitee.com/conghucai'
        }
      }
    }
  }

}
