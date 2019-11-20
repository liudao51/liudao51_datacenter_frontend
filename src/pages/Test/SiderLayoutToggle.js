import React from 'react';
import Link from 'umi/link';
import {Icon, Layout, Menu} from 'antd';
import classNames from 'classnames';
import logo from './assets/images/logo.svg';
import styles from './assets/css/index.less';

/**
 * @function BasicLayout布局组件
 */
// Header, Footer, Sider, Content组件在Layout组件模块下
const {Header, Footer, Sider, Content} = Layout;


//引入子菜单组件
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;


class SiderLayoutToggle extends React.Component {
    // submenu keys of first level
    rootSubmenuKeys = ['sub2', 'sub3'];

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            openKeys: ['sub2'],
            leftSiderStyle: {background: '#FFFFFF', width: '256px', border: 'none'},
        }
    }

    //展开左侧样模块
    handleMenuCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });

        this.handleWindowResize();
    };

    //展开左侧栏菜单项
    handleMenuOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({openKeys});
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    //重绘窗口大小
    handleWindowResize = () => {
        // eslint-disable-line
        const event = document.createEvent('HTMLEvents');
        event.initEvent('resize', true, false);
        window.dispatchEvent(event);
    };

    render() {
        const {openKeys} = this.state;
        const _menuDefaultProps = this.state.collapsed ? {} : {openKeys};
        const _logo = logo;
        const _collapsed = this.state.collapsed ? this.state.collapsed : false;
        const _siderClassName = classNames(styles.sider, styles.light);
        const _logoClassName = classNames(styles.logo);
        const _btnMenuCollapse = classNames(styles.trigger);

        return (
            <Layout>
                <Sider trigger={null} collapsible={true} collapsed={_collapsed} className={_siderClassName}>
                    <div id="logo" className={_logoClassName}>
                        <Link to="/">
                            <img src={_logo} alt="logo"/>
                            <h1>Antd</h1>
                        </Link>
                    </div>
                    <div style={{height: '32px', background: 'rgba(255,255,255,0.2)'}}>
                        <Menu theme="light" mode="inline"
                              defaultSelectedKeys={['201']}
                              style={{border: 'none'}}
                              onOpenChange={this.handleMenuOpenChange}
                              {..._menuDefaultProps}>
                            <MenuItem key="1">
                                <Icon type="pie-chart"/>
                                <span>前言</span>
                            </MenuItem>
                            <SubMenu key="sub2" title={<span><Icon type="dashboard"/><span>Dashboard</span></span>}>
                                <MenuItem key="201">分析页</MenuItem>
                                <MenuItem key="202">监控页</MenuItem>
                                <MenuItem key="203">工作台</MenuItem>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="dashboard"/><span>列表</span></span>}>
                                <MenuItem key="301">查询表格</MenuItem>
                                <MenuItem key="302">标准列表</MenuItem>
                            </SubMenu>
                        </Menu>
                    </div>
                </Sider>
                <Layout>
                    <Header style={{background: '#FFFFFF', padding: '0px'}}>
                        <span className={_btnMenuCollapse} onClick={this.handleMenuCollapse}>
                          <Icon type={_collapsed ? 'menu-unfold' : 'menu-fold'}/>
                        </span>
                        <span style={{color: '#FF0000', margin: '0px 0px 0px 30px'}}>Header</span>
                    </Header>
                    <Content style={{margin: '24px 16px', padding: '24px', background: '#FFFFFF', minHeight: '280px'}}>
                        <span style={{color: '#FF0000'}}>Content</span>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        <span style={{color: '#FF0000'}}>Footer</span>
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

//输出组件SiderLayout
export default SiderLayoutToggle;

