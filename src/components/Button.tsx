import React from 'react';

type ButtonType = {
    title: string


}


const Button = (props: ButtonType) => {
    const callBack = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('f')
    }

    return (
        <div>
            <button onClick={callBack}>{props.title}ff</button>
        </div>
    );
};

export default Button;