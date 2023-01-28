import React from 'react';

type Props ={
    on: boolean;
    children: React.ReactNode;
}

const ToggleOn = ({on, children}: Props) => {
    // return on ? children : null;
    console.log('children', children)
    return (
        <>
            {
                on ? (
                    <>{children}</>
                ) : null
            }
        </>
    )
};

export default ToggleOn;
