import { enquireScreen } from 'enquire-js';
import React, { PureComponent } from 'react';
import { Balloon, Button, Icon } from '@icedesign/base';
import PropTypes from 'prop-types';
import FoundationSymbol from 'foundation-symbol';
import IceImg from '@icedesign/img';
import { Link } from 'react-router-dom';
import './index.scss';
import cx from 'classnames';
import CustomIcon from "../../utils/CustomIcon";

export default class TopBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      drawerIcon: props.drawerIcon
    };
  }


  componentWillReceiveProps = (nextProps) => {
      this.setState({drawerIcon: nextProps.drawerIcon});
  };


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

  onToggleDrawer = () => {
    if(this.props.onToggleDrawer){
      this.props.onToggleDrawer();
    }
  };

  render() {
    const { isMobile } = this.state;
    const { title, buttonText, extraBefore, extraAfter, style } = this.props;

    return (
      <div style={isMobile ? { ...styles.mobileContainer, ...style } : { ...styles.container, ...style }}
           className="top-bar-container">
        <span>
          <span className={cx({
            'hide': this.props.hasDrawer !== true,
          })}>
            {isMobile ? <CustomIcon type={this.state.drawerIcon} onClick={() => this.onToggleDrawer()} className='top-bar-icon'/> : ''}
          </span>
        </span>
        <span style={isMobile ? { ...styles.mobileTitle } : { ...styles.title }} className="top-bar-title"
              title={this.props.title}>
          {this.props.title}<span></span>
        </span>
        <span>
          <Balloon
            triggerType={isMobile ? `click`: `hover`}
            trigger={
              <div
                className="ice-design-header-userpannel"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 12,
                }}
              >
                <IceImg
                  height={40}
                  width={40}
                  src={require('./images/avatar.png')}
                  className="user-avatar"
                />
                <div className="user-profile">
                    <span className="user-name" style={{ fontSize: '13px' }}>
                      淘小宝
                    </span>
                  <br/>
                  <span className="user-department">技术部</span>
                </div>
                <Icon
                  type="arrow-down-filling"
                  size="xxs"
                  className="icon-down"
                />
              </div>
            }
            closable={false}
            className="user-profile-menu"
          >
              <ul>
                <li className="user-profile-menu-item">
                  <Link to="/">
                    <FoundationSymbol type="person" size="small"/>
                    我的主页
                  </Link>
                </li>
                <li className="user-profile-menu-item">
                  <Link to="/">
                    <FoundationSymbol type="repair" size="small"/>
                    设置
                  </Link>
                </li>
                <li className="user-profile-menu-item">
                  <Link to="/">
                    <FoundationSymbol type="compass" size="small"/>
                    退出
                  </Link>
                </li>
              </ul>
            </Balloon>
        </span>
        {/*{extraBefore || <div style={styles.title}>{title || ''}</div>}*/}

        {/*{extraAfter || (*/}
        {/*<div style={styles.buttons}>*/}
        {/*{buttonText ? (*/}
        {/*<Button size="large" type="primary">*/}
        {/*{buttonText}*/}
        {/*</Button>*/}
        {/*) : null}*/}
        {/*</div>*/}
        {/*)}*/}
      </div>
    );
  }
}

TopBar.propTypes = {
  extraBefore: PropTypes.element,
  extraAfter: PropTypes.element,
  style: PropTypes.object,
};

TopBar.defaultProps = {
  extraAfter: null,
  extraBefore: null,
  style: {},
};

const styles = {
  container: {
    position: 'fixed',
    top: '0',
    left: '240px',
    right: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60px',
    padding: '0 20px',
    zIndex: '99',
    background: '#fff',
    boxShadow: 'rgba(0, 0, 0, 0.2) 2px 0px 4px',
  },
  mobileContainer: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60px',
    padding: '0 20px',
    zIndex: '99',
    background: '#fff',
    boxShadow: 'rgba(0, 0, 0, 0.2) 2px 0px 4px',
  },
  title: {
    position: 'absolute',
    left: '50%',
    width: '200px',
    marginLeft: '-100px',
    textAlign: 'center',
  },
  mobileTitle: {
    position: 'absolute',
    left: '50%',
    width: '100px',
    marginLeft: '-50px',
    textAlign: 'center',
  },
};
