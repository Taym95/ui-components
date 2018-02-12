import * as React from 'react';
import SvgIcon from '../Icon';

const IconPause: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </SvgIcon>
);

export default IconPause;
