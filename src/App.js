import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import classnames from 'classnames'




import SideBarMenu from './components/SidebarMenu'


const muiTheme = getMuiTheme({
    "palette": {
        "primary1Color": "#A29060",
        "primary2Color": "#f7f7f7",
        "primary3Color": "#a7a9ac",
        "accent1Color": "#f44336",
        "accent2Color": "#f5f5f5",
        "accent3Color": "#9e9e9e",
        "textColor": "rgba(0,0,0,0.87)",
        "secondaryTextColor": "#ffffff",
        "alternateTextColor": "rgba(0,0,0,0.54)",
        "canvasColor": "#ffffff",
        "alternateСanvasColor": "#212121",
        "alternate1Color": "rgba(255, 255, 255, 0.54)",
        "alternate2Color": "#f5f5f5",
        "borderColor": "#bdbdbd",
        "disabledColor": "rgba(0,0,0,0.3)",
        "pickerHeaderColor": "#00bcd4",
        "clockCircleColor": "#f44336",
        "shadowColor": "rgba(0,0,0,1)"
       },
       "themeName": "LightTheme",
       "themeFile": "lightTheme.json",
       "appBar": {
        "color": "#a29060"
       },
       "flatButton": {
        "primaryTextColor": "#f4bd0c"
       },
       "floatingActionButton": {
        "color": "#f4bd0c"
       },
       "raisedButton": {
        "primaryColor": "#f4bd0c"
       }
  });


export default class App extends Component {
    constructor(props){
    super(props)
    this.state = {open: false}
  }

  toggleContent = () => {
        if(window.innerWidth > 800) {
        this.setState((prevState, props)=>{
            return {
                open: !prevState.open
            }
        })
      }
    }  

  render() {
  return (

      <MuiThemeProvider muiTheme={muiTheme}>
      <div >
          <SideBarMenu toggleContent={this.toggleContent}/>
          <div className={classnames('app-content', {'expanded': this.state.open})}>
              { this.props.children }
          </div>
      </div>
      </MuiThemeProvider>
      )
  }
}
