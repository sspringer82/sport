import { Paper } from '@material-ui/core';
import styled from 'styled-components';
import { margin, padding } from '../../shared/variables.style';

export const Container = styled(Paper)`
  && {
    position: relative;
    display: flex;
    align-items: center;
    padding: ${padding};
    margin: ${margin};
    overflow: hidden;
  }
`;

export const Name = styled.div`
  flex-grow: 1;
`;

export const LastTime = styled.div``;

const Banner = styled.div`
  position: absolute;
  top: 5px;
  left: -33px;
  border: 1px solid;
  padding: 0 30px;
  transform: rotate(315deg);
`;

export const NextBanner = Banner.extend`
  color: red;
  border-color: red;
`;
export const LastBanner = Banner.extend`
  color: green;
  border-color: green;
`;
