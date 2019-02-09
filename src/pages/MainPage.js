import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../components/nested/Loader";
import {
  getAllCharacters,
  setSelectedCharacter
} from "../globalstate/actions/mainpage";
import { Collapse, Button, CardBody, CardHeader, Card, Row, Col, Container } from 'reactstrap';
import CardItem from "../components/nested/CardItem";
import CardContainer from "../components/nested/CardContainer";

class MainPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    const { fetching } = this.props;
    return (
      <Row>
        {fetching && <Loader />}
        <CardContainer/>
      </Row>
    );
  }
}

function mapStateToProps({ mainPageReducer }) {
  const { fetching } = mainPageReducer;
  return {
    fetching
  };
}

export default connect(
  mapStateToProps,
  { getAllCharacters, setSelectedCharacter }
)(MainPage);
