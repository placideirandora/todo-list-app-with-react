import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './Nav';
import '../styles/App.scss'
import Home from './Home';
import About from './About';
import Todos from './Todo';
import Footer from './Footer';

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <div className="App">
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/Todos" component={Todos} />
                            <Route path="/About" component={About} />
                        </Switch>
                        <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
