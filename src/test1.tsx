import * as React from "react";

interface IProps {
    name: string;
}
export const NameField: React.FC<IProps> = (props) => {
    const { children, name } = props;
    return <span>{props.name}</span>;
};

// export const NameField2: React.FC = () => {
//     return "Kalle";
// };

export const NameBlock: React.FC<{ name: string }> = (props) => {
    return <div>
        <div>Name:</div> 
        <NameField name={props.name}></NameField>
        </div>
};