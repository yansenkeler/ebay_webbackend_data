import { enquireScreen } from 'enquire-js';
import React, { Component } from 'react';
import cx from 'classnames';
import Layout from '@icedesign/layout';
import Header from '../../components/Header';
import Aside from '../../components/Aside';
import Footer from '../../components/Footer';
import Drawer from "antd-mobile/lib/drawer";
import "antd-mobile/lib/drawer/style/css";

import './BasicLayout.scss';
import TopBar from '../../components/TopBar';

const theme = 'dark';

export default class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      open: false,
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

  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { isMobile } = this.state;
    console.log('drawer status', this.state.open);

    if (isMobile) {
      return (
        <Layout
          fixable
          style={{ minHeight: '100vh' }}
          className={cx(`basic-layout-${theme} ice-design-layout`)}
        >
          {/*<Header theme={theme}/>*/}

          <Layout.Section>
            <TopBar
              drawerIcon={this.state.open ? 'arrow-right' : 'mulu'}
              onToggleDrawer={() => this.onOpenChange()}
              hasDrawer={true}
              title={this.props.title}
            />
            <Drawer
              className="my-drawer"
              style={{ minHeight: document.documentElement.clientHeight }}
              contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 0 }}
              sidebar={<Aside/>}
              open={this.state.open}
              onOpenChange={() => this.onOpenChange()}
            >
              <Layout.Main scrollable style={styles.mainLayout}>
                {this.props.children}
                {/*<Footer/>*/}
              </Layout.Main>
            </Drawer>
          </Layout.Section>
        </Layout>
      );
    } else {
      return (
        <Layout
          fixable
          style={{ minHeight: '100vh' }}
          className={cx(`basic-layout-${theme} ice-design-layout`)}
        >
          {/*<Header theme={theme}/>*/}
          <TopBar
            hasDrawer={false}
            title={this.props.title}
          />
          <Layout.Section>
            <Layout.Aside width={240}>
              <Aside/>
            </Layout.Aside>

            <Layout.Main scrollable>
              {this.props.children}
              {/*<Footer/>*/}
            </Layout.Main>
          </Layout.Section>
        </Layout>
      );
    }
  }
}

const styles = {
  mainLayout: {
    padding: '0'
  }
};
