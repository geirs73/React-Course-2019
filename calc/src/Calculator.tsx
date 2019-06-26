import * as React from 'react';
import './Calculator.css'
import { KeyPad } from './components/KeyPad'
import { Operation } from './CalculatorTypes'

type ICalcState = {
  values: number[],
  operation: Operation,
  register: number
};



export class Calculator extends React.PureComponent<{}, ICalcState>{
  state: ICalcState = {
    values: [],
    register: 0,
    operation: "nop"
  }

  onPressValue = (val: number) => {
    // ensure that there is a new object here, to avoid s
    const newArray = this.state.values.concat(val)
    this.setState({
      values: newArray
    });
  }


  onOperatorClick = (op: Operation) => {

    this.setState(
      {
        register: this.state.register,
        operation: op,
        values: []
      }
    )
  }

  onResultClick = () => {
    let tmpValue:number = this.calculateResult(this.state.operation)

    this.setState({
      values: [],
      operation: "nop",
      register: tmpValue
    })
  }

  onResetClick = () => {
    this.setState({
      values: [], register: 0, operation: "+"
    });
  }

  private calculateResult(operator: Operation) {
    let tmpRes = 0;
    switch (operator) {
      case "+": {
        tmpRes = this.state.register + this.convertEntriesToNumber();
        break;
      }
      case "-": {
        tmpRes = this.state.register - this.convertEntriesToNumber();
        break;
      }
      case "*": {
        tmpRes = this.state.register * this.convertEntriesToNumber();
        break;
      }
      case "/": {
        tmpRes = this.state.register / this.convertEntriesToNumber();
        break;
      }
      default: {
        tmpRes = 0
        break;
      }
    }

    tmpRes = this.state.register + this.convertEntriesToNumber();
    return tmpRes;
  }

  private convertEntriesToNumber() {
    let tall = 0;
    let i = 0;
    for (i = 0; i < this.state.values.length; i++) {
      tall = tall + this.state.values[i] * Math.pow(10, this.state.values.length - i - 1);
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
                this.state.values.map((v) => {
                  return (
                    <span>{v}</span>
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


