import React, {Component} from 'react';
import axios from 'axios'

class UploadImg extends Component{
state={
    api: "http://api.giphy.com/v1/gifs/random",
    mood: "Happy",
    apikey: "BwtD6SkWywtWl6Y9yOdnlXKbkmezp1M9",
    imageContent: [],
    loaded: 0,
    showpic: false,
    hover: false,
  };

  componentDidMount(){
      console.log(this.props)
  }


runTimer = word => {
    console.log(word);
    console.log(this.state.mood);
    axios
      .get(
        `${this.state.api}?api_key=${this.state.apikey}&tag=${
          this.state.mood
        }&limit=1`
      )
      .then(response => {
        console.log(response.data.data.images.original.url);
        this.setState({
          gifUrl: response.data.data.images.original.url,
          showpic: true,
        });
        console.log(this.state.mood);
      });
  };

toggleHoverOn = () => {
    this.setState({ hover: true });
  };

  toggleHoverOff = () => {
    this.setState({ hover: false });
  };

  handleSelectedFile = (event) =>{
    this.setState({
        selectedFile: event.target.files.file[0],
        loaded: 0,
    })
  };

handleSelectedFile = event =>{
    this.setState({
        selectedFile: event.target.files[0],
        loaded: 0,
    })
}

handleUpload = () =>{
    const reader = new FileReader();
    reader.readAsDataURL(this.state.selectedFile);
    reader.onload = () => {
        let data = reader.result.replace(/^data:(.*;base64,)?/, '');
        if ((data.length % 4) > 0) {
            data += '='.repeat(4 - (data.length % 4));
        }

        console.log(this.state.selectedFile)
        console.log(data);
}
}



render(){

    var imageStyle;
    if (this.state.hover) {
      imageStyle = {
        opacity: 0.7,
        position: "relative",
        cursor: "pointer",
        transition: "0.6s",
        width: "400px",
        height: "400px"
      };
    } else {
      imageStyle = {
        /* kode til hvilken width og height */
        width: "400px",
        height: "400px"
      };
    }
return(
<div>
<input type="file" onChange={this.handleSelectedFile} />
<button onClick={this.handleUpload}>Upload Picture</button>

  <div>
  <input type="file" onChange={this.handleSelectedFile} name="file" id="" />

  <div className="Create-Image">Mood of the day!</div>
  <form id="Query-form">
    <select
      value={this.state.mood}
      onChange={event => this.setState({ mood: event.target.value })}
    >
      <option value="Happy">Happy</option>
      <option value="Lit">Lit</option>
      <option value="Tired">Tired</option>
      <option value="Sad">Sad</option>
      <option value="Putin">Like the king</option>
      <option value="Fail">Like an idiot</option>
      <option value="Playboy">Where the hoes at</option>
      <option value="King">Like Kristoffer Tølbøll</option>
      <option value="Homeless">Like Jonas Grønbek</option>
      <option value="Sheldon">Like Tor browser Tommy</option>
    </select>
  </form>

  <button className="Mood-button" onClick={this.runTimer} >
    Get today's GIF
  </button>
  <p>Mood is: {this.state.mood}</p>
  {this.state.showpic && (
    <div>
      <img
        style={imageStyle}
        src={this.state.gifUrl}
        alt="mood"
        onClick={this.deleteHandler}
        onMouseEnter={this.toggleHoverOn}
        onMouseLeave={this.toggleHoverOff}
        title="Click to delete picture"
      />
    </div>
  )}
</div>
</div>
    )
   }
}

export default UploadImg;
