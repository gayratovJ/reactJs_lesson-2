import React, { Component, Fragment } from 'react'
import Header from '../components/header/Header'
import About from '../components/about/About';
import Document from '../components/document/Documet';
import MainTab from '../components/tabs/Tab';

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <About/>
        <Document/>
        <MainTab/>
      </Fragment>
    );
  }
}

export default HomePage