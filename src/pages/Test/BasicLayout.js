import React from 'react';
import {Layout, Icon} from 'antd';

/**
 * @function BasicLayout布局组件
 */
// Header, Footer, Sider, Content组件在Layout组件模块下
const {Header, Footer, Sider, Content} = Layout;

class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {collapse: false}
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider>
          <span style={{color: '#FF0000'}}>Sider</span>
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

//输出组件BasicLayout
export default BasicLayout;

