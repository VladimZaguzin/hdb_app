import React from 'react';


import SideBarMenu from './sidebar'

export default class App extends React.Component {
  render() {
    return (
      <div id="root">
        <SideBarMenu />
        <h1>Hello World</h1>
      </div>);
  }
}