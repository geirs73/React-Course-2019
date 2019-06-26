import * as React from "react";
import { Operation } from '../CalculatorTypes'

interface IKeyPadProps {
  onPressValue: (val: number) => void;
  onOperatorClick: (op: Operation) => void;
  onResultClick: () => void;
  onResetClick: () => void;
}

export const KeyPad: React.FC<IKeyPadProps> = (props) => {
  // split properties into variables
  const numberButton = (num: number) => {
    return (
      <button onClick={() => onPressValue(num)}>{num}</button>
    );
  }
  const opButton = (op: Operation) => {
    return (
      <button onClick={() => onOperatorClick(op)}>{op}</button>
    );
  }
  const { onPressValue, onOperatorClick, onResultClick, onResetClick } = props;
  return (
    <div>
      <div>
        <div style={{ float: "left", marginLeft: "10px" }}>
          <div>
            {numberButton(7)}
            {numberButton(8)}
            {numberButton(9)}
            {opButton("+")}
          </div>
          <div>
            {numberButton(4)}
            {numberButton(5)}
            {numberButton(6)}
            {opButton("-")}
          </div>
          <div>
            {numberButton(1)}
            {numberButton(2)}
            {numberButton(3)}
            {opButton("*")}
          </div>
          <div>
            {numberButton(0)}
            <button onClick={() => onResetClick()}>C</button>
            <button onClick={() => onResultClick()}>=</button>
            {opButton("/")}
          </div>
        </div>
      </div>
    </div>

  );
};