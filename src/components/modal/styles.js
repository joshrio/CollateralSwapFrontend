import styled from "styled-components";

export const Container = styled.div`
  height: 595px;
  width: 424px;
  background: #fafafa;
  border: 1px solid #dcdcdc;
  box-shadow: 0 5px 10px 0 rgba(127, 127, 127, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  height: auto;
  padding: 20px;
  border-bottom: 1px solid #dcdcdc;
`;

export const Title = styled.div`
  font-family: dinBold;
  font-size: 28px;
  color: #2a2a2a;
  letter-spacing: 0;
  line-height: 42px;
`;

export const Description = styled.div`
  font-family: dinRegular;
  font-size: 18px;
  color: #544f4f;
  letter-spacing: 0;
  line-height: 27px;
`;

export const Body = styled.div`
  height: auto;
  padding: 20px;
  display: flex;
  height: 100%;
`;

export const Button = styled.button`
  background: #07849f;
  border-radius: 4px;
  height: 52px;
  width: 100%;
  color: white;
  font-family: dinBold;
  font-size: 18px;
  padding-top: 8px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Footer = styled.div`
  height: auto;
  padding: 20px;
`;
