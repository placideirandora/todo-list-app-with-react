import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Todo.scss';

class Todos extends Component {
  render() {
    const todoList = this.props.todos.length ? (
      this.props.todos.map(todo => {
        return (
          <div key={todo.id}>
            <p className="todos">
              {todo.content} <button>Complete</button>
              <hr />
            </p>
          </div>
        );
      })
    ) : (
      <p className="no-todos"> You don't have any todos </p>
    );
    return <div>{todoList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(Todos);
