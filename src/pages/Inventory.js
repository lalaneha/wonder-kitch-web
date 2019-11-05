import React, { Component } from "react";
import Container from "../components/Container";
// import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import axios from 'axios';
import { Input, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";

class Inventory extends Component {
  state = {
    file: null
  };

handlePictureChange=event=>{
  this.setState({
      file: event.target.files[0],
      loaded: 0
  })
}

handlePictureSubmit=event=>{
    event.preventDefault();
    console.log(this.state.file)
    const data = new FormData()
    data.append('file', this.state.file)
    axios({
      method:"POST",
      body:data,
      url:"http://localhost:3001/takePicture"
    })
      .then(res => {
        if (res.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res)
        // this.setState({results:res.data.results})
        // this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  }

render() {
    return (

      <div>
      <Container style={{ minHeight: "80%" }}>
        <form>
        <Input
                onChange={this.handlePictureChange}
                type="file"
                encType="multipart/form-data"
                name="file"
              />
              <FormBtn
                onClick={this.handlePictureSubmit}
              >
                  Upload Picture
              </FormBtn>
        </form>
      </Container>
      </div>
    
    );
    }
};

export default Inventory;
