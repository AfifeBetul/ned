import React from "react";
import Image from "../atomic/Image";
import Block from "../atomic/Block";
import Label from "../atomic/Label";
import Paragraph from "../atomic/Paragraph";
import H2 from "../atomic/H2";
import Button from "../atomic/Button";
import PropTypes from "prop-types";

const episodeURL = "https://rickandmortyapi.com/api/episode/";

function CharacterCard({
  id,
  name,
  status,
  species,
  gender,
  origin: { name: originName },
  location: { name: locationName },
  image,
  url,
  created,
  episode = [],
  onClick,
  isDemo,
  onNavigateBack
}) {
  if (isDemo) {
    const onNavigate = function() {
      onClick(id);
    };
    return (
      <Block cName="col m4">
        <Block cName="card black" onClick={onNavigate}>
          <Block cName="card-image waves-effect waves-block waves-light">
            <Image cName="activator" src={image} />
          </Block>
          <Block class="card-content">
            <Label cName="card-title activator orange-text">{name}</Label>
          </Block>
        </Block>
      </Block>
    );
  }

  const episodes = episode
    .reverse()
    .slice(0, 5)
    .map(item => item.replace(episodeURL, ""));
  return (
    <Block cName="col m12 black person">
      <Button
        onClick={onNavigateBack}
        iconName="arrow_back"
        cName="grey"
        text="BACK"
      />
      <H2 cName="header orange-text person-name">{name}</H2>
      <Block cName="card horizontal black">
        <Block cName="card-image">
          <Image src={image} />
        </Block>
        <Block cName="card-stacked">
          <Block cName="card-content">
            <CardRow title="STATUS" value={status} />
            <CardRow title="SPECIES" value={species} />
            <CardRow title="GENDER" value={gender} />
            <CardRow title="ORIGIN" value={originName} />
            <CardRow title="LAST LOCATION" value={locationName} />
            <CardRow
              title="CREATED"
              value={new Date(created).toLocaleDateString()}
            />
            <CardRow title="LAST 5 EPISODES">{episodes.join(",")}</CardRow>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

function CardRow({ title, value, children }) {
  return (
    <Paragraph>
      {title && <Label cName="white-text">{title}</Label>}
      {value && <Label cName="orange-text right">{value}</Label>}
      {children && <Label cName="orange-text right">{children}</Label>}
    </Paragraph>
  );
}
CharacterCard.propType = {
  id: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string,
  origin: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  location: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  image: PropTypes.string,
  url: PropTypes.string,
  episode: PropTypes.array,
  onClick: PropTypes.func,
  isDemo: PropTypes.bool,
  onNavigateBack: PropTypes.func
};

export default CharacterCard;
