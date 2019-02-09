import React, { Component } from "react";
import { connect } from "react-redux";
import Block from "../components/atomic/Block";
import CharacterCard from "../components/nested/CharacterCard";
import Loader from "../components/nested/Loader";
import {
  getCharacterDetail,
  resetCharacter
} from "../globalstate/actions/characterdetail";
import Retry from "../components/nested/Retry";
import { isDefined } from "../utils";

class CharacterDetail extends Component {
  constructor(props) {
    super(props);
    this.onNavigateBack = this.onNavigateBack.bind(this);
  }
  onNavigateBack() {
    this.props.history.goBack();
  }
  componentWillUnmount() {
    this.props.resetCharacter();
  }
  componentDidMount() {
    const characterID = isDefined(this.props.selectedCharacterID)
      ? this.props.selectedCharacterID
      : this.props.match.params.id;
    if (characterID) this.props.getCharacterDetail(characterID);
    else this.props.history.replace("/");
  }
  render() {
    console.log(this.props.character);
    return (
      <Block cName="row">
        {this.props.fetching && <Loader />}
        {this.props.failed && (
          <Retry retryAction={this.props.GetAllCharacters} />
        )}

        {this.props.character && (
          <CharacterCard
            {...this.props.character}
            cName="row"
            onNavigateBack={this.onNavigateBack}
          />
        )}
      </Block>
    );
  }
}

function mapStateToProps({ characterDetailReducer }) {
  const {
    fetching,
    failed,
    selectedCharacterID,
    character
  } = characterDetailReducer;
  return {
    fetching,
    failed,
    selectedCharacterID,
    character
  };
}

export default connect(
  mapStateToProps,
  { getCharacterDetail, resetCharacter }
)(CharacterDetail);
