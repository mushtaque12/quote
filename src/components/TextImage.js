import React, { Component } from "react";

class TextImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ""
    };
  }

  componentDidMount() {
    let canvasTxt = document.getElementById("canvasComponent").getContext("2d");
    canvasTxt.canvas.width = canvasTxt.measureText(this.props.name).width;
    canvasTxt.fillText(this.props.name, this.props.x, this.props.y);
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
