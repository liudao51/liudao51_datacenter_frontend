import React from 'react';

/**
 * @function 子组件ShoppingList
 */
class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "X", content: "this is x content!"}
  }

  render() {
    return (
      <div className="shopping-list">
        <div>当点击按钮时，只会改变所设置的值，未设置的值会保留。
          当前state值为:<span style={{color: "#F00"}}> {this.state.title} </span>，
          当前content值为:<span style={{color: "#F00"}}> {this.state.content} </span></div>
        <div style={{margin: "10px 0px 0px 0px"}}>
          <button onClick={() => this.setState({title: "Y"})}>点击我改变title值</button>
          &nbsp;&nbsp;&nbsp;
          <button onClick={() => this.setState({content: "this is y content!"})}>点击我改变content值</button>
        </div>
      </div>
    );
  }
}

/**
 * @function 组件ComponentState
 */
class ComponentState extends React.Component {
  render() {
    return (
      <div>
        <ShoppingList/>
      </div>
    );
  }
}

//输出组件ComponentState
export default ComponentState;
