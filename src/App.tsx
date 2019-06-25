import * as React from 'react';
import './App.css';
import {NameBlock} from "./components/NameBlock"


type IState = {
  lastName: string;
  firstName: string;
};

class App extends React.Component<{},IState>{
  state: IState = {
    firstName: "Geir",
    lastName: "Sørensen"
  }

  // myOnClickHandler = (event) => {

  // }
//         <NameBlock name="Geir" lastName="Sørensen" />

  render() {
    return (
      <div>
        <button onClick={(event) => {
          console.log("Got event");
          this.setState({
            firstName: (this.state.firstName === "Geir") ? "hihi" : "Geir"
          });
          
        }}>Klick!</button>
        <NameBlock name={this.state.firstName} lastName={this.state.lastName} />
      </div>
  );
  }
}

export default App;
