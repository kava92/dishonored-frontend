<ApplicationPage application={application}>
  <Form>
    <FormGroup>
      <Label>Nickname</Label>
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
        {/* {loggingIn ? "Processing" : "Login"} */} SendApplication
      </LoginButton>
    </FormGroup>
  </Form>
</ApplicationPage>;
