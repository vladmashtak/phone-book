import React, { Component } from 'react';
import './image-uploader.component.css';

class ImageUploader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageSrc: '/image.png'
    };

    this.reader = new FileReader();

    this.reader.onloadend = () => this.setState({imageSrc: this.reader.result});
  }

  componentDidMount() {
    this.inputFile = document.getElementById('input-image');
  }

  onChangeAvatarImage = () => {
    const img = this.inputFile.files[0];

    if (img) {
      this.reader.readAsDataURL(img);
    }
  };

  render() {
    return (
      <div>
        <div className='ui small image image-uploader__avatar'>
          <img src={this.state.imageSrc} alt='avatar'/>
          <div className='image-uploader__add-link' onClick={() => this.inputFile.click()}><span>+</span></div>
        </div>
        <input id='input-image' type='file' accept='image/*' style={{display: 'none'}} onChange={this.onChangeAvatarImage}/>
      </div>
    );
  }
}

export default ImageUploader;