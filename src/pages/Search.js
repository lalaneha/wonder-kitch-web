import React, { Component } from "react";
import Container from "../components/Container";
// import SearchResults from "../components/SearchResults";
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
    Answer:""
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

  handleFormView = (id) => {
    console.log("this is id "+id)
  };

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
                      data-id={result.id}
                      onClick={this.handleFormView("data-id")}
                      >
                      View Info
                      </button>
                    
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
