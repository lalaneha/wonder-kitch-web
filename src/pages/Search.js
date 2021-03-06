import React, { Component} from "react";
import Container from "../components/Container";
// import Alert from "../components/Alert";
import axios from 'axios';
import { Input } from "../components/Form";
import { List, ListItem } from "../components/List";
import Col from "../components/Col";
import Row from "../components/Row";
import { MDBBtn } from "mdbreact";
import ServingSize from "../components/ServingSize";
import Alert, { openAlert } from "../components/InvAlert";

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
    nutrent:"",
    DBItems:[],
    recipeQuery:"",
    ingResults:[],
    missingIngredients:[],
    missedIng:"",
    recipeImage:"",
    recipeTitle:"",
    info:false,
    searchInfo:false
  };

  componentDidMount() {
    axios.get("http://localhost:3001/AllItems/" +localStorage.getItem("userID"))
    .then(res => {
      if (res.status === "error") {
        throw new Error(res.data.message);
      }
      let query="";
      for (let i = 0; i < res.data[0].items.length; i++) {
        query=query+res.data[0].items[i].name+", ";        
      }
      this.setState({DBItems:res.data[0].items})
      this.setState({recipeQuery:query})
      // this.setState({ results: res.data.message, error: "" });
    })
    .catch(err => this.setState({ error: err.message }));
  }

  handleInputChange = event => {
    const {name ,value} =event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.search){
    axios.get("http://localhost:3001/recipeSearch/" +this.state.search)
      .then(res => {
        if (res.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({info:false})
        this.setState({searchInfo:true})
        let arr=[];
        this.setState({ingResults:arr})
        this.setState({results:res.data.results})
      })
      .catch(err => {
        console.log(err);
      });
    }
    else{
      openAlert({ message: 'Please insert Ingredients', type: 'warning' });
      
    }
  };

  handleFormSubmit2 = event => {
    event.preventDefault();
    if (this.state.recipeQuery) {
      axios.get("http://localhost:3001/recipeIngredients/" +this.state.recipeQuery)
      .then(res => {
        if (res.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({info:false})
        this.setState({searchInfo:true})
        this.setState({ingResults:res.data})
        let arr=[];
        this.setState({results:arr})
      })
      .catch(err => {
        console.log(err);
      });
    }
    else{
      openAlert({ message: 'Your fridge is empty', type: 'danger' });
    }
  };

  handleFormSave = (id,name,image) => {
    axios.post("http://localhost:3001/addRecipe",{
      userID: localStorage.getItem("userID"),
      name: name,
      image: image,
      recipeId:id
    }).then(function(data){
      openAlert({ message: 'Recipe has been saved', type: 'success' });
    }).catch(function(err){
      console.log(err)
    });
  };

  handleFormView2 = id => {
    for (let i = 0; i < this.state.ingResults.length; i++) {
      
      if (id === this.state.ingResults[i].id) {
        this.setState({missingIngredients: this.state.ingResults[i].missedIngredients})
        let missed="";
            for (let j = 0; j < this.state.ingResults[i].missedIngredients.length; j++) {
              missed = missed+this.state.ingResults[i].missedIngredients[j].amount+" "+this.state.ingResults[i].missedIngredients[j].unit+" "+this.state.ingResults[i].missedIngredients[j].name+", "              
            }
            this.setState({missedIng:missed})
           }           
    }
    axios.get("http://localhost:3001/recipeNutrition/" +id)
    .then(res => {
      if (res.status === "error") {
        throw new Error(res.data.message);
      }
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
      this.setState({recipeTitle:res.data.title})
      this.setState({recipeImage:res.data.image})
      this.setState({ ingredients: res.data.extendedIngredients, error: "" });
      this.setState({ analyzedInstructions: res.data.analyzedInstructions[0].steps, error: "" });
      this.setState({ nutrients: res.data.nutrition.nutrients, error: "" });
      this.setState({info:true})
    })
    .catch(err => this.setState({ error: err.message }));
  }

  handleFormView = id => {
    axios.get("http://localhost:3001/recipeNutrition/" +id)
    .then(res => {
      if (res.status === "error") {
        throw new Error(res.data.message);
      }
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
      this.setState({recipeTitle:res.data.title})
      this.setState({recipeImage:res.data.image})
      this.setState({ ingredients: res.data.extendedIngredients, error: "" });
      this.setState({ analyzedInstructions: res.data.analyzedInstructions[0].steps, error: "" });
      this.setState({ nutrients: res.data.nutrition.nutrients, error: "" });
      this.setState({missedIng:""})
      this.setState({info:true})
    })
    .catch(err => this.setState({ error: err.message }));

  };
  
  handleHideInfo = event => {
    let arr =[];
    this.setState({analyzedInstructions:arr})
    this.setState({nutrients:arr})
    this.setState({ingredients:arr})
    this.setState({missingIngredients:arr})
    this.setState({ingred:"", nutrent:"", missedIng:""})
    this.setState({info:false})
  }

  handleQuestionSubmit = event => {
    event.preventDefault(); 
    if(this.state.q){ 
    axios.get("http://localhost:3001/recipeQuestion/" +this.state.q)
    .then(res => {
      if (res.status === "error") {
        throw new Error(res.data.message);
      }
      this.setState({Answer:res.data.answer})
    })
    .catch(err => {
     console.log(err);
    });
  }
  else{
    openAlert({ message: 'Please insert a nutrition related question', type: 'info' });
}
  };



  render() {
    return (
      <div className="searchcontainer">
        <Container>
          <h2 className="text-center">Search for recipes by name or by key ingredients!</h2>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
<Row>
    <Col size="md-9">
    <Input
                value={this.state.q}
                onChange={this.handleInputChange}
                name="q"
                placeholder="Ask any nutrition related question!"
              />
    </Col>
    <Col size="md-3">
    <MDBBtn className="recipebutton"
                onClick={this.handleQuestionSubmit}
              >
                Get Answer
                </MDBBtn>
</Col>
</Row>
<Row>
<Col size="md-12">
              <strong>
                {this.state.Answer}
              </strong>
              </Col>
              </Row>

<Row>
<Col size="md-9">
          <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Please seperate ingredients with a comma"
              />
</Col>
<Col size="md-3">
              <MDBBtn className="recipebutton"
                onClick={this.handleFormSubmit}
              >
                Get Recipe
              </MDBBtn>
  </Col>
  </Row>
  <Row>
    <MDBBtn className="recipebutton" onClick={this.handleFormSubmit2}>
      Get recipes based on items in your fridge
    </MDBBtn>
    </Row>
    <Row>
    <Col size="md-8">
    {this.state.searchInfo ? (
       <List>
        {this.state.ingResults.map(result => (
          <ListItem key={result.id}>
              <img alt="recipe" src= {result.image} height="150px" width="150px"></img>
              <strong>
                {result.title}
              </strong>
              <p></p>
              <button
              onClick={() => this.handleFormView2(result.id)}
              >
              <a class="btn btn-xl js-scroll-trigger" href="#ingredients">View Info</a>
              </button>
              <button
              onClick={() => this.handleFormSave(result.id,result.title,result.image)}
              >
              <a class="btn btn-xl js-scroll-trigger">Save</a>
              </button>
            
          </ListItem>
        ))}
                {this.state.results.map(result => (
                  <ListItem key={result.id}>
                    
                      <img alt="recipe" src= {"https://spoonacular.com/recipeImages/" +result.imageUrls[0]} height="150px" width="150px"></img>
                      <strong>
                        {result.title}
                      </strong>
                      <p>
                      Ready in {result.readyInMinutes} Minutes
                      </p>
                      <ServingSize servings={result.servings}/>
                 
                      <button
                      onClick={() => this.handleFormView(result.id)}
                      >
                      <a className="btn btn-xl js-scroll-trigger" href="#ingredients">View Info</a>
                      </button>
                      <button
              onClick={() => this.handleFormSave(result.id,result.title,"https://spoonacular.com/recipeImages/" +result.imageUrls[0])}
              >
              <a class="btn btn-xl js-scroll-trigger">Save</a>
              </button>
                    
                  </ListItem>
                ))}
              </List>
              ) : (
              <h4>Search for recipe</h4>
              )}
    </Col>
    <Col size="md-4">
    <section className= "stepslist" id="ingredients">
    {this.state.info ? (
    <List>
    <ListItem key={"img"}>     
        <img alt="recipe" src= {this.state.recipeImage}  height="75px" width="75px"></img>
      <strong>
          {this.state.recipeTitle}
      </strong>
    </ListItem>
      {this.state.missedIng ? (
                  <ListItem key={"mis"}>
                    <strong>
                      Missing Ingredients:
                    </strong>
                    <br></br>
                      <strong>
                        {this.state.missedIng}
                      </strong>
                  </ListItem>):null}
                  <ListItem key={"ing"}>
                    <List>
                    <strong>
                      Ingredients:
                    </strong>
                     {this.state.ingredients.map(result=>(
                       <ListItem key ={result.number}>
                         {result.originalString}
                      </ListItem>
                     ))}
                     </List>
                    {/* <br></br>
                      <strong>
                        {this.state.ingred}
                      </strong> */}
                  </ListItem>
                  <strong>
                    Directions:
                  </strong>
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
                      Nutrients:
                    </strong>
                    <br></br>
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
              ) : null}
              </section>
    </Col>
    </Row>
    </Container>
      </div>
    );
  }
}

export default Search;
