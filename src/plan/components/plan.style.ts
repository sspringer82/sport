import { Paper } from '@material-ui/core';
import styled from 'styled-components';
import { margin, padding } from '../../shared/variables.style';

export const Container = styled(Paper)`
  && {
    padding: ${padding};
    margin: ${margin};
  }
`;
