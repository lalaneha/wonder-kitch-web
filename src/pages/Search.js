import React, { Component } from "react";
import Container from "../components/Container";
import Alert from "../components/Alert";
import axios from 'axios';
import { Input, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
import Col from "../components/Col";
import Row from "../components/Row";

class Search extends Component {
  state = {
    search: "",
    results: [],
    error: "",
    q:"",
    Answer:"",
    analyzedInstructions:[],
    ingredients:[],
    nutrients:[],
    ingred:"",
    nutrent:""
  };

  handleInputChange = event => {
    const {name ,value} =event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    axios.get("http://localhost:3001/recipeSearch/" +this.state.search)
      .then(res => {
        if (res.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res)
        this.setState({results:res.data.results})
        // this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleFormView = id => {
    console.log("this is id "+id)
    axios.get("http://localhost:3001/recipeNutrition/" +id)
    .then(res => {
      if (res.status === "error") {
        throw new Error(res.data.message);
      }
      console.log(res.data.nutrition.nutrients)
      let ing="";
      let nut="";
      for (let i = 0; i < res.data.nutrition.ingredients.length; i++) {
        ing = ing + res.data.nutrition.ingredients[i].name+" "+res.data.nutrition.ingredients[i].amount+" "+res.data.nutrition.ingredients[i].unit+", "
      }
      for (let j = 0; j < res.data.nutrition.nutrients.length; j++) {
        nut = nut + res.data.nutrition.nutrients[j].title+" "+res.data.nutrition.nutrients[j].amount+" "+res.data.nutrition.nutrients[j].unit+", "
      }

      this.setState({ingred:ing})
      this.setState({nutrent:nut})
      this.setState({ ingredients: res.data.nutrition.ingredients, error: "" });
      this.setState({ analyzedInstructions: res.data.analyzedInstructions[0].steps, error: "" });
      this.setState({ nutrients: res.data.nutrition.nutrients, error: "" });
    })
    .catch(err => this.setState({ error: err.message }));

  };
  
  handleHideInfo = event => {
    let arr =[];
    this.setState({analyzedInstructions:arr})
    this.setState({nutrients:arr})
    this.setState({ingredients:arr})
    this.setState({ingred:"", nutrent:""})
  }

  handleQuestionSubmit = event => {
    event.preventDefault();  
    axios.get("http://localhost:3001/recipeQuestion/" +this.state.q)
    .then(res => {
      if (res.status === "error") {
        throw new Error(res.data.message);
      }
      console.log(res)
      this.setState({Answer:res.data.answer})
      // this.setState({ results: res.data.message, error: "" });
    })
    .catch(err => this.setState({ error: err.message }));
  };


  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h2 className="text-center">Search for recipes by name or by key ingredients!</h2>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
<Row>
    <Col size="md-4">
    <Input
                value={this.state.q}
                onChange={this.handleInputChange}
                name="q"
                placeholder="Any nutrition related question!"
              />
              <FormBtn
                onClick={this.handleQuestionSubmit}
              >
                Get Answer
              </FormBtn>
              <strong>
                {this.state.Answer}
              </strong>
</Col>
</Row>
<Row>
<Col size="md-12">
          <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Please seperate ingredients with a comma"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                get recipe
              </FormBtn>
  
    <div>
    {this.state.results.length ? (
              <List>
                {this.state.results.map(result => (
                  <ListItem key={result.id}>
                    
                      <img alt="recipe" src= {"https://spoonacular.com/recipeImages/" +result.imageUrls[0]} height="150px" width="150px"></img>
                      <strong>
                        {result.title}
                      </strong>
                      <p>
                      readyInMinutes:{result.readyInMinutes}
                      </p>
                      <button
                      onClick={() => this.handleFormView(result.id)}
                      >
                      View Info
                      </button>
                      <List>
                  <ListItem key={"ing"}>
                      <strong>
                        {this.state.ingred}
                      </strong>
                  </ListItem>
                {this.state.analyzedInstructions.map(result => (
                  <ListItem key={result.number}>
                      <strong>
                        Step {result.number}: 
                      </strong>
                      <p>
                        {result.step}
                      </p>
                  </ListItem>
                ))}
                  <ListItem key={"nut"}>
                      <strong>
                        {this.state.nutrent}
                      </strong>
                  </ListItem>
                      <button
                      onClick={this.handleHideInfo}
                      >
                      Hide Info
                      </button>
              </List>
                    
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
    </div>
    </Col>
    </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
