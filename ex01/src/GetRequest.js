import React, { Component } from "react";
class GetRequest extends Component {
  constructor(props) {
    super(props);
    this.state = { totalreactPackages: null };
  }
  componentDidMount() {
    fetch("https://api.npms.io/v2/search?q=react")
      .then((response) => response.json())
      .then((data) => this.setState({ totalreactPackages: data.total }));
  }

  render() {
    const { totalreactPackages } = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">Simple GET Request</h5>
        <div className="card-body">
          Total packages:
          {totalreactPackages}{" "}
        </div>
      </div>
    );
  }
}
export default GetRequest;
