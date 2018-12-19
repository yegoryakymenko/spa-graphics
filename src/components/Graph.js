import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";

class Graph extends Component {
  render() {
    const { items } = this.props;
    let timeSeries = items["Time Series (Daily)"];
    let dates = [];
    let datesInfo = [];
    for (let key in timeSeries) {
      dates.push(key);
      datesInfo.push(timeSeries[key]["3. low"]);
    }
    console.log(datesInfo);
    // let parsed = datesInfo.map((item, i) => {
    //   return item["3. low"];
    // });
    console.log(datesInfo);
    const data = {
      labels: dates,
      datasets: [
        {
          label: "My First dataset",
          data: datesInfo,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          height: 100,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)"
        }
      ]
    };
    console.log(items);
    return (
      <div>
        <h2>Horizontal Bar Example</h2>
        <HorizontalBar data={data} height={1000} />
      </div>
    );
  }
}

export default Graph;
