import React, { Component } from "react";
import Container from "../Container";
import Col from "../Col";
import DeleteBtn from "../DeleteBtn";
import Row from "../Row";
import API from "../../utils/API";
import { Input, FormBtn } from "../Form";
import { List, ListItem } from "../List";
import axios from "axios";
// import Numberinput from "../Numberinput";
import { MDBInput } from 'mdbreact';
import FoodList from "../FoodList";

class RecipeInventory extends Component {
    constructor(props) {
        super(props);
        this.state = {recipeIngredients: []}
    }

    componentDidMount() {
        axios.get('/recipeNutrition/' + this.props.recipeId)
        .then(res => {
            var recipeIngList = []
            res.data.extendedIngredients.forEach(element => {
                recipeIngList.push({
                    annotation: element.name,
                    image: element.image,
                    tag: element.amount
                })
            });
            this.setState({recipeIngredients: recipeIngList})
            // this.setState({recipeIngredients: res.data.extendedIngredients})
        })
    }
        
    handleRecipeDeleteSubmit = (i,event) => {
        let users = [...this.state.recipeIngredients];
        users.splice(i, 1);
        this.setState({recipeIngredients:users });
      }

    handleRecipeItemsChange = (i,event) => {
        const { name, value } = event.target;
        let users = [...this.state.recipeIngredients];
        users[i] = {...users[i], [name]: value};
        this.setState({recipeIngredients:users });
      }

      handleAddItemsSubmit = event => {
        event.preventDefault();
        for (let i = 0; i < this.state.recipeIngredients.length; i++) {
          axios.post("http://localhost:3001/addItems",{
            userID: localStorage.getItem("userID"),
            name: this.state.recipeIngredients[i].annotation,
            quantity: this.state.recipeIngredients[i].tag
          }
        )
          .then(res => {
            if (res.status === "error") {
              throw new Error(res.data.message);
            }
            this.setState({ DBItems: [this.state.recipeIngredients[i].annotation, this.state.recipeIngredients[i].tag] })
            axios.get("http://localhost:3001/AllItems/" +localStorage.getItem("userID"))
                     
            .then(res => {
              if (res.status === "error") {
                throw new Error(res.data.message);
              } 
              res.data[0].items.sort((a,b)=>{
                if (a.name<b.name) {
                  return -1;
                }
                if (a.name>b.name) {
                  return 1;
                }
                return 0;
              })
              this.setState({DBItems:res.data[0].items})
              let arr =[];
              this.setState({recipeIngredients:arr})
            })
            .catch(err => this.setState({ error: err.message }));
          })
          .catch(err => this.setState({ error: err.message }));
        }
      }

    render() {
        return (
            <div id="RecipeInventory">
             
          <FoodList
            groceryResults={this.state.recipeIngredients}
            handleReceiptDeleteSubmit={this.handleRecipeDeleteSubmit}
            handleReceiptItemsChange={this.handleRecipeItemsChange}
            handleAddItemsSubmit={this.handleAddItemsSubmit}
          />
      
            </div>

        )}
}

export default RecipeInventory;