import * as React from 'react';
import {
  styled,
  StyledComponentClass,
  ThemeInterface,
} from '../../styled-components';

const Code = styled.code`
  background: ${props => props.theme.lightColor};
  border-radius: 3px;
  padding: 0 8px;
`;
Code.displayName = 'Code';

export default Code;
