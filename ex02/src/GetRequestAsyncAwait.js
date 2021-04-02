import React, { Component } from "react";

class GetRequestAsyncAwait extends Component {
  constructor(props) {
    super(props);
    this.state = { totalReactPackages: null };
  }
  async componentDidMount() {
    const response = await fetch("https://api.npms.io/v2/search?q=react");
    const data = await response.json();
    this.setState({ totalreactPackages: data.total });
  }
  render() {
    const { totalreactPackages } = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">GET Request with Async/Await</h5>
        <div classname="card-body">Total packages: {totalreactPackages}</div>
      </div>
    );
  }
}
export default GetRequestAsyncAwait;
