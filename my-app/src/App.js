import React, { Component } from 'react';
import Header from './components/layout/Header';
import './App.css';
import Todos from  './components/Todos';
import uuid from 'uuid';
import AddTodo from './components/AddTodo';



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

  addTodo = title => {
   const newTodo ={
     id:4,
     title: title,
     completed:false
   }
   this.setState({todo:[...this.state.todo,newTodo]})
  };
  render(){
   
    return ( 
      <div class="App">
       <div className="container">
       <Header />
       <AddTodo addTodo={this.addTodo} />
        <Todos todo={this.state.todo} markComplete={this.markComplete} delTodo={this.delTodo}/>
     </div>
     </div>
    );
  }
}
export default App;
