import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** prop description goes here */
}

export const Page: FC<Props> = props => {

  const Wrapper = styled.div`
display: flex;
flex: 1;
  background: #fffff02d;
  border: 1pt solid red;
  `;

  return (
    <Wrapper>

    </Wrapper>
  );
};

export default Page;
