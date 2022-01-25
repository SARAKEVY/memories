import React from 'react';

class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
// {/* <img src={this.state.file} height="300" />

// <img src={this.state.file} className="widthSet" />

// <img src={this.state.file} className="heightSet" /> */}

}

  render() {

    return (
      <div>


        <input type="file" wi   onChange={this.handleChange} />
        
<div><img src={this.state.file} className="divPic-border" alt="" /></div>


      </div>
    );
  }
}
export default  Upload;