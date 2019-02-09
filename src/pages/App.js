import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Block from "../components/atomic/Block";
import Header from "../components/nested/Header";
import MainPage from "./MainPage";
import CharacterDetail from "./CharacterDetail";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Block>
          <Header text="Adphorus" to="/" />
          <Block cName="container">
            <Route exact path="/" component={MainPage} />
            <Route path="/characterDetail/:id?" component={CharacterDetail} />
          </Block>
        </Block>
      </BrowserRouter>
    );
  }
}
