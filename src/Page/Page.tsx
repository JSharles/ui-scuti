import React, { FC, HTMLAttributes } from 'react';
//import './Page.style.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
    /** prop description goes here */
};

export const Page: FC<Props> = (props) => {
    return (
        <div>
            <p>Page</p>
        </div>
    );
};

export default Page;
