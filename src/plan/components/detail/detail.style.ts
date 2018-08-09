import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { grey } from '../../../shared/variables.style';
export { Info, InfoRow, InfoLabel, InfoValue } from '../common.style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubHeader = styled.div`
  color: ${grey};
`;
export const Header = styled.div`
  font-size: large;
  font-weight: bold;
`;

export const EditContainer = styled(Button)`
  && {
    position: absolute;
    top: 0;
    right: 0;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
