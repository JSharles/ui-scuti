import React from "react";
import styled from "styled-components";

const makeResponsiveComponent = (rulesets, tagName = "div") =>
  styled(tagName)`
    ${buildStyles(rulesets)};
  `;

const buildStyles = rulesets =>
  rulesets.reduce(
    (cssString, { constraint, width, rules }) =>
      `${cssString} @media (${constraint}-width: ${width}) { ${rules} }`,
    ""
  );

export const hideAt = breakpoints => {
  // console.log('1 ',breakpoints)
  // console.log('2 ',Object.entries(breakpoints))
  const rulesets = Object.entries(breakpoints).reduce(
    (rulesets, [constraint, width]) => [
      ...rulesets,
      {
        constraint,
        width,
        rules: `display: none;`,
      }
    ],
    []
    );
    
    // console.log('3 ', rulesets)
  return makeResponsiveComponent(rulesets);
};

export const Breakpoint = ({ min, max, children }) => {
  const Component = hideAt({ min, max });
  return <Component>{children}</Component>;
};

export default makeResponsiveComponent;
