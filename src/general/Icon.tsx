import * as React from 'react';
import styled from '../styled-components';

const StyledSvg = styled.svg`
  display: inline-block;
  fill: currentColor;
  height: ${props => props.height || 18}px;
  width: ${props => props.width || 18}px;
  user-select: none;
`;

export interface IconProps {
  /**
   * Allows you to redefine what the coordinates without units mean inside an svg element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the svg will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: string;
}

const Icon: React.SFC<IconProps> = props => {
  return <StyledSvg focusable="false" {...props} />;
};

Icon.defaultProps = {
  viewBox: '0 0 24 24',
};

export default Icon;
