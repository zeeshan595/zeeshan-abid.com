import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import INavigation from "../Model/Navigation";

export interface IAppProps {
  Navigation?: INavigation[];
}

class App extends React.Component<IAppProps, {}> {
  render() {
    return (
      <BrowserRouter>
        <div>
          {this.props.Navigation.map((el, index) => (
            <Route
              key={index}
              path={el.Path}
              component={el.Component}
              exact={el.exact}
            />
          ))}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
