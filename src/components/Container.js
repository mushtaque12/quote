import React, { Component } from "react";
import axios from "axios";
import copy from "clipboard-copy";
import QuoteBox from "./QuoteBox";
import Button from "./Button";
// import TwitterShare from "./TwitterShare";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    axios.get(url).then(res => {
      let data = res.data.quotes;
      let quoteNum = Math.floor(Math.random() * data.length);
      let randomQuote = data[quoteNum];

      this.setState({
        quote: randomQuote["quote"],
        author: randomQuote["author"]
      });
    });
  }

  getNewQuote = () => {
    this.getQuote();
  };

  render() {
    const { quote, author } = this.state;
    return (
      <div id="wrapper">
        <div id="quote-box">
          <h1 className="title">Quote of the day</h1>
          <QuoteBox quote={quote} author={author} />
          <div id="buttons">
            {/* <TwitterShare quote={quote} author={author} /> */}
            <Button
              id="new-quote"
              title="New Quote"
              onClick={this.getNewQuote}
            />
            <Button id="copy" title="Copy" onClick={() => copy(quote)} />
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
