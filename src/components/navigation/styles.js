import styled from "styled-components";

export const Container = styled.div`
  background: #07849f;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  height: 74px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  font-family: dinRegular;
  font-size: 17px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 27px;
  z-index: 1000;
`;

export const Button = styled.button`
  background: #07849f;
  border: 1px solid #066a7f;
  border-radius: 4px;
  padding: 14px 20px;
  color: white;
  font-family: dinRegular;
  font-size: 16px;
  padding-top: -2px;
  animation: 1000ms;

  &:hover {
    background: #066a7f;
    cursor: pointer;
    animation: 1000ms;
  }
`;

export const Brand = styled.div`
  font-family: dinBold;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 42px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  text-transform: uppercase;
`;
