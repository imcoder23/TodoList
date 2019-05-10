import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Todoitem extends Component {
  
  getstyle = () => {
      return {
        background:'lightblue', 
        padding :'10px',
        borderBottom: '1px #ccc dotted', 
        textDecoration : this.props.todo.completed ? 'line-through':'none'
      }
    }
  
  render() {

    const {id , title} = this.props.todo;
    return (
      <div >
         <p style={this.getstyle()}>
         <input type='checkbox' onChange={this.props.markComplete.bind(this,id)}></input>
         {title}
         <button onClick={this.props.delTodo.bind(this,id)}style={btnStyle}>x</button>
         
         </p> 
      </div>
    );
    
  }
}

const btnStyle ={
    background: '#ff0000',
    color: '#fff',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}
Todoitem.propTypes = {
  todo: PropTypes.object.isRequired
}