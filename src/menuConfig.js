// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '帮助',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

// ICON 配置： https://ice.alibaba-inc.com/component/foundationsymbol
const asideMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: 'shouye1-copy',
  },
  {
    name: '支付账单',
    path: '/paybill',
    icon: 'zhifuzhangdan',
  },
  {
    name: '储值账单',
    path: '/balancecharge',
    icon: 'chuzhiqia',
    // children: [
    //   {
    //     name: "储值充值",
    //     path: '/balancecharge'
    //   }
    // ]
  },
  {
    name: '储值消费',
    path: '/balanceconsume',
    icon: 'xiaofei',
  },
  {
    name: '计次账单',
    path: '/numbill',
    icon: 'edit_fill',
  },
  {
    name: '收款设备',
    path: '/receivedevice',
    icon: 'POS',
  },
  {
    name: '支付日报',
    path: '/payreport',
    icon: 'ribao',
  },
  {
    name: '会员日报',
    path: '/memberreport',
    icon: 'ribao',
  },
  {
    name: '储值日报',
    path: '/balancereport',
    icon: 'ribao',
  },
  {
    name: '卡券日报',
    path: '/cardreport',
    icon: 'ribao',
  },
  {
    name: '粉丝日报',
    path: '/fanreport',
    icon: 'ribao',
  },
  {
    name: '绩效信息',
    path: '/achieveinfo',
    icon: 'jixiao',
  },
  {
    name: '微信通知开关',
    path: '/wxnotice',
    icon: 'tongzhikaiguan',
  },
  {
    name: '结算单',
    path: '/resultbill',
    icon: 'jiesuandanguanli',
  },
  {
    name: '收银账单',
    path: '/cashierbill',
    icon: 'shouyindan',
  },
];

export { headerMenuConfig, asideMenuConfig };
