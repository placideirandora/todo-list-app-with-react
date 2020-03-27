import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../redux/actions/todoActions';
import { todoStyles } from '../styles/todo';
import image from '../assets/images/no-data';

export const Todo = ({ todos, removeTodo }) => {
  const handleClick = todo => {
    removeTodo(todo);
  };

  const todoList = todos.length ? (
    todos.map((todo, index) => {
      return (
        <section key={index}>
          <p style={todoStyles.todos}>
            {index + 1 + '.'} {''} {todo.payload}
            <button
              onClick={() => {
                handleClick(todo.id);
              }}
              style={todoStyles.todoButton}
            >
              Complete
            </button>
          </p>
          <hr />
        </section>
      );
    })
  ) : (
    <section style={todoStyles.noTodosWrapper}>
      <img src={image} alt="image" width="400" height="300" />
      <p style={todoStyles.noTodos}> You don't have any todos </p>
    </section>
  );

  return <Fragment>{todoList}</Fragment>;
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: id => {
      dispatch(removeTodo(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
