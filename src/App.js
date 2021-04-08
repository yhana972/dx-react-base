import './App.css';
import PropTypes from "prop-types";
import React, { Component } from 'react';

class App extends React.Component{
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({count : current.count + 1 }));
  }

  minus = () => {
    this.setState(current => ({count : current.count - 1}));
  }

  componentDidMount(){
    console.log("렌더링 완료!");
  }
  componentDidUpdate(){
    console.log("업데이트 완료!");
  }
  componentWillUnmount(){
    console.log("렌더링 종료");
  }
  render(){
    console.log("렌더링중");
    return(
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}


export default App;
