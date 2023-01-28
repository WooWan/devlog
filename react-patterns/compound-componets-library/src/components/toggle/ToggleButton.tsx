import React from 'react';

type Props = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}


const ToggleButton = ({ onClick, children }: Props) => {
    return <button onClick={onClick}>{children}</button>;
};

export default ToggleButton;
