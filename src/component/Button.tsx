import React from 'react';

type ButtonPropsType = {
    name: string,
    callback: () => void
    disabled?: boolean
    className: string
}
export const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button onClick={props.callback}
                    disabled={props.disabled}
                    className={props.className}>
                {props.name}
            </button>
        </div>
    )
}

