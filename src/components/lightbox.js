import React, { Component } from "react";
import {Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from 'react-images';
import '../styles/lightbox.css'



class Lightbox extends Component {
	constructor(props, context) {
    super(props, context);
    this.setState({
      currentImageIndex: 0

    });

		this.images = props.images;
    this.currentImage = props.currentImage;
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(currentImage, currentImageIndex) {
		this.currentImage = currentImage;
    this.setState({ 
      show: true, 
      currentImageIndex: currentImageIndex
    });
  }

  gotoPrevious () {
		this.setState({
			currentImageIndex: this.state.currentImageIndex - 1,
		});
	}
	gotoNext () {
		this.setState({
			currentImageIndex: this.state.currentImageIndex + 1,
		});
  }
  handleClickImage () {
		if (this.state.currentImageIndex === this.images.length - 1) return;

		this.gotoNext();
	}

  render() {
    return (
        <Box
        currentImage={this.state.currentImageIndex}
        images={this.images}
        isOpen={this.state.show}
        // onClickImage={this.handleClickImage}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.handleClose}
        />
    );
  }
}

export default Lightbox;