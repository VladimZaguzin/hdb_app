import React from 'react'
import {List, ListItem} from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import ContentSend from 'material-ui/svg-icons/content/send'
import Subheader from 'material-ui/Subheader'
import Toggle from 'material-ui/Toggle'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import classnames from 'classnames'



import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';



import style from './sidebar.css'



export default class SideBarMenu extends React.Component {
  constructor(props){
    super(props)
    this.state = {open: false}
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleToggle() {
    this.setState({open: !this.state.open})
  }

  handleClose() {
    this.setState({open: false})
  }

  render(){
    return (
      <div>
         <MuiThemeProvider muiTheme={getMuiTheme()}>
         <div>
            <AppBar
            className={classnames('app-bar', {'expanded': this.state.open})}
            onLeftIconButtonTouchTap={this.handleToggle}
            title="Hercules Database Switchboard"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <Drawer
            docked={true}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            >
                <List>
                    <ListItem
                    primaryText="Forms Menu"
                    leftIcon={<ContentInbox />}
                    initiallyOpen={false}
                    primaryTogglesNestedList={true}
                    nestedItems={[
                        <ListItem
                            key={1}
                            primaryText="Reconciliation Worklist Tab Forms"
                            leftIcon={<ActionGrade />}
                        />,
                        <ListItem
                            key={2}
                            primaryText="Fund Company Data Entry Screens Menu"
                            leftIcon={<ActionGrade />}
                            initiallyOpen={false}
                            primaryTogglesNestedList={true}
                            onNestedListToggle={this.handleNestedListToggle}
                            nestedItems={[
                                <ListItem key={1} primaryText="Monthly Price and Data Entry" leftIcon={<ContentDrafts />} />,
                                <ListItem key={2} primaryText="Monthly Price Worklist And Verification" leftIcon={<ContentDrafts />} />,
                                <ListItem key={3} primaryText="Daily Price Worklist And Varification" leftIcon={<ContentDrafts />} />,
                            ]}
                        />,
                        <ListItem
                            key={3}
                            primaryText="Account Positions"
                            leftIcon={<ActionGrade />}
                        />,
                        <ListItem
                            key={4}
                            primaryText="Month End Transactions Form"
                            leftIcon={<ActionGrade />}
                        />,
                        <ListItem
                            key={5}
                            primaryText="Fund Company Statement Exceptions"
                            leftIcon={<ActionGrade />}
                        />,
                        <ListItem
                            key={6}
                            primaryText="Account Profile"
                            leftIcon={<ActionGrade />}
                        />,                
                        <ListItem
                            key={7}
                            primaryText="Security Profile"
                            leftIcon={<ActionGrade />}
                        />,
                        <ListItem
                            key={8}
                            primaryText="Fund Family Profile"
                            leftIcon={<ActionGrade />}
                        />
                    ]}
                    />
                    <ListItem
                    key={3}
                    primaryText="Import Data Menu"
                    leftIcon={<ContentInbox />}
                    initiallyOpen={false}
                    primaryTogglesNestedList={true}
                    nestedItems={[
                        <ListItem key={1} primaryText="Import Daily Prices" leftIcon={<ContentDrafts />} />,
                    ]}
                    />,
                </List>
            </Drawer>
          {<div className={classnames('app-content', {'expanded': this.state.open})}> { this.props.children } </div>}
        </div>
      </MuiThemeProvider>
      </div>
    )
  }
}