import React, { Component} from "react";
import Container from "../components/Container";
import axios from 'axios';
import { Input, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
import Col from "../components/Col";
import Row from "../components/Row";
import DeleteBtn from "../components/DeleteBtn";

class Recipe extends Component {
        state={
            recipes:[],
            cookedRecipes:[]
        }

        componentDidMount() {
            axios.get("http://localhost:3001/AllItems/" +localStorage.getItem("userID"))
            .then(res => {
              if (res.status === "error") {
                throw new Error(res.data.message);
              }
              let r=[];
              let cr=[];
              for (let i = 0; i < res.data[0].recipes.length; i++) {
                  if (res.data[0].recipes[i].cooked) {
                      cr.push(res.data[0].recipes[i]);
                  }
                  else{
                    r.push(res.data[0].recipes[i]);
                  }
                  
              }
              this.setState({recipes:r})
              this.setState({cookedRecipes:cr})
            })
            .catch(err => this.setState({ error: err.message }));
          }

handleDeleteSubmit=(id,event) =>{
    axios.post("http://localhost:3001/deleteRecipe",{
        userID: localStorage.getItem("userID"),
        recipeID: this.state.recipes[id]._id,
      }
    )
    .then(res => {
      if (res.status === "error") {
        throw new Error(res.data.message);
      }
      this.componentDidMount();
    })
    .catch(err => this.setState({ error: err.message }));
}

handleDeleteSubmit2=(id,event) =>{
    axios.post("http://localhost:3001/deleteRecipe",{
        userID: localStorage.getItem("userID"),
        recipeID: this.state.cookedRecipes[id]._id,
      }
    )
    .then(res => {
      if (res.status === "error") {
        throw new Error(res.data.message);
      }
      this.componentDidMount();
    })
    .catch(err => this.setState({ error: err.message }));
}

handleCookSubmit = (id,event) =>{
  axios.post("http://localhost:3001/cook",{
    userID: localStorage.getItem("userID"),
    recipeID: this.state.recipes[id]._id
  }
)
.then(res => {
  if (res.status === "error") {
    throw new Error(res.data.message);
  }
  this.componentDidMount(); 
})
.catch(err => this.setState({ error: err.message }));

}


    render() {
        return (
      <div className="searchcontainer"> 
      <Container>
        <h2 className="text-center">Your saved recipes!</h2>
        <Row>
    <Col size="md-12">
    <List>
       <h4> Cooked Recipes</h4>
                {this.state.cookedRecipes.map((result, i)=> (
                  <ListItem key={i}>
                      <DeleteBtn onClick={this.handleDeleteSubmit2.bind(this,i)} >Delete</DeleteBtn>     
                      <img alt="recipe" src= {result.image}  height="75px" width="75px"></img>
                    <strong>
                        {result.name}
                    </strong>
                    <br></br>
                    <strong>
                        {result.date}
                    </strong>
                      
                  </ListItem>
                ))}
              </List>
        </Col>
        </Row>
        <Row>
    <Col size="md-12">
    <List >
    <h4> Saved for later</h4>
                {this.state.recipes.map((result, i)=> (
                  <ListItem key={i}>
                      <DeleteBtn onClick={this.handleDeleteSubmit.bind(this,i)} >Delete</DeleteBtn>     
                      <img alt="recipe" src= {result.image}  height="75px" width="75px"></img>
                    <strong>
                        {result.name}
                    </strong>
                    <br></br>
                    <strong>
                        {result.date}
                    </strong> 
                    <FormBtn
                      onClick={this.handleCookSubmit.bind(this,i)}
                      >
                      Cook
                      </FormBtn>
                      
                  </ListItem>
                ))}
              </List>
        </Col>
        </Row>
        </Container>

    </div>
    );
  }
}

export default Recipe;