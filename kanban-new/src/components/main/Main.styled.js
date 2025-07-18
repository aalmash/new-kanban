import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
`;
