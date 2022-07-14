import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    /**Provides the button title */
    children: ReactNode;
    /**Allows to apply different style props */
    variant: 'primary' | 'secondary';
}

/**this is a test button */
export const Button = ({ children, variant = 'primary', ...props }: Props) => {
    return (
        <button {...props} style={{
            backgroundColor: variant === 'primary' ? 'blue' : 'gray',
            color: 'white',
            borderRadius: 8,
            border: 'none',
            padding: 20,
            cursor: 'pointer'
        }}>
            {children}
        </button>
    );
};
