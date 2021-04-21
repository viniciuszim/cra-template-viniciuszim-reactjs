import React from 'react';

import { Container, Logo, Title, Description, Illustration } from './styles';

const Dashboard = ({
  title = 'ReactJS',
  description = 'TypeScript, ReactJS and Styled Components',
}) => {
  return (
    <Container>
      <Logo
        src="/linos-automation-packstation/img/logo.svg"
        height={200}
        alt="ReactJS Image"
      />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Illustration
        src="/linos-automation-packstation/img/hero-illustration.svg"
        alt="Developer Image"
      />
    </Container>
  );
};

export default Dashboard;
