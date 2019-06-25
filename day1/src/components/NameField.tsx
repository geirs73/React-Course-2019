import * as React from "react";

interface IProps {
    name: string;
    lastName: string;
}

export const NameField: React.FC<IProps> = (props) => {
    const { children, name } = props;
    return <div><p>{props.name}</p><p>{props.lastName}</p></div>;
};