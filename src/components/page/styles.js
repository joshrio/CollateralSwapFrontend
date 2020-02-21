import styled from "styled-components";
import pattern_light from "../../assets/backgrounds/pattern_light.svg";
import oval_full from "../../assets/backgrounds/oval_full.svg";

export const Container = styled.div`
  background: #f9f9f9;
  background-image: url(${pattern_light});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  position: absolute;
  padding-top: 40px;
`;

export const First = styled.div`
  background-image: url(${oval_full});
  background-repeat: no-repeat;
  height: 300px;
  width: 300px;
  bottom: 0;
  left: 0;
  position: absolute;
  z-index: 0;
  transform: rotate(90deg);
`;

export const Second = styled.div`
  background-image: url(${oval_full});
  background-repeat: no-repeat;
  height: 300px;
  width: 300px;
  top: -64px;
  right: 0;
  position: absolute;
  z-index: 0;
  transform: rotate(-90deg);
`;
