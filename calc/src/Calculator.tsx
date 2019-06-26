import * as React from 'react';
//import './App.css';
//import {NameBlock} from "./components/NameBlock"
import './Calculator.css'
import { forInStatement } from '@babel/types';
import { number } from 'prop-types';

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
    let i = 0;
    tmpRes = this.state.register + this.convertEntriesToNumber();
  
    this.setState({
      values: [],
      operation: "+",
      register: tmpRes
    })
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
        <p>Numbers: </p>
        <p>
          {
            this.state.values.map((v) => {
              return (
                <span>{v}</span>
              )
            })
          }
        </p>
        <p>Result: {this.state.register}</p>
        {/* <input type={{text}}></input> */}
        <div>
          <div style={{ float: "left" }}>
            <div>
              <button onClick={() => this.onPressValue(7)}>7</button>
              <button onClick={() => this.onPressValue(8)}>8</button>
              <button onClick={() => this.onPressValue(8)}>9</button>
            </div>
            <div>
              <button onClick={() => this.onPressValue(4)}>4</button>
              <button onClick={() => this.onPressValue(5)}>5</button>
              <button onClick={() => this.onPressValue(6)}>6</button>
            </div>
            <div>
              <button onClick={() => this.onPressValue(1)}>1</button>
              <button onClick={() => this.onPressValue(2)}>2</button>
              <button onClick={() => this.onPressValue(3)}>3</button>
            </div>
            <div>
              <button onClick={() => this.onPressValue(0)}>0</button>
            </div>
          </div>
          <div style={{ float: "left" }}>
            <div><button onClick={(e) => this.onPlusClick()}>+</button></div>
            <div><button>-</button></div>
            <div><button>/</button></div>
            <div><button>*</button></div>
            <div><button onClick={() => this.onResultClick()}>=</button>
              <button onClick={(e) => { this.setState({  values: [], register: 0, operation: "+" }) }}> C</button></div>
          </div>
        </div>
      </div>

    );
  }


}


        // {/* <button onClick={this.onClickHanlder}>Klick!</button> */}
        // <input type="text" onChange={(event) => {
        //   this.setState(
        //     {
        //       firstName: event.target.value
        //     });
        //   }} value = {this.state.firstName} ></input>
        //   <input type="text" onChange={(event) => {
        //   this.setState(
        //     {
        //       lastName: event.target.value
        //     });
        //   }} value = {this.state.lastName} ></input>
        // <NameBlock name={this.state.firstName} lastName={this.state.lastName} />
