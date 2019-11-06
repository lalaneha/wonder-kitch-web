import React, { Component } from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import API from "../utils/API";
<<<<<<< HEAD
// import Alert from "../components/Alert";
// import axios from 'axios';
import { Input, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
// import querystring from "querystring";
=======
import { Input, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
>>>>>>> c02e215c967cb5c8a0f4cf924e9959ef604ee5a5

class Inventory2 extends Component {
  state = {
    file: null,
    receiptResults:[],
    itemName:"",
    itemQuantity:"",
    DBItems:[]
  };

   // componentDidMount() {
  //   API.getAllItems()
  //     .then(res => this.setState({ DBItems: res.data.message }))
  //     .catch(err => console.log(err));
  // }

handlePictureChange=event=>{
  this.setState({
      file: event.target.files[0],
      loaded: 0
  })
}

handleAddItemsSubmit = event => {
  event.preventDefault();
}


handlePictureSubmit=event=>{
  event.preventDefault();
    API.takePicture(this.state.file) 
    .then(res => {
      this.setState({receiptResults:res.data.annotations})
    })
    .catch(err => console.log(err));
        }
        
        handleInputChange = event => {
          const {name ,value} =event.target;
          this.setState({ [name]: value });
        };
        
        handleFormSubmit = event => {
          const id=1;
          event.preventDefault();          
          this.setState({ DBItems: [id,this.state.itemName, this.state.itemQuantity] })
        }

        render() {
          return (
            
            <div>
      <Container style={{ minHeight: "80%" }}>
      <Row>
          <Col size="md-6">
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
        <div>
    {this.state.receiptResults.length ? (
      <div>
              <List>
                {this.state.receiptResults.map(result => (
                  <ListItem key={result.image}>
                      <img alt="recipe" src= {result.image}  height="100px" width="100px"></img>
                  
                      <strong>
                        {result.annotation}
                      </strong>
                      <p>
                        Quantity:
                        <Input                
                // value={this.state.search}
                onChange={this.handleInputChange}
                // name="search"
                placeholder="quantity in numbers"
              />
                      </p>
                    
                  </ListItem>
                ))}
              </List>
               <button
               onClick={this.handleAddItemsSubmit}
             >
                 Add items
             </button>
             </div>
            ) : (
              <h4>Upload your receipt to Display</h4>
            )}
    </div>
    </Col>
    <Col size="md-6" >
    <strong>
    Item:
    </strong>
    <Input
                value={this.state.itemName}
                onChange={this.handleInputChange}
                name="itemName"
                placeholder="Name of the item"
              />
    <strong>
    Quantity:
    </strong>
    <Input
                value={this.state.itemQuantity}
                onChange={this.handleInputChange}
                name="itemQuantity"
                placeholder="Quantity in numbers"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Add item
              </FormBtn>
              <div>
    {this.state.DBItems.length ? (
              <List>
                {this.state.DBItems.map(result => (
                  <ListItem key={result[0]} >
                    
                      <strong>
                        {result[1]}
                        {result[2]}
                      </strong>
                    
                  </ListItem>
                ))}
              </List>
            ) : (
              <h4>No items in your kitchen</h4>
            )}
    </div>
      </Col>
        </Row>
      </Container>
      </div>
    
    );
    }
};

export default Inventory2;
