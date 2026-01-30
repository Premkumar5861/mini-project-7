import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsPage from "./components/Newspage";
import News from "./components/Newspage";
import Newsitems from "./components/Newsitems";


export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <NewsPage/>
        <Newsitems/>
        
      </>
    );
  }
}
