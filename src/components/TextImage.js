import React, { Component } from "react";

class TextImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ""
    };
  }

  componentDidMount() {
    const wrapText = (canvasTxt, text, x, y, maxWidth, lineHeight) => {
      var words = text.split(" ");
      var line = "";
      console.log(x);
      for (let n = 0; n < words.length; n++) {
        let testLine = line + words[n] + " ";
        let metrics = canvasTxt.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          canvasTxt.fillText(line, x, y);
          line = words[n] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      canvasTxt.fillText(line, x, y);
    };
    let canvasTxt = document.getElementById("canvasComponent").getContext("2d");
    let maxWidth = 500;
    let lineHeight = 25;
    let x = 0;
    let y = 100;
    canvasTxt.font = "16px Permanent Marker";
    wrapText(canvasTxt, this.props.name, x, y, maxWidth, lineHeight);
    this.setState({
      img: canvasTxt.canvas.toDataURL()
    });
  }

  render() {
    console.log(this.props.name);
    return (
      <div>
        <canvas id="canvasComponent" style={{ display: "none" }} />
        {this.state.img.length > 0 ? (
          <img id="imageComponent" alt="" src={this.state.img} />
        ) : null}
      </div>
    );
  }
}

export default TextImage;
