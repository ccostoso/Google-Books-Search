import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
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

  render() {
    return (
      <Search />
    )
  }
}

export default App;
