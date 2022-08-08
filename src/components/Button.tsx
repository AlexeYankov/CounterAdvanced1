import React,{ButtonHTMLAttributes, DetailedHTMLProps}  from 'react';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

type ButtonTypes = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type AdvancedButtonTypes = ButtonTypes & {
    arrowUp?: object
    arrowDown?: object
}


const Button: React.FC<AdvancedButtonTypes> = ({arrowUp, arrowDown, ...restProps}) => {
    return (
        <div>
            <button
                {...restProps}
            />
        </div>
    );
};

export default Button;