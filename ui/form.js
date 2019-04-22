import styled from "styled-components";
import is from "styled-is";
import colors from "./colors";

export const Form = styled.form`
  padding: 50px;
  margin: 0 auto;
  input {
    width: 300px;
    height: 40px;
    border-radius: 20px;
    border-style: none;
    padding: 0 0 0 20px;
    font-size: 11px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px;
  }
  ${is("changePass")`
      padding: 10px;
   `};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  ${is("button")`
  display:block;
  text-align: right;
  margin: 25px 0;
  `};
`;

export const Label = styled.label`
  font-size: 20px;
  color: "red";
  padding: 10px 0 5px 20px;
`;
