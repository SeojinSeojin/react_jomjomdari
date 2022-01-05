import styled from 'styled-components';
import { flexColumnLayout } from '../../styles';

export const Wrapper = styled(flexColumnLayout)`
  padding: 24px;
  background-color: #f6f6f6;
  border-radius: 32px;
  width: 150px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px;
  cursor: pointer;

  & img {
    width: 150px;
    height: 200px;
  }
`;
