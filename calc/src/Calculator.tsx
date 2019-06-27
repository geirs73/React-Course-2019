import * as React from 'react';
import './Calculator.css'
import { KeyPad } from './components/KeyPad'
import { Operation } from './CalculatorTypes'

type ICalcState = {
  entries: number[],
  operation: Operation,
  register: number
};



export class Calculator extends React.PureComponent<{}, ICalcState>{
  state: ICalcState = {
    entries: [],
    register: 0,
    operation: "nop"
  }

  onPressValue = (val: number) => {
    // ensure that there is a new object here, to avoid s
    const newArray = this.state.entries.concat(val)
    this.setState({
      entries: newArray
    });
  }


  onOperatorClick = (op: Operation) => {
    console.log("op event: " + op);

    this.setState(
      {
        register: this.calculateResult(this.state.operation),
        operation: op,
        entries: []
      }
    )
  }

  onResultClick = () => {
    this.setState({
      entries: [],
      operation: "nop",
      register: this.calculateResult(this.state.operation)
    })
  }

  onResetClick = () => {
    this.setState({
      entries: [], register: 0, operation: "+"
    });
  }

  private calculateResult(op: Operation):number {
    let tmpRes = 0;
    let entry:number = this.convertEntriesToNumber();
    let register = this.state.register;
    console.log("calculateResult for operator: " + register + " " + op + " " + entry);
    switch (op) {
      case "+": {
        return register + entry;
      }
      case "-": {
//        console.log("minus entered!" + this.state.register + " foo " + this.convertEntriesToNumber())
        return register - entry;
      }
      case "*": {
        return register * entry;
      }
      case "/": {
        return register / entry;
      }
      default: {
        return register;        
      }
    }
  }

  private convertEntriesToNumber() {
    let tall = 0;
    let i = 0;
    for (i = 0; i < this.state.entries.length; i++) {
      tall = tall + this.state.entries[i] * Math.pow(10, this.state.entries.length - i - 1);
    }
    return tall;
  }

  render() {
    return (
      <div style={{ backgroundColor: "lightgray", margin: "15px", padding: "30px", width: "350px", height: "500px" }}>

        <h1 style={{textAlign: "center"}}>Calculator </h1>
        <div>
          <div style={{ float: "left", width: "35px", height: "18pt" }}>Register:</div>
          <div style={{ backgroundColor: "white", width: "200px", float: "right" }}>
            <span style={{ float: "right", fontSize: "18pt",  lineHeight: "18pt"  }}>{this.state.register}</span></div>
          <div style={{ float: "left", width: "35px", height: "25pt", clear: "left",  lineHeight: "18pt"  }}>Entry: </div>
          <div style={{ backgroundColor: "white", width: "200px", float: "right" }}>
            <span style={{ float: "right", fontSize: "18pt"}}>
              &nbsp;
              {
                this.state.entries.map((v, i) => {
                  return (
                    <span key={i}>{v}</span>
                  )
                })
              } 
            </span>
          </div>
          <div style={{ float: "right", clear: "left", paddingTop: "50px" }}>
            <KeyPad
              onOperatorClick={this.onOperatorClick}
              onPressValue={this.onPressValue}
              onResetClick={this.onResetClick}
              onResultClick={this.onResultClick} />
          </div>
        </div>
      </div>

    );
  }


}


