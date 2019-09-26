import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/todoActions';
import '../styles/Todo.scss';

class Todos extends Component {
  handleClick = todo => {
    this.props.deleteTodo(todo);
  };
  render() {
    const todoList = this.props.todos.length ? (
      this.props.todos.map(todo => {
        return (
          <div key={todo.id}>
            <p className="todos">
              {todo.content}{' '}
              <button
                onClick={() => {
                  this.handleClick(todo.id);
                }}
              >
                Complete
              </button>
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

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: id => {
      dispatch(deleteTodo(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
