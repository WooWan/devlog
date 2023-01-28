import React, {useState} from 'react';
import ToggleButton from "./ToggleButton";
import ToggleOn from "./ToggleOn";

type Props = {
    children: React.ReactNode
}
const Toggle = ({children}: Props) => {
    const [on, setOn] = useState(false);
    console.log(children);
    const handleClick = () => setOn(!on);
    return (
        <>
            <ToggleButton onClick={handleClick}>Toggle</ToggleButton>
            <ToggleOn on={on}>{children}</ToggleOn>
        </>
    );
};

export default Toggle;
