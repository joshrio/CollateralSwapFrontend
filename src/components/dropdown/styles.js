import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
`;

export const Select = styled.div`
  position: relative;
  display: inline-block;
  background: pink;
  border: 1px solid #dcdcdc;
  border-radius: 4px;

  transition: 500ms;

  &:focus {
    transition: 500ms;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Wrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  top: 62px;
  right: 0px;
  max-height: 200px;
  left: 0px;
  width: auto;
  position: absolute;
  grid-column: 1;
  border-radius: 4px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  background: #f9f9f9;
  border: 1px solid #f9f9f9;
  overflow: auto;
`;

export const Labels = styled.div`
  height: auto;
  width: auto
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const Label = styled.div`
  font-family: dinRegular;
  font-size: 14px;
  color: #544f4f;
  letter-spacing: 0;
  line-height: 21px;
`;

export const Item = styled.li`
  padding: 16px;
  margin-left: -40px;
  width: calc(100% + 8px);
  border-bottom: 1px solid #ccc;
  font-family: dinRegular;
  font-size: 16px;
  line-height: 26px;
  color: black;
  font-weight: regular;
  cursor: pointer;
  background: #fafafa;

  &:hover {
    cursor: pointer;
    background: #fff;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Ticker = styled.div`
  color: black;
  margin-left: 12px;
`;

export const Name = styled.div`
  color: black;
`;

export const Button = styled.button`
    width: 100%;
    height: auto;
    background: #fff;
    outline: none;
    grid-column: 1 / 3;
    padding: 20px;
    border-radius: 3px;
    font-size: 16px;
    color: red;
    display: flex;
    align-items: flex-start;
    border: none;
    cursor: pointer;



&:before{
    content:"";
    position: absolute;
    width: 0px;
    height: 0px;
    border: 7px solid;
    border-color: #2A2A2A transparent transparent transparent;
    right: 16px;
    top: 24px;
`;
