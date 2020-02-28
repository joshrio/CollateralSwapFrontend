import styled from "styled-components";

export const Body = styled.div`
  min-height: 360px;
  height: auto;
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const Button = styled.button`
  background: rgba(0, 0, 0, 0);
  height: 40px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  min-height: 595px;
  height: auto;
  width: 100%;
  max-width: 424px;
  background: #fafafa;
  border: 1px solid #dcdcdc;
  box-shadow: 0 5px 10px 0 rgba(127, 127, 127, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  z-index: 0;
`;

export const Description = styled.div`
  font-family: dinRegular;
  font-size: 18px;
  color: #544f4f;
  letter-spacing: 0;
  line-height: 27px;
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
  padding-top: 4px;
`;

export const Tag = styled.div`
  font-family: dinBold;
  font-size: 13px;
  color: white;
  background: #07849f;
  letter-spacing: 0;
  padding: 4px 8px;
  text-transform: uppercase;
  padding-top: 6px;
  border-radius: 4px;
`;

export const Headline = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
