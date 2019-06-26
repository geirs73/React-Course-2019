import * as React from 'react';
import './Calculator.css'
import { KeyPad } from './components/KeyPad'


type Operation = "*" | "-" | "+" | "/"

type ICalcState = {
  values: number[],
  operation: Operation,
  register: number
};



export class Calculator extends React.PureComponent<{}, ICalcState>{
  state: ICalcState = {
    values: [],
    register: 0,
    operation: "+"
  }

  onPressValue = (val: number) => {
    // ensure that there is a new object here, to avoid s
    const newArray = this.state.values.concat(val)
    this.setState({
      values: newArray
    });
  }


  onPlusClick = () => {

    //  this.state.values.reduce((x, i)=> { tall + x * Math.pow(10, i) } )
    this.setState(
      {
        register: this.convertEntriesToNumber(),
        operation: "+",
        values: []
      }
    )
  }

  onResultClick = () => {
    let tmpRes = 0;
    tmpRes = this.state.register + this.convertEntriesToNumber();

    this.setState({
      values: [],
      operation: "+",
      register: tmpRes
    })
  }

  onResetClick = () => {
     this.setState({ 
        values: [], register: 0, operation: "+"
       });
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
      <div style={{ backgroundColor: "gray" }}>

        <h1 >Calculator </h1>
        
        <p>Register: {this.state.register}</p>
        <p>Entry: 
          {
            this.state.values.map((v) => {
              return (
                <span>{v}</span>
              )
            })
          }
        </p>
        <KeyPad 
          onPlusClick = {this.onPlusClick}
          onPressValue = {this.onPressValue}
          onResetClick = {this.onResetClick}  
          onResultClick = {this.onResultClick}
          ></KeyPad>
       

      </div>

    );
  }


}


  