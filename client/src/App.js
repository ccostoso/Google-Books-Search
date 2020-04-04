import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from "./components/UniversalComponents/Nav"
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import logo from './logo.svg';
import { Header } from "./components/UniversalComponents/Header";
import './App.css';

class App extends Component {
    state = {
        active: "search"
    }

    componentDidMount() {

    }

    handleActive = e => {
        console.log(e.target);
        const { value } = e.target;

        this.setState({
            active: value
        });
    }

    render() {
        return (
            <Router>
                <Nav 
                    active={this.state.active}
                    handleActive={this.handleActive}
                />
                <Switch>
                    <Route exact path="/" component={Search} />
                    <Route exact path="/saved" component={Saved} />
                </Switch>
            </Router>
        )
    }
}

export default App;
