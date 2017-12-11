import React, { Component } from 'react'
import {Doughnut, Bar} from 'react-chartjs-2';


export default class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      chartData:{
        labels:['red', 'yellow', 'green'],
        datasets:[{
          data: [12, 19, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1
      
      }]
      }
    }
  }

  render() {
    return (
      <div className="Homepage">
        <h1>Hello UserName you have a new task</h1>

        <Doughnut
        data={this.state.chartData}
        options={{
          title:{
            display:true,
            text:"new tasks",
            fontSize:25
          }
        }}
        />

      </div>  
    )
  }
}
