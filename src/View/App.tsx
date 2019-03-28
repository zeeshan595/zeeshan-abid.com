import * as React from "react";

export interface AppProps {

};

class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div className="underConstruction">
        <h1>Under Construction</h1>
        <p>
          This website is currently being worked on. Please check back later for an update.
        </p>
      </div>
    );
  }
}

export default App;
