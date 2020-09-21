import React, { useState, ChangeEvent } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
// import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import { RouterState } from "connected-react-router";
import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
} from "@material-ui/core";

import { Container, Form } from "./LoginPage.styles";
// import { IUser } from "../../store/user/types";
import { logIn } from "../../store/user/actions";

type LocalStates = {
  email: string;
  password: string;
  user_name?: string;
};

export default function Login() {
  const [loginForm, setLoginForm] = useState<LocalStates>({
    email: "",
    password: "",
  });
  // const states: IUser | RouterState = useSelector(
  //   (state: IUser | RouterState) => state,
  //   shallowEqual
  // );
  const dispatch: Dispatch<any> = useDispatch();

  function handleLoginInput(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setLoginForm((prev: LocalStates) => ({ ...prev, [name]: value }));
  }
  function handleLogin() {
    dispatch(logIn(loginForm));
  }
  return (
    <Container>
      <Form>
        <FormControl>
          <section>
            <TextField
              name="email"
              onChange={handleLoginInput}
              value={loginForm.email}
              label="Usuário"
              type="email"
              variant="outlined"
              aria-describedby="desc-username"
            />
            <FormHelperText id="desc-username">
              Insira seu usuário.
            </FormHelperText>
          </section>
          <section>
            <TextField
              name="password"
              onChange={handleLoginInput}
              value={loginForm.password}
              label="Senha"
              type="password"
              variant="outlined"
              aria-describedby="desc-user-password"
            />
            <FormHelperText id="desc-user-password">
              Insira sua senha.
            </FormHelperText>
          </section>
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Entrar
          </Button>
        </FormControl>
      </Form>
    </Container>
  );
}
