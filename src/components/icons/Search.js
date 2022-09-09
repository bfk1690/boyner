import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgSearch = props => (
  <Svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    className=""
    {...props}>
    <Path d="m29.71 28.29-6.5-6.5h-.07a12 12 0 1 0-1.39 1.39s0 .05 0 .07l6.5 6.5a1 1 0 0 0 1.42 0 1 1 0 0 0 .04-1.46ZM14 24a10 10 0 1 1 10-10 10 10 0 0 1-10 10Z" />
  </Svg>
);

export default SvgSearch;
