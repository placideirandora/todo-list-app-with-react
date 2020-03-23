import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';
import '../styles/AddTodo.scss';

class AddTodo extends Component {
  state = {
    content: null
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
        <form onSubmit={this.handleSubmit}>
          <div className="todo-wrapper">
            <input
              type="text"
              placeholder="type in your todo"
              onChange={this.handleChange}
              autoFocus
            />
            <br />
            <button>Add</button>
          </div>
        </form>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: content => {
      dispatch(addTodo(content));
    }
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
