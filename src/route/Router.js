import React, { Component } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import Home from "../components/Home";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null
    };
  }

  componentDidMount() {
    fetch(
      "https://www.alphavantage.co/query?apikey=demo&function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT"
    )
      .then(res => res.json())
      .then(result => {
        this.setState({
          items: result
        });
      });
  }

  render() {
    const { items } = this.state;

    if (items) {
      let timeSeries = items["Time Series (Daily)"];
      for (let key in timeSeries) {
        console.log(timeSeries[key]);
      }
    }
    return (
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          {/* <Route path="/user/:id" component={UsersPosts} />
          <Route path="/post/:id" component={SinglePost} /> */}
          <Redirect to="/home" />
        </Switch>
      </Router>
    );
  }
}
// https://www.npmjs.com/package/react-chartjs-2
// https://react-table.js.org/#/story/readme
export default Routes;
