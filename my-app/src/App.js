import React, { Component } from 'react';
import './App.css';
import Todos from  './components/Todos';



class App extends Component{
  state = {
    todo:[
      {
        id:1,
        title: "Study File Structure",
        completed:false
      },
      {
        id:2,
        title: "Create Component",
        completed:true
      },
      {
        id:3,
        title: "Study State",
        completed:false
      }
    ]
  }

  markComplete = id => {
    this.setState({
      todos: this.state.todo.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
     delTodo = id => {
      
      this.setState({
        todo: [...this.state.todo.filter(todo => todo.id !== id)]
      })
  
  };
  render(){
   
    return ( 
      <div class="App">
        <Todos todo={this.state.todo} markComplete={this.markComplete} delTodo={this.delTodo}/>
     </div>
    );
  }
}
export default App;
