import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
// import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';
import { Button } from '~/styles/components/Button';
import { Container } from '../styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Informe um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <h1>Boas vindas</h1>
        <Input
          name="email"
          label="E-MAIL"
          type="email"
          placeholder="Seu e-mail"
        />
        <Input
          name="password"
          label="SENHA"
          type="password"
          placeholder="Sua senha secreta"
        />

        <Button size="big" type="submit">
          Entrar
        </Button>
        {/* <Link to="/register"> Criar conta gratuita</Link> */}
      </Form>
    </Container>
  );
}
