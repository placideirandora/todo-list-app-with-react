import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../redux/actions/todoActions';
import '../styles/Todo.scss';

const Todo = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo, index) => {
      return (
        <div key={index}>
          <p className="todos">
            {index + 1 + '.'} {''} {todo.payload.toUpperCase()}
            <button
              onClick={() => {
                handleClick(todo.id);
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

  const handleClick = todo => {
    deleteTodo(todo);
  };

  return <Fragment>{todoList}</Fragment>;
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
