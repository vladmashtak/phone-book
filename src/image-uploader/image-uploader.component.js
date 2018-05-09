import React, { Component } from 'react';
import './image-uploader.component.css';

class ImageUploader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageSrc: '/image.png'
    };

    this.reader = new FileReader();
    this.reader.onloadend = () => {
      const {input: { onChange }} = this.props;

      this.setState({imageSrc: this.reader.result});
      onChange(this.reader.result);
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.meta.pristine &&  nextProps.meta.pristine) {
      this.setState({imageSrc: '/image.png'})
    }
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
    const {input, type} = this.props;
    delete input.value; // dirty hack for image upload;

    return (
      <div>
        <div className='ui small image image-uploader__avatar'>
          <img src={this.state.imageSrc} alt='avatar'/>
          <div className='image-uploader__add-link' onClick={() => this.inputFile.click()}><span>+</span></div>
        </div>
        <input id='input-image' {...input} type={type} accept='image/*' style={{display: 'none'}} onChange={this.onChangeAvatarImage}/>
      </div>
    );
  }
}

export default ImageUploader;