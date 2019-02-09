import React, { Component } from "react";
import { connect } from "react-redux";
import { Collapse, Button, CardBody, CardHeader, Card, Row, Col, Container } from 'reactstrap';
import cn from "classnames";
import CardTitles from "./CardTitles";

class CardItem extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onDeleted = this.onDeleted.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, status: 'Closed', delete: false, deleted: false };
  }

  onDelete() {
    this.setState({ status: 'Deleting...', delete: true });
  }

  onDeleted() {
    this.setState({ status: 'Deleted', deleted: true });
  }

  toggle() {
    if (!!this.props.children)
      this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const { children, id, city, phone, name } = this.props;
    return (
      !this.state.deleted &&
      (<Collapse
        isOpen={!this.state.delete}
        onExited={this.onDeleted}>
        <Card className="m-0">
          <CardHeader
            className={cn("btn btn-light p-1",
              { "non-btn": !children }
            )}
            onClick={this.toggle}>
            <Container>
              <Row>
                <Col xs={2}>{id}</Col>
                <Col xs={2}>{city}</Col>
                <Col xs={2}>{phone}</Col>
                <Col xs={5}>{name}</Col>
                <Col>
                  <Button close onClick={this.onDelete}></Button>
                </Col>
              </Row>
            </Container>
          </CardHeader>
          {!!children && <Collapse isOpen={this.state.collapse}>
            <CardBody className="p-2 pb-4">
              <CardTitles />
              {children}
            </CardBody>
          </Collapse>}
        </Card>
      </Collapse>)
    );
  }
}

function mapStateToProps({ mainPageReducer }) {
  const { fetching, failed, info, characters } = mainPageReducer;
  return {
    fetching,
    failed,
    info,
    characters
  };
}

export default connect(
  mapStateToProps,
  {}
)(CardItem);
