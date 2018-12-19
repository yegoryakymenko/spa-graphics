import React, { Component } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import Home from "../components/Home";
import Table from "../components/Table";
import Graph from "../components/Graph";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      isOpen: false,
      data: null
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
    let info = [];
    if (items) {
      console.log(info);
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/home" color="primary">
              SPA with graphs
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Choose page
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="/table">Table</DropdownItem>
                    <DropdownItem href="/graph">Graph</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
          <Router>
            <Switch>
              <Route path="/home" component={Home} />
              <Route
                path="/table"
                render={props => <Table {...props} items={items} info={info} />}
              />
              <Route
                path="/graph"
                render={props => <Graph {...props} items={items} />}
              />

              <Redirect to="/home" />
            </Switch>
          </Router>
        </div>
      );
    }
    return null;
  }
}
// https://www.npmjs.com/package/react-chartjs-2
// https://react-table.js.org/#/story/readme
export default Routes;
