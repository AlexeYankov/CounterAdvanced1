import React,{ButtonHTMLAttributes, DetailedHTMLProps}  from 'react';

type ButtonTypes = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

// type AdvancedButtonTypes = ButtonTypes & {
//     className: string
// }

const Button: React.FC<ButtonTypes> = ({...restProps}) => {
    return (
        <div>
            <button
                {...restProps}
            />
        </div>
    );
};

export default Button;