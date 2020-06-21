import React, { Component } from "react";

class App extends Component {
  state = { data: [] };

  componentDidMount() {
    this.getTestQuery();
  }

  getTestQuery() {
    fetch("/test_query")
      .then((data) => data.json())
      .then((res) => this.setState({ data: res }));
  }

  render() {
    const data = this.state.data.map((item) => (
      <li key={item.id}>
        {item.firstname} {item.lastname}
      </li>
    ));
    return (
      <div>
        <h1>test</h1>
        <ol>{data}</ol>
      </div>
    );
  }
}
export default App;
