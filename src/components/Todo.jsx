import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeTodo } from '../redux/actions/todoActions';
import { todoStyles } from '../styles/todo';
import noDataSvg from '../assets/images/no-data';
import Image from './shared/Image';

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
      <Image source={noDataSvg} />
      <p style={todoStyles.noTodos}> You don't have any todos </p>
    </section>
  );

  return <Fragment>{todoList}</Fragment>;
};

export const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    removeTodo: id => {
      dispatch(removeTodo(id));
    }
  };
};

Todo.propTypes = {
  todos: PropTypes.arrayOf(Object).isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
