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
  height: 360px;
  padding: 20px;
  display: flex;
  height: 100%;
  flex-direction: column;
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

  &:disabled {
    color: rgba(255, 255, 255, 0.5);
    cursor: not-allowed;
  }
`;

export const Form = styled.form`
  height: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Fees = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Bold = styled.div`
  font-family: dinBold;
  font-size: 16px;
  color: #2a2a2a;
  letter-spacing: 0;
  line-height: 24px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.div`
  font-family: dinRegular;
  font-size: 16px;
  color: #2a2a2a;
  letter-spacing: 0;
  line-height: 24px;
`;

export const Footer = styled.div`
  height: auto;
  padding: 0px 20px 20px 20px;
  width: auto;
`;
