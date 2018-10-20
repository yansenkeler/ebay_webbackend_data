import {enquireScreen} from "enquire-js";
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import CustomIcon from "../../../../utils/CustomIcon";
import {Link, withRouter} from "react-router-dom";

const list = [
  {
    title: '支付账单',
    img: 'zhifuzhangdan',
    url: 'paybill',
  },
  {
    title: '储值账单',
    img: 'chuzhiqia',
    url: 'balancecharge',
  },
  {
    title: '储值消费',
    img: 'xiaofei',
    url: 'balanceconsume',
  },
  {
    title: '计次账单',
    img: 'edit_fill',
    url: 'numbill',
  },
  {
    title: '收款设备',
    img: 'POS',
    url: 'receivedevice',
  },
  {
    title: '支付日报',
    img: 'ribao',
    url: 'payreport',
  },
  {
    title: '会员日报',
    img: 'ribao',
    url: 'memberreport',
  },
  {
    title: '储值日报',
    img: 'ribao',
    url: 'balancereport',
  },
  {
    title: '卡券日报',
    img: 'ribao',
    url: 'cardreport',
  },
  {
    title: '粉丝日报',
    img: 'ribao',
    url: 'fanreport',
  },
  {
    title: '绩效信息',
    img: 'jixiao',
    url: 'achieveinfo',
  },
  {
    title: '微信通知开关',
    img: 'tongzhikaiguan',
    url: 'wxnotice',
  },
  {
    title: '结算单',
    img: 'jiesuandanguanli',
    url: 'resultbill',
  },
  {
    title: '收银账单',
    img: 'shouyindan',
    url: 'cashierbill',
  },
];

@withRouter
export default class EntryCard extends Component {
  static displayName = 'EntryCard';

  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    };
  }

  componentDidMount() {
    this.enquireScreenRegister();
  }

  enquireScreenRegister = () => {
    const mediaCondition = 'only screen and (max-width: 720px)';

    enquireScreen((mobile) => {
      this.setState({
        isMobile: mobile,
      });
    }, mediaCondition);
  };

  render() {
    const {isMobile} = this.state;
    return (
      <IceContainer
        className="entry-card"
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginBottom: '0'
        }}
      >
        {list.map((item, index) => {
          let url = this.props.match.url + item.url;
          return (
            <div key={index} style={isMobile ? styles.itemMobile : styles.item}>
              <Link to={url}>
                <CustomIcon type={item.img}/>
                {/*<img src={item.img} style={styles.cover} alt={item.title} />*/}
                <div style={styles.title}>{item.title}</div>
              </Link>
            </div>
          );
        })}
      </IceContainer>
    );
  }
}

const styles = {
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '70px',
    margin: '10px 40px',
    textAlign: 'center'
  },
  itemMobile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '33%',
    margin: '20px 0',
    textAlign: 'center'
  },
  link: {
    textDecoration: 'none',
    color: '#333',
  },
  cover: {
    width: '70px',
    height: '70px',
  },
  title: {
    marginTop: '12px',
    fontSize: '12px',
    textAlign: 'center',
  },
};
