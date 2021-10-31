import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  margin: 8px;
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;

  div {
    margin: 8px;
    text-align: center;
  }
`;

export const WrapperUsername = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin-right: 8px;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`;
