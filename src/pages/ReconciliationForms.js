import React, { Component } from 'react'

import ToolbarRecon from '../components/ToolbarRecon'
import TabsControlled from "../components/Tabs"


export default class ReconciliationForms  extends Component {
  render() {
    return (

      <div>
        <ToolbarRecon />
        <div className="reconControll">
          

        </div>
        <TabsControlled />
      </div>

    )
  }
}
