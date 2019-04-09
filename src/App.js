import React, { Component } from 'react';
import './App.css';

class App extends Component {
  allowDrop = (ev) => {
    ev.preventDefault();
  }

  drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  render() {
    return (
      <div className="App">
        <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop}>
          <div draggable onDragStart={this.drag} id="drag1">Something</div>
        </div>
        <div id="div2" onDrop={this.drop} onDragOver={this.allowDrop}></div>

      </div>
    );
  }
}

export default App;
