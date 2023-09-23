

import * as React from 'react';
import { Card, CardBody, Col, Container, FormGroup, Input, Row } from 'reactstrap';

import ProjectList from './ProjectList/ProjectList';

interface IAppProps {}

const Index: React.FunctionComponent<IAppProps> = () => {
  return (
    <Container>
        <ProjectList />
    </Container>
  )
  
  ;
};

export default Index;
