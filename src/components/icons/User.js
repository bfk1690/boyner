import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const SvgUser = props => (
  <Svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    className=""
    {...props}>
    <G data-name="user people person users man">
      <Path d="M23.74 16.18a1 1 0 1 0-1.41 1.42A9 9 0 0 1 25 24c0 1.22-3.51 3-9 3s-9-1.78-9-3a9 9 0 0 1 2.63-6.37 1 1 0 0 0 0-1.41 1 1 0 0 0-1.41 0A10.92 10.92 0 0 0 5 24c0 3.25 5.67 5 11 5s11-1.75 11-5a10.94 10.94 0 0 0-3.26-7.82Z" />
      <Path d="M16 17a7 7 0 1 0-7-7 7 7 0 0 0 7 7Zm0-12a5 5 0 1 1-5 5 5 5 0 0 1 5-5Z" />
    </G>
  </Svg>
);

export default SvgUser;
