import styled from "styled-components";
import colors from "ui/colors";
import is from "styled-is";

export const Outer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 500px;
`;

export const ImgContainer = styled.div`
  display: flex;
  height: 400px;
  justify-content: center;
`;

export const LoginPage = styled.div`
  width: 100%;
  display: flex;
  opacity: ${p => (p.application ? 0 : 1)};
  flex-direction: column;
`;
export const ApplicationPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  opacity: ${p => (p.application ? 1 : 0)};
`;
