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
    console.log('event.target.files[0]',event.target.files[0])
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
    this.props.onChildClick(event.target.files[0]);
    
// {/* <img src={this.state.file} height="300" />

// <img src={this.state.file} className="widthSet" />

// <img src={this.state.file} className="heightSet" /> */}

}

  render() {

    return (
      <div>


        <input type="file"    onChange={this.handleChange} />
        
<div><img src={this.state.file} className="divPic-border" alt="" /></div>


      </div>
    );
  }
}
export default  Upload;