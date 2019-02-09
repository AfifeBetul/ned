import React, { Component } from "react";
import { connect } from "react-redux";
import Block from "../components/atomic/Block";
import CharacterCard from "../components/nested/CharacterCard";
import Loader from "../components/nested/Loader";
import LazyLoader from "../components/nested/LazyLoader";
import Retry from "../components/nested/Retry";
import {
  getAllCharacters,
  setSelectedCharacter
} from "../globalstate/actions/mainpage";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.onNavigateToCharacter = this.onNavigateToCharacter.bind(this);
    this.renderList = this.renderList.bind(this);
    this.onLoadCharacters = this.onLoadCharacters.bind(this);
  }
  componentDidMount() {
    if (!this.props.characters.length) this.onLoadCharacters();
  }
  onLoadCharacters() {
    const { info, getAllCharacters } = this.props;
    getAllCharacters(info ? info.next : null);
  }
  onNavigateToCharacter(id) {
    this.props.setSelectedCharacter(id).then(() => {
      this.props.history.push("/characterDetail");
    });
  }
  renderList() {
    return this.props.characters.map(item => (
      <CharacterCard
        isDemo
        key={item.id}
        {...item}
        onClick={this.onNavigateToCharacter}
      />
    ));
  }
  render() {
    const { info = {}, fetching, failed } = this.props;
    const list = this.renderList();
    return (
      <Block cName="row">
        {fetching && !list.length && <Loader />}
        {failed && <Retry retryAction={this.props.getAllCharacters} />}
        <Block cName="row">
          <LazyLoader
            loadAction={this.onLoadCharacters}
            hasMore={!!info.next && !fetching}
          >
            {list}
          </LazyLoader>
        </Block>
      </Block>
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
  { getAllCharacters, setSelectedCharacter }
)(MainPage);
