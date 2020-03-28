import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo } from '../redux/actions/todoActions';
import { todoStyles } from '../styles/todo';
import addSvg from '../assets/images/add';
import Image from './shared/Image';

export class AddTodo extends Component {
  state = {
    content: ''
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { content } = this.state;
    const { addTodo } = this.props;

    if (content) {
      addTodo(content);
      e.target.reset();
    } else {
      alert('Oops! You cannot add an empty todo!');
    }
  };

  render() {
    return (
      <Fragment>
        <section style={todoStyles.addTodoWrapper}>
          <Image source={addSvg} />
          <form onSubmit={this.handleSubmit} style={todoStyles.form}>
            <input
              type="text"
              placeholder="type in your todo"
              onChange={this.handleChange}
              autoFocus
              style={todoStyles.textField}
            />
            <br />
            <button style={todoStyles.formButton}>Add</button>
          </form>
        </section>
      </Fragment>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    addTodo: content => {
      dispatch(addTodo(content));
    }
  };
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(AddTodo);
