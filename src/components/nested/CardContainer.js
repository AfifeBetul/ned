import React, { Component } from "react";
import { connect } from "react-redux";
import { Collapse, Button, CardBody, CardHeader, Card, Row, Col, Container } from 'reactstrap';
import CardItem from "./CardItem";
import CardTitles from "./CardTitles";
import cn from "classnames";

class CardContianer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render() {
    const { children } = this.props;
    return (
      <Container className="mt-4">
        <CardTitles />
        <CardItem>
          <CardItem>
            <CardItem />
          </CardItem>
        </CardItem>
        <CardItem />
        <CardItem />
        <CardItem />
      </Container>
    );
  }
}

function mapStateToProps({ mainPageReducer }) {
  const { failed, info, characters } = mainPageReducer;
  return {
    failed,
    info,
    characters
  };
}

export default connect(
  mapStateToProps,
  {}
)(CardContianer);
