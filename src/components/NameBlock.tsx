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
    return (
        <div>
            <div>Name:</div> 
            <div><NameField name={props.name} lastName={props.lastName}></NameField></div>
        </div>);
};