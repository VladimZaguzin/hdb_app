import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Forms from './form'


import {
  Classes,
  InputGroup,
  Intent,
  Menu,
  MenuItem,
  Popover,
  Position,
  Spinner,
  Tag,
  Tooltip,
} from "@blueprintjs/core";

import { Button, Collapse, Switch } from "@blueprintjs/core";

import GridItem from './grid'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};



export default class TabsControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
      isOpen: false,
      keepChildrenMounted: false,
    };
  }

handleClick = () => {
  this.setState({ isOpen: !this.state.isOpen });
};

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Reconciliation Worklist" value="a">
          <div>

          <Button onClick={this.handleClick}>{this.state.isOpen ? "Hide" : "Show"} Filter Options </Button>
          <Collapse isOpen={this.state.isOpen} keepChildrenMounted={this.state.keepChildrenMounted}>
              <pre style={{display:'inline-block'}}>
                <div>
                    <InputGroup style={{display:'inline-block', float: 'left'}}
                        leftIconName="filter"
                        placeholder="Filter priority..."
                    />
                    <InputGroup style={{display:'inline-block', float: 'left'}}
                        leftIconName="filter"
                        placeholder="Filter TRD..."
                    />
                    <InputGroup style={{display:'inline-block', float: 'left'}}
                        leftIconName="filter"
                        placeholder="Filter CMS Acct Num..."
                    />
                    <InputGroup style={{display:'inline-block', float: 'left'}}
                        leftIconName="filter"
                        placeholder="Filter Fund Co Acct Id..."
                    />
                  </div>
              </pre>
          </Collapse>

            <p>
            <GridItem />
            </p>
          </div>
        </Tab>
        <Tab label="Item Details" value="b">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>

              <Forms/>

              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
        <Tab label="Manual Recon Authorization" value="c">
          <div>
            <h2 style={styles.headline}>Controllable Tab C</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}