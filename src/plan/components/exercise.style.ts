import { Paper } from '@material-ui/core';
import styled from 'styled-components';
import { margin, padding } from '../../shared/variables.style';

export const Container = styled(Paper)`
  && {
    display: flex;
    padding: ${padding};
    margin: ${margin};
  }
`;

export const Info = styled.div`
  display: table;
  flex-direction: column;
`;

export const InfoRow = styled.div`
  display: table-row;
`;

export const InfoLabel = styled.div`
  display: table-cell;
  padding-right: ${padding};
`;

export const InfoValue = styled.div`
  display: table-cell;
`;

export const Image = styled.img`
  padding: 0 ${padding};
`;
