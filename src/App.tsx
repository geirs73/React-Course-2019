import * as React from 'react';
import './App.css';
import {NameBlock} from "./components/NameBlock"


type IState = {
  lastName: string;
  firstName: string;
};

class App extends React.Component<{},IState>{
  state: IState = {
    firstName: "",
    lastName: ""
  }

  // myOnClickHandler = (event) => {

  // }
//         <NameBlock name="Geir" lastName="Sørensen" />

  render() {
    return (
      <div>
        <button onClick={(event) => {
          console.log("Got event");
        }}>Klick!</button>
        <NameBlock name="Geir" lastName="Sørensen" />
      </div>
  );
  }
}

export default App;
