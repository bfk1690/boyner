import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgHome = props => (
  <Svg
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    className=""
    {...props}>
    <Path d="M30.854 16.548A2.216 2.216 0 0 1 28.764 18H28v11a1 1 0 0 1-1 1h-6v-7c0-2.757-2.243-5-5-5s-5 2.243-5 5v7H5a1 1 0 0 1-1-1V18h-.765a2.215 2.215 0 0 1-2.09-1.451 2.218 2.218 0 0 1 .62-2.47l11.679-11.06a3.718 3.718 0 0 1 5.112 0l11.707 11.086c.678.591.922 1.561.591 2.443z" />
  </Svg>
);

export default SvgHome;
