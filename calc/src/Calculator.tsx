import * as React from 'react';
//import './App.css';
//import {NameBlock} from "./components/NameBlock"
import './Calculator.css'
import { forInStatement } from '@babel/types';
import { number } from 'prop-types';

type Operation = "*" | "-" | "+" | "/"
type Calculation = {
  operation: Operation;
  value: number;
}
type ICalcState = {
  calculations: Calculation[]
  , values: number[]
};



export class Calculator extends React.PureComponent<{}, ICalcState>{
  state: ICalcState = {
    calculations: [],
    values: []
  }

  onPressValue = (val: number) => {
    // ensure that there is a new object here, to avoid s
    const newArray = this.state.values.concat(val)
    this.setState({
      values: newArray
    });
  }


  onPlusClick = () => {
              let tall = 0;
              let i = 0;
              for (i = 0; i < this.state.values.length; i++ )
              {
                tall = tall + this.state.values[i] * Math.pow(10, this.state.values.length - i - 1);
              }
              // const newCalcs = 
            //  this.state.values.reduce((x, i)=> { tall + x * Math.pow(10, i) } )
              this.setState (
                {
                  calculations: [{operation: "+", value: tall}],
                  values: []
                }
              )
            }

  render() {
    return (
      <div style={{ backgroundColor: "gray" }}>
        <h1 >Calculator </h1>
        <p>Calcs:<br></br>
        {
            this.state.calculations.map((v) => {
              return (
                <span> {v.value} {v.operation} </span>
              )
            })
          }
        
         </p>
        <p>Number: </p>
        <p>
          {
            this.state.values.map((v) => {
              return (
                <span>{v}</span>
              )
            })
          }
        </p>
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
            <div><button>=</button>
              <button onClick={(e) => { this.setState({ calculations: [], values: [] }) }}> C</button></div>
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
