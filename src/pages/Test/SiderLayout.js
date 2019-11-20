import React from 'react';
import {Layout, Menu, Icon} from 'antd';

/**
 * @function BasicLayout布局组件
 */
// Header, Footer, Sider, Content组件在Layout组件模块下
const {Header, Footer, Sider, Content} = Layout;


//引入子菜单组件
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;


class SiderLayout extends React.Component {
    // submenu keys of first level
    rootSubmenuKeys = ['sub2', 'sub3'];

    constructor(props) {
        super(props);
        this.state = {collapse: false, openKeys: ['sub2']}
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

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

    render() {
        return (
            <Layout>
                <Sider style={{width: '256px', minHeight: '100vh', background: '#FFFFFF'}}>
                    <div style={{height: '32px', background: 'rgba(255,255,255,0.2)'}}>
                        <Menu theme="light" mode="inline" openKeys={this.state.openKeys} onOpenChange={this.handleMenuOpenChange} defaultSelectedKeys={['201']}>
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
export default SiderLayout;

