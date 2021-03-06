import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px 60px;
  @media (max-width: 765px) {
    flex-flow: column nowrap;
    padding: 20px;
  }
`;