import React, { Component } from "react";
import { Row, Col, Container } from 'reactstrap';

class CardTitles extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Container className="text-center text-uppercase pl-4 pr-4 pt-2" >
          <Row className="mb-2">
            <Col xs={2}>Id</Col>
            <Col xs={2}>City</Col>
            <Col xs={2}>Phone</Col>
            <Col xs={5}>Name</Col>
            <Col>Remove</Col>
          </Row>
        </Container>
    );
  }
}
export default CardTitles;
