import React from "react";
import Block from "../atomic/Block";

export default function() {
  return (
    <Block cName="loader">
      <Block cName="preloader-wrapper big active ">
        <Block cName="spinner-layer spinner-orange-only">
          <Block cName="circle-clipper left">
            <Block cName="circle" />
          </Block>
          <Block cName="gap-patch">
            <Block cName="circle" />
          </Block>
          <Block cName="circle-clipper right">
            <Block cName="circle" />
          </Block>
        </Block>
      </Block>
    </Block>
  );
}
