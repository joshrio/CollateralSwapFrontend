import styled from "styled-components";

export const Body = styled.div`
  min-height: 360px;
  padding: 20px;
  display: flex;
  height: 100%;
  width: auto;
  flex-direction: column;
`;

export const Image = styled.img`
  height: auto;
  width: auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  justify-content: center;
`;
export const Microcopy = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const Title = styled.div`
  font-family: dinBold;
  font-size: 20px;
  color: #2a2a2a;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
`;

export const Description = styled.div`
  font-family: dinRegular;
  font-size: 16px;
  color: #2a2a2a;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
`;
