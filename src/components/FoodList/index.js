import React, { Component } from "react";
import Container from "../Container";
import Col from "../Col";
import DeleteBtn from "../DeleteBtn";
import Row from "../Row";
import API from "../../utils/API";
import { Input, FormBtn } from "../Form";
import { List, ListItem } from "../List";
import axios from "axios";
// import Numberinput from "../components/Numberinput";
import { MDBInput } from 'mdbreact';

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
        <div id="FoodListContainer">
        {this.props.groceryResults? (
            <div>
                    <List>
                      {this.props.groceryResults.map((result, i)=> (
                        <ListItem key={i}>
                          <DeleteBtn onClick={this.props.handleReceiptDeleteSubmit.bind(this,i)} >Delete</DeleteBtn>     
                          <img alt="recipe" src={result.image.startsWith("https://spoonacular.com") ? (result.image) : ("https://spoonacular.com/cdn/ingredients_100x100/" + result.image)}  height="75px" width="75px"></img>
                          <Row>
                            <Col size="md-9">
                                <strong>
                                    Item:
                                </strong>
                                <Input
                                    value={result.annotation||""}
                                    onChange={this.props.handleReceiptItemsChange.bind(this,i)}
                                    name="annotation"
                                    placeholder="item name"
                                />
                            </Col>
                            <Col size="md-3">
                                <strong>
                                    Quantity:
                                </strong>
                                <MDBInput id="qtybutton"
                                    value={result.tag||""}
                                    onChange={this.props.handleReceiptItemsChange.bind(this,i)}
                                    name="tag"
                                    type="number"
                                />
                            </Col>
                          </Row>
                           
                        </ListItem>
                      ))}
                    </List>
                     <button
                     onClick={this.props.handleAddItemsSubmit}
                   >
                       Add items
                   </button>
                   </div>
                  ) : (
                    <h4>Upload your receipt to Display</h4>
                  )}
    </div>
    )}
}

export default FoodList;


