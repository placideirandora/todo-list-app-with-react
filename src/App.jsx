import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/shared/NavBar';
import Home from './components/Home';
import About from './components/About';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import Footer from './components/shared/Footer';
import { appStyles } from './styles/app';
import './styles/shared/Body.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <section style={appStyles.mainWrapper}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Todo" component={Todo} />
            <Route path="/AddTodo" component={AddTodo} />
            <Route path="/About" component={About} />
          </Switch>
        </section>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
