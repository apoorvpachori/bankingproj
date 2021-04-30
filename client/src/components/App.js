import React from "react";
import Registration from "./Registration";
import LandingPage from "./LandingPage";
class App extends React.Component {
  render() {
    return (
      <div>
        <Registration />
        <LandingPage />
      </div>
    );
  }
}
export default App;
