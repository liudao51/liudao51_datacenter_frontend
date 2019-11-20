import React from 'react';

/**
 * @function 子组件ShoppingList
 */
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h3>{this.props.userName}的店铺</h3>
        <span>这是组件内部的固定内容...</span>
      </div>
    );
  }
}

/**
 * @function 组件ComponentProps
 */
class ComponentProps extends React.Component {
  render() {
    return (
      <div>
        <ShoppingList userName="张三"/>
        <br />
        <ShoppingList userName="李四"/>
      </div>
    );
  }
}

//输出组件ComponentProps
export default ComponentProps;
