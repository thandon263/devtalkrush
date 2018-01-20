import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return <div>{console.log("It is working!")}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
