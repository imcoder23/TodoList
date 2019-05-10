import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Take Bath",
        completed: true
      },
      {
        id: 3,
        title: "Dinner with Friends",
        completed: false
      }
    ]
  };

// TOggle COmplete

markComplete = (id) => {
  
  this.setState({ 
    todos:this.state.todos.map(
      todo => {
      if(todo.id === id){
          todo.completed = !todo.completed
      }
        return todo;
  }) 
  
  
  });
}

delTodo =(id) =>{
  this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]
  })
}

  render() {
    return (
      <div>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
