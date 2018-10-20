/* eslint no-undef:0, no-unused-expressions:0, array-callback-return:0 */
import { enquireScreen } from 'enquire-js';
import React, { Component } from 'react';
import Menu, { Item as MenuItem, SubMenu } from '@icedesign/menu';
import { withRouter, Link } from 'react-router-dom';
import FoundationSymbol from 'foundation-symbol';
import { asideMenuConfig } from '../../menuConfig';
import cx from 'classnames';
import CustomIcon from "../../utils/CustomIcon";
import './index.scss';

@withRouter
export default class BasicLayout extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
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
    const { isMobile } = this.state;
    const { location, style } = this.props;
    const { pathname } = location;

    return (
      <Menu mode="inline" selectedKeys={[pathname]} className={cx({
        'ice-menu-custom': true,
        'menu-not-mobile': !isMobile,
        'menu-is-mobile': isMobile,
      })}>
        {Array.isArray(asideMenuConfig) &&
        asideMenuConfig.length > 0 &&
        asideMenuConfig.map((nav, index) => {
          if (nav.children && nav.children.length > 0) {
            return (
              <SubMenu
                className="layout-menu-sub"
                key={index}
                title={
                  <span>
                    {nav.icon ? <CustomIcon size="medium" type={nav.icon} style={styles.customIcon}/> : null}
                    <span className="ice-menu-collapse-hide">
                      {nav.name}
                    </span>
                  </span>
                }
              >
                {nav.children.map((item) => {
                  const linkProps = {};
                  if (item.newWindow) {
                    linkProps.href = item.path;
                    linkProps.target = '_blank';
                  } else if (item.external) {
                    linkProps.href = item.path;
                  } else {
                    linkProps.to = item.path;
                  }
                  return (
                    <MenuItem key={item.path} className="layout-menu-sub-item">
                      <Link {...linkProps}>{item.name}</Link>
                    </MenuItem>
                  );
                })}
              </SubMenu>
            );
          } else {
            return (
              <MenuItem key={nav.path}>
                <Link to={nav.path} className="ice-menu-link">
                  {nav.icon ? (
                    <CustomIcon size="small" type={nav.icon} style={styles.customIcon}/>
                  ) : null}
                  <span className="ice-menu-item-text">{nav.name}</span>
                </Link>
              </MenuItem>
            );
          }

        })}
      </Menu>
    );
  }
}

const styles = {
  customIcon: {
    marginRight: '16px'
  },
  menu: {},
  menuMobile: {
    marginTop: '62px',
  },
};
