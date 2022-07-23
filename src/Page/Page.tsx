import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
// @ts-ignore
import { Breakpoint } from "../make-responsive-component";
import {
  MediumAndUp,
  LargeAndUp,
  SmallAndDown,
  MediumAndDown,
  MediumOnly
} from "../breakpoints.tsx";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** prop description goes here */
}

export const Page: FC<Props> = props => {


  const objTest1 = {
    flex: 1,
    direction: "row"
  };

  // @ts-ignore
  const newState: any = Object.entries(objTest1).reduce(

    (newState, [property, value]) => [
      ...newState,
      {
        property,
        value,
        third: "default"
      }
    ], []);


  console.log(newState);




  const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  text-align: center;
`;

  return (
    <Wrapper>
      <SmallAndDown>sm and down</SmallAndDown>
      <MediumAndUp>med and up</MediumAndUp>
      <MediumAndDown>med and down</MediumAndDown>
      <MediumOnly>medium only</MediumOnly>
      <LargeAndUp>lg and up</LargeAndUp>
      <Breakpoint max="1200px">only on huge width</Breakpoint>
    </Wrapper>
  );
};

export default Page;
