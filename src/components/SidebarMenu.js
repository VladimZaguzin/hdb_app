import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List'

import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import ContentSend from 'material-ui/svg-icons/content/send'
import Subheader from 'material-ui/Subheader'
import Toggle from 'material-ui/Toggle'
import FlatButton from 'material-ui/FlatButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import classnames from 'classnames'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'

import { Link } from "react-router"


export default class SideBarMenu extends Component {
  constructor(props){
    super(props)
    this.state = {open: false}
    this.handleToggle = this.handleToggle.bind(this)
}

  handleToggle = () => {
    this.setState((prevState, props)=>{
        this.props.toggleContent()
        return {
            open: !prevState.open
        }
    })
  }

  render(){
    return (

         <div>
            <AppBar
            className={classnames('app-bar', {'expanded': this.state.open})}
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementRight={<FlatButton 
                containerElement={<Link to="/LoginPage" />}
                label="Login"/>}
            title="Hercules"
            />

            <Drawer
            docked={true}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            >
                <List>
                    <ListItem
                    key={0}
                    primaryText="Home"
                    leftIcon={<ActionGrade />}
                    containerElement={<Link to={`/Home`} activeClassName="app-contant expanded"/>}

                    />
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
                            containerElement={<Link to={`/ReconciliationForms`}/>}

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
                    key={9}
                    primaryText="Import Data Menu"
                    leftIcon={<ContentInbox />}
                    initiallyOpen={false}
                    primaryTogglesNestedList={true}
                    nestedItems={[
                        <ListItem key={10} primaryText="Import Daily Prices" leftIcon={<ContentDrafts />} />,
                    ]}
                    />,
                </List>
            </Drawer>
        </div>

    )
  }
}

