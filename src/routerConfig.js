// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BasicLayout from './layouts/BasicLayout';
import Home from './pages/Home';
import PayBill from './pages/PayBill';
import BalanceCharge from './pages/BalanceCharge';
import BalanceConsume from './pages/BalanceConsume';
import NumBill from './pages/NumBill';
import ReceiveDevice from './pages/ReceiveDevice';
import PayReport from './pages/PayReport';
import MemberReport from './pages/MemberReport';
import BalanceReport from './pages/BalanceReport';
import CardReport from './pages/CardReport';
import FanReport from './pages/FanReport';
import AchieveInfo from './pages/AchieveInfo';
import WxNotice from './pages/WxNotice';
import ResultBill from './pages/ResultBill';
import CashierBill from './pages/CashierBill';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/balancereport',
    layout: BasicLayout,
    title: '储值日报',
    component: BalanceReport,
  },
  {
    path: '/payreport',
    layout: BasicLayout,
    title: '支付日报',
    component: PayReport,
  },
  {
    path: '/balancecharge',
    layout: BasicLayout,
    title: '储值充值',
    component: BalanceCharge,
  },
  {
    path: '/balanceconsume',
    layout: BasicLayout,
    title: '储值消费',
    component: BalanceConsume,
  },
  {
    path: '/numbill',
    layout: BasicLayout,
    title: '计次账单',
    component: NumBill,
  },
  {
    path: '/paybill',
    layout: BasicLayout,
    title: '支付账单',
    component: PayBill,
  },
  {
    path: '/receivedevice',
    layout: BasicLayout,
    title: '收款设备',
    component: ReceiveDevice,
  },
  {
    path: '/',
    layout: BasicLayout,
    title: '首页',
    component: Home,
  },
  {
    path: '/memberreport',
    layout: BasicLayout,
    title: '会员日报',
    component: MemberReport,
  },
  {
    path: '/cardreport',
    layout: BasicLayout,
    title: '卡券日报',
    component: CardReport,
  },
  {
    path: '/fanreport',
    layout: BasicLayout,
    title: '粉丝日报',
    component: FanReport,
  },
  {
    path: '/achieveinfo',
    layout: BasicLayout,
    title: '绩效信息',
    component: AchieveInfo,
  },
  {
    path: '/wxnotice',
    layout: BasicLayout,
    title: '微信通知开关',
    component: WxNotice,
  },
  {
    path: '/resultbill',
    layout: BasicLayout,
    title: '结算单',
    component: ResultBill,
  },
  {
    path: '/cashierbill',
    layout: BasicLayout,
    title: '收银账单',
    component: CashierBill,
  },
  {
    path: '*',
    layout: BasicLayout,
    component: NotFound,
  },
];

export default routerConfig;
