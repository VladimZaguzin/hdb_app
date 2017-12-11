const ReactDataGrid = require('react-data-grid');
const { Toolbar, Data: { Selectors },Filters: { NumericFilter, AutoCompleteFilter, MultiSelectFilter, SingleSelectFilter }, Editors } = require('react-data-grid-addons');
const { AutoComplete: AutoCompleteEditor, DropDownEditor } = Editors;
const React = require('react');


const names = ['Bob', 'Kate', 'Emma', 'Mark'];



export default class GridItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._columns = [
      {
        key: 'priority',
        name: 'Priority',
        filterable: true,
        sortable: true,
        resizable: true,
        editable: true
      },
      {
        key: 'trd',
        name: 'TRD',
        filterable: true,
        sortable: true
      },
      {
        key: 'ecode',
        name: 'E Code',
        filterable: true,
        sortable: true,
        editable: true
      },
      {
        key: 'reasonCode',
        name: 'Reason Code',
        filterable: true,
        sortable: true,
        resizable: true,
        editable: true
      },
      {
        key: 'cmsAcctNum',
        name: 'CMS Acct Num',
        filterable: true,

        sortable: true
      },
      {
        key: 'cmsCusip',
        name: 'CMS CUSIP',
        filterable: true,

        sortable: true,
        editable: true
      },
      {
        key: 'cmsSecurityDescription',
        name: 'CMS Security Description',
        filterable: true,

        sortable: true,
        editable: true
      },
      {
        key: 'fundFamilyName',
        name: 'Fund Family Name',
        filterable: true,

        sortable: true,
        editable: true
      },
      {
        key: 'fundCoAcctId',
        name: 'Fund Co Acct Id',
        filterable: true,

        sortable: true
      },
      {
        key: 'rCodeDate',
        name: 'R Code Date',
        filterable: true,
        sortable: true,
        editable: true
      },
      {
        key: 'rCodeModified',
        name: 'R Code Modified by',
        filterable: true,
        sortable: true,
        editor: <DropDownEditor options={names}/>,
        editable: true
      },
      {
        key: 'reconSpecialist',
        name: 'Recon Specialist',
        filterable: true,
        sortable: true,
        editor: <DropDownEditor options={names}/>,
      }
    ];

    this.state = { rows: this.createRows(1000), filters: {}, sortColumn: null, sortDirection: null  };
  }

  componentDidMount(){
    this.myOpenGrid.onToggleFilter();
    
  }
  randomIntFromInterval = (min,max) =>
  {
      return Math.floor(Math.random()*(max-min+1)+min);
  }
  getRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  };


  createRows = (numberOfRows) => {
    let rows = [];
    for (let i = 1; i < numberOfRows; i++) {
      rows.push({
        priority: ['Red', 'Yellow', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
        trd: this.randomIntFromInterval(1,20),
        ecode: ['Red', 'Yellow', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
        reasonCode:  ['Red', 'Yellow', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
        cmsAcctNum: this.randomIntFromInterval(10000,90000) ,
        cmsCusip: this.randomIntFromInterval(10000,90000) ,
        cmsSecurityDescription: this.randomIntFromInterval(10000,90000) ,
        fundFamilyName: this.randomIntFromInterval(10000,90000) ,
        fundCoAcctId: this.randomIntFromInterval(10000,90000) ,
        rCodeDate: this.getRandomDate(new Date(), new Date(2016, 0, 1)),
        rCodeModified : ['Bob', 'Kate', 'Emma', 'Mark'][Math.floor((Math.random() * 3) + 1)],
        reconSpecialist: ['Bob', 'Kate', 'Emma', 'Mark'][Math.floor((Math.random() * 3) + 1)]
      });
    }
    return rows;
  };

  getRows = () => {
    return Selectors.getRows(this.state);
  };

  getSize = () => {
    return this.getRows().length;
  };

  rowGetter = (rowIdx) => {
    const rows = this.getRows();
    return rows[rowIdx];
  };

  handleGridSort = (sortColumn, sortDirection) => {
    this.setState({ sortColumn: sortColumn, sortDirection: sortDirection });
  };


  rowGetter = (index) => {
    return Selectors.getRows(this.state)[index];
  };

  rowsCount = () => {
    return Selectors.getRows(this.state).length;
  };

  handleFilterChange = (filter) => {
    let newFilters = Object.assign({}, this.state.filters);
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
      delete newFilters[filter.column.key];
    }
    this.setState({ filters: newFilters });
  };

  getValidFilterValues = (columnId) => {
    let values = this.state.rows.map(r => r[columnId]);
    return values.filter((item, i, a) => { return i === a.indexOf(item); });
  };

  handleOnClearFilters = () => {
    this.setState({ filters: {} });
  };


  onClearFilters = () => {
    this.setState({ filters: {} });
  };

  handleGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    let rows = this.state.rows.slice();

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});
      rows[i] = updatedRow;
    }

    this.setState({ rows });
  };

  render() {
    return  (
      <ReactDataGrid
        ref={(datagrid) => { this.myOpenGrid = datagrid; }}
        onGridSort={this.handleGridSort}
        enableCellSelect={true}
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this.getSize()}
        minHeight={800}
        onAddFilter={this.handleFilterChange}
        onGridRowsUpdated={this.handleGridRowsUpdated}
        onClearFilters={this.onClearFilters} 
      />);
  }
}


