import React from 'react';

type ButtonProps = {
    title: string;
    handleClick:()=>void
}
export const Button = ({title,handleClick}: ButtonProps) => {
    return (
        <button style={{
            width:'100%',
            background: 'linear-gradient(to right, #FF5722 0%, #916ECF 99%)',
            color: 'white',
            borderRadius: '28px',
            padding: '10px 20px 10px 20px',
            border: 0
        }} onClick={handleClick}>{title}</button>
    );
}

