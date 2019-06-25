import * as React from "react";

interface IProps {
    name: string;
}
export const NameField_Normal: React.FC<IProps> = (props) => {
    const { children, name } = props;
    return <span>{props.name}</span>;
};
class NameField extends React.Component<IProps, {}> {
    render () {
        // Got to use this. to access inherited props
        return <div>{this.props.name}</div>
    }
}

// export const NameField2: React.FC = () => {
//     return "Kalle";
// };

export const NameBlock: React.FC<{ name: string }> = (props) => {
    return <div>
        <div>Name:</div> 
        <div><NameField name={props.name}></NameField></div>
        </div>
};