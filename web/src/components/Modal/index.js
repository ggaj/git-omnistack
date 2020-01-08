import React from 'react';

import { Container, Content } from './styles';

export default function Modal({ children, size }) {
  return (
    <Container>
      <Content size={size}>{children}</Content>
    </Container>
  );
}
