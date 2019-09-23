import React, { Component } from 'react';
import '../styles/App.scss'
import Header from './Header';
import Footer from './Footer';

class App extends Component {
    render() {
        return(
            <div className="App">
                <Header/>
                <p className="description">Manage and track your todos in an effective and efficient manner!</p>
                <button className="start-btn">Start</button>
                <Footer/>
            </div>
        )
    }
}

export default App;
