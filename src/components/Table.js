import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class Table extends Component {
  getData = () => {
    const { items, info } = this.props;
    let timeSeries = items["Time Series (Daily)"];
    console.log("timeSeries", timeSeries);
    for (let key in timeSeries) {
      let obj = {};
      obj.date = key;
      obj.open = timeSeries[key]["1. open"];
      obj.high = timeSeries[key]["2. high"];
      obj.low = timeSeries[key]["3. low"];
      obj.close = timeSeries[key]["4. close"];
      obj.adjusted = timeSeries[key]["5. adjusted close"];
      obj.volume = timeSeries[key]["6. volume"];
      obj.divided = timeSeries[key]["7. dividend amount"];
      obj.split = timeSeries[key]["8. split coefficient"];
      info.push(obj);
    }

    console.log(info);
    return info;
  };

  render() {
    const columns = [
      {
        Header: "Date",
        accessor: "date" // String-based value accessors!
      },
      {
        Header: "Open",
        id: "open",
        accessor: "open"
      },
      {
        Header: "High",
        accessor: "high"
      },
      {
        Header: "Low", // Custom header components!
        accessor: "low"
      },
      {
        Header: "Close", // Custom header components!
        accessor: "close"
      },
      {
        Header: "Adjusted close", // Custom header components!
        accessor: "adjusted"
      },
      {
        Header: "Volume",
        accessor: "volume"
      },
      {
        Header: "Divided amount",
        accessor: "divided"
      },
      {
        Header: "Split coefficient",
        accessor: "split"
      }
    ];

    return (
      <div>
        <ReactTable data={this.getData()} columns={columns} />
      </div>
    );
  }
}

export default Table;
