import * as React from 'react';
import './Calculator.css'
import { KeyPad } from './components/KeyPad'
import { Operation } from './CalculatorTypes'

type ICalcState = {
  digits: number[],
  operation: Operation,
  register: number
};



export class Calculator extends React.PureComponent<{}, ICalcState>{
  state: ICalcState = {
    digits: [],
    register: 0,
    operation: "nop"
  }

  onDigitClick = (val: number) => {
    // ensure that there is a new object here, to avoid s
    const newArray = this.state.digits.concat(val)
    this.setState({
      digits: newArray
    });
  }


  onOperatorClick = (op: Operation) => {
    console.log("op event: " + op);

    this.setState(
      {
        register: this.calculateResult(this.state.operation),
        operation: op,
        digits: []
      }
    )
  }

  onResultClick = () => {
    this.setState({
      digits: [],
      operation: "nop",
      register: this.calculateResult(this.state.operation)
    })
  }

  onResetClick = () => {
    this.setState({
      digits: [], register: 0, operation: "+"
    });
  }

  private calculateResult(op: Operation):number {
    let entry:number = this.convertDigitsToNumber();
    let register:number = this.state.register;
    console.log("calculateResult for operator: " + register + " " + op + " " + entry);
    switch (op) {
      case "+": {
        return register + entry;
      }
      case "-": {
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

  private convertDigitsToNumber() {
    let res = 0;
    let i = 0;
    for (i = 0; i < this.state.digits.length; i++) {
      res = res + this.state.digits[i] * Math.pow(10, this.state.digits.length - i - 1);
    }
    return res;
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
                this.state.digits.map((v, i) => {
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
              onDigitClick={this.onDigitClick}
              onResetClick={this.onResetClick}
              onResultClick={this.onResultClick} />
          </div>
        </div>
      </div>

    );
  }


}


