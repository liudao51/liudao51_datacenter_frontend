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
        <ul>
          {
            React.Children.map(this.props.children, function (value, key) {
              return (<li>{key}----{value}</li>);
            })
          }
        </ul>
      </div>
    );
  }
}

/**
 * @function 组件ComponentPropsChildren
 */
class ComponentPropsChildren extends React.Component {
  render() {
    return (
      <div>
        <ShoppingList userName="张三">
          <span>衬衫</span>
          <span>毛衣</span>
        </ShoppingList>
        <ShoppingList userName="李四">
          <span>裙子</span>
          <span>帽子</span>
        </ShoppingList>
      </div>
    );
  }
}

//输出组件ComponentPropsChildren
export default ComponentPropsChildren;
