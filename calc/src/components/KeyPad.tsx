import * as React from "react";

interface IKeyPadProps {
    onPressValue: (val: number) => void;
    onPlusClick: () => void;
    onResultClick: () => void;
    onResetClick: () => void;
}

// export const NameField2: React.FC = () => {
//     return "Kalle";
// };

export const KeyPad: React.FC<IKeyPadProps> = (props) => {
    // split properties into variables
    const { onPressValue, onPlusClick, onResultClick, onResetClick } = props;
    return (
        <div>
        <div style={{ float: "left" }}>
          <div>
            <button onClick={() => onPressValue(7)}>7</button>
            <button onClick={() => onPressValue(8)}>8</button>
            <button onClick={() => onPressValue(8)}>9</button>
          </div>
          <div>
            <button onClick={() => onPressValue(4)}>4</button>
            <button onClick={() => onPressValue(5)}>5</button>
            <button onClick={() => onPressValue(6)}>6</button>
          </div>
          <div>
            <button onClick={() => onPressValue(1)}>1</button>
            <button onClick={() => onPressValue(2)}>2</button>
            <button onClick={() => onPressValue(3)}>3</button>
          </div>
          <div>
            <button onClick={() => onPressValue(0)}>0</button>
          </div>
        </div>
        <div style={{ float: "left" }}>
          <div><button onClick={(e) => onPlusClick()}>+</button></div>
          <div><button>-</button></div>
          <div><button>/</button></div>
          <div><button>*</button></div>
          <div><button onClick={() => onResultClick()}>=</button>
              <button onClick={(e) => onResetClick()}> C</button></div>
          </div>
        </div>
      
        );
};