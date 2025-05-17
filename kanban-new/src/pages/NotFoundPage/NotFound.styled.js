import styled from "styled-components";

export const Block404 = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  padding-top: 50px;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
