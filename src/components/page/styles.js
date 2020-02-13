import styled from "styled-components";
import pattern_light from "../../assets/backgrounds/pattern_light.svg";
import oval from "../../assets/backgrounds/oval.svg";

export const Container = styled.div`
  background: #f9f9f9;
  background-image: url(${pattern_light});
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 74px);
`;

export const First = styled.div`
  background-image: url(${oval});
  background-repeat: no-repeat;
  height: 670px;
  width: 670px;
  bottom: 0;
  left: 0;
  position: absolute;
  z-index: 100;
`;

export const Second = styled.div`
  background-image: url(${oval});
  background-repeat: no-repeat;
  height: 670px;
  width: 670px;
  top: 0px;
  right: 0px;
  position: absolute;
  z-index: 100;
`;
