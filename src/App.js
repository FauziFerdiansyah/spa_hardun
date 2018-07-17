import React, { Component } from 'react';
import Header from "./views/layouts/Header";
import Nav from "./views/layouts/Nav";
import Content from "./views/layouts/Content";
import Footer from "./views/layouts/Footer";

class App extends Component {
  render() {
    return (
      <div id="page">
        <Header/>
        <Nav/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
