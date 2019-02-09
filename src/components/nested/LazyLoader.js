import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import Block from "../atomic/Block";
import PropTypes from "prop-types";

function LazyLoader({ children, hasMore, loadAction }) {
  return (
    <InfiniteScroll
      initialLoad={false}
      pageStart={0}
      loadMore={loadAction}
      hasMore={hasMore}
      loader={
        <Block className="loader" key={0}>
          Loading ...
        </Block>
      }
    >
      {children}
    </InfiniteScroll>
  );
}

LazyLoader.propType = {
  hasMore: PropTypes.bool,
  loadAction: PropTypes.func
};

export default LazyLoader;

