import React, { Component } from 'react'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';


import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Subheader from 'material-ui/Subheader';

export default class ToolbarRecon extends Component {

  constructor(props) {
    super(props);
   
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    this.state = {
      value: 3,
      date: date
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>

      <Toolbar>
      <ToolbarTitle text="Reconciliation Worklist" />
      <ToolbarSeparator />
        <ToolbarGroup firstChild={true}>
          <div className="selector">
            <SelectField
            floatingLabelText="Recon Period Criteria"
            value={this.state.value}
            onChange={this.handleChange}>
              <MenuItem value={1} primaryText="Sep-2017" />
              <MenuItem value={2} primaryText="Oct-2017" />
              <MenuItem value={3} primaryText="Nov-2017" />
              <MenuItem value={4} primaryText="Dec-2017" />
            </SelectField>
            </div>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value={1}> Sep-2017 </option>
            <option value={2}> Oct-2017 </option>
            <option value={3}> Nov-2017 </option>
            <option value={4}> Dec-2017 </option>
          </select>

          <ToolbarSeparator />
          <RaisedButton label="Open" primary={true} />
          <h4>Current Business Day  </h4>

        <div className="currentDay">
          <TextField
          id="currentDay"
          value= {this.state.date}
        />
        </div>
        <h4 style={{paddingleft:'5px'}}>Last CMS refresh  </h4>
        <div className = "lastRef">
        <TextField
          id="LastCMSrefresh"
          value= {this.state.date}
        />
        </div>

        </ToolbarGroup>

      </Toolbar>

      </div>
    );
  }
}