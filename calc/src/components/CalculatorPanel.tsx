import * as React from "react";
import { NameField } from "./NameField";

interface INameBlockProps {
    name: string;
    lastName: string;
}

// export const NameField2: React.FC = () => {
//     return "Kalle";
// };

export const NameBlock: React.FC<INameBlockProps> = (props) => {
    const vals = ["A", 1, null].map((x, i) => <p>{i}: {x}</p>);
    return (
        <div>
            {vals}
            <div>Name:</div> 
            <div><NameField name={props.name} lastName={props.lastName}></NameField></div>
        </div>);
};