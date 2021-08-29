import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
    console.log(location.state);
  }
  
  render() {
    const { location } = this.props;
  return <>{location.state.title}</>;
  }
}

export default Detail;
