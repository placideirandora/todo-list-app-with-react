import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';
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
    if (this.state.content) {
      this.props.addTodo(this.state.content);
      e.target.reset();
      alert('Todo added');
    } else {
      alert('Ooops! You cannot add an empty todo!');
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="todo-wrapper">
            <input
              type="text"
              placeholder="type in your todo"
              onChange={this.handleChange}
            />
            <br />
            <button>Add</button>
          </div>
        </form>
      </div>
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

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
