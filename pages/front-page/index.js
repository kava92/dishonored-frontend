import React from "react";
import * as restApi from "lib/rest-api";
import {
  Outer,
  Logo,
  ImgContainer,
  LoginPage,
  ApplicationPage
} from "./styles";
import { GlobalStyle } from "ui/global";
import { Form, FormGroup, Label } from "ui/form";
import { LoginButton, ShowApplication } from "ui/buttons";

export default class FrontPage extends React.Component {
  state = {
    email: "",
    password: "",
    application: false
  };
  onSubmit = async e => {
    const { email, password } = this.state;
    this.setState({ password: "test", email: "test@gmail.com" });
    const data = await restApi.login({ email, password });
    console.log(data);
  };
  ShowApplication = async e => {
    this.setState({ application: true });
  };
  render() {
    const { email, password, application } = this.state;
    console.log(application);
    return (
      <Outer>
        <GlobalStyle />
        <ImgContainer>
          <Logo src="/static/logo-frontpage.svg" />
        </ImgContainer>
        <LoginPage application={application}>
          <Form>
            <FormGroup>
              <Label>Email</Label>
              <input
                type="email"
                name="email"
                //   value={username}
                //   onChange={this.onInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <input
                type="password"
                name="password"
                //   value={password}
                //   onChange={this.onInputChange}
              />
            </FormGroup>
            <FormGroup button>
              <LoginButton type="button" onClick={this.onSubmit}>
                {/* {loggingIn ? "Processing" : "Login"} */} Login
              </LoginButton>
              {/* <ShowApplication type="button" onClick={this.ShowApplication}>
                Apply to us!
              </ShowApplication> */}
            </FormGroup>
          </Form>
        </LoginPage>
      </Outer>
    );
  }
}
