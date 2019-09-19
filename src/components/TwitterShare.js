import React from "react";

const TwitterShare = ({ quote, author }) => {
  return (
    <React.Fragment>
      <a
        href={`https://twitter.com/intent/tweet?text= ${quote} ${author}`}
        target="_blank"
        title="Post this quote on twitter!"
        id="tweet-quote"
      >
        <i className="fab fa-twitter twitter-icon" />
        Share on
      </a>
    </React.Fragment>
  );
};

export default TwitterShare;
