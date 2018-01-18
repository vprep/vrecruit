import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyComponent from './MyComponent';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Vprep</h1>
                    <span className="App-user">Swadhin Jaiswal</span>
                </header>

                <MuiThemeProvider>
                    <MyComponent />
                </MuiThemeProvider>

            </div>
        );
    }
}

export default App;
