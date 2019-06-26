import * as React from 'react';
import './App.css';
import {NameBlock} from "./components/NameBlock"
import { forInStatement } from '@babel/types';


type IState = {
  lastName: string;
  firstName: string;
};
interface IProps 
   { 
     lastName: String; }

export class App extends React.Component<{},IState>{
  state: IState = {
    firstName: "Geir",
    lastName: "Sørensen"
  }

  // myOnClickHandler = (event) => {

  // }
//         <NameBlock name="Geir" lastName="Sørensen" />
  onClickHanlder = (event : React.MouseEvent) => {
    console.log("Got event");
    this.setState({
      firstName: (this.state.firstName === "Geir") ? "hihi" : "Geir"
    });
  }
   

  shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IProps>, nextContext: any) {
    // set false then updates will stop
    return true;
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.onClickHanlder}>Klick!</button> */}
        <input type="text" onChange={(event) => {
          this.setState(
            {
              firstName: event.target.value
            });
          }} value = {this.state.firstName} ></input>
          <input type="text" onChange={(event) => {
          this.setState(
            {
              lastName: event.target.value
            });
          }} value = {this.state.lastName} ></input>
        <NameBlock name={this.state.firstName} lastName={this.state.lastName} />
        
      </div>

  );
  }
}

