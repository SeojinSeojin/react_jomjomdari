import styled from 'styled-components';

export const flexLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const flexCenterLayout = styled(flexLayout)`
  justify-content: center;
`;

export const flexColumnLayout = styled(flexLayout)`
  flex-direction: column;
`;

export const flexColumnCenterLayout = styled(flexColumnLayout)`
  align-items: center;
  justify-content: center;
`;
