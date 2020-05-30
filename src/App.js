import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import "./App.css";

//components
import Navbar from "./components/Navbar";
// import PopoverPopupState from "./components/PopoverPopupState";

//pages
import home from "./pages/home";
import about from "./pages/about";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#222831",
      Font: "",
    },
    secondary: {
      main: "#338cf9",
      Font: "",
    },
  },
  typography: {
    fontFamily: ["Roboto"],
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar />
            {/* <div className="PopoverPopupState">
              <PopoverPopupState/>
            </div> */}
            <div className="container">
              <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/about" component={about} />
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
