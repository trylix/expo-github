import styled from 'styled-components';

import { ReactComponent as headerBg } from '~/assets/images/header.svg';
import { ReactComponent as mountainBg } from '~/assets/images/mountain.svg';

export const TopBackground = styled(headerBg)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: auto;
  overflow: hidden;
  z-index: -1;
`;

export const BottomBackground = styled(mountainBg)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: auto;
  overflow: hidden;
  z-index: -1;
`;
