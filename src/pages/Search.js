import React, { Component } from "react";
import Container from "../components/Container";
// import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import axios from 'axios';
import { Input, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";

class Search extends Component {
  state = {
    search: "",
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  // componentDidMount() {
  //   API.getBaseBreedsList()
  //     .then(res => this.setState({ breeds: res.data.message }))
  //     .catch(err => console.log(err));
  // }

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
                    
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
    </div>
        </Container>
      </div>
    );
  }
}

export default Search;
