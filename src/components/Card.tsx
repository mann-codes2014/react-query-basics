import React, {ReactNode} from 'react';

type CardPropType = {
    children: ReactNode
}
export const Card = ({children}: CardPropType) => {
    return (
        <div style={{
            border: '3px solid #FF5722',
            borderRadius: '10px',
            textAlign: 'center',
            padding: '5px',
            margin: '5px',
            boxShadow: '5px 10px 8px #888888'
        }}>{children}</div>
    );
}
