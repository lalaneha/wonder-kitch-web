import React, { Component} from "react";
import Container from "../components/Container";
import axios from 'axios';
import { Input, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
import Col from "../components/Col";
import Row from "../components/Row";
import moment  from "moment";
import DeleteBtn from "../components/DeleteBtn";

class Recipe extends Component {
        state={
            recipes:[],
            cookedRecipes:[], 
            ingred:"",
            nutrent:"",
            ingredients: [],
            analyzedInstructions: [],
            nutrients: [],
            recipeTitle:"",
            recipeImage:"",
            info:false
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
                let d = new Date(res.data[0].recipes[i].date);
                let n = d.toLocaleString();
                res.data[0].recipes[i].date=n;
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

handleFormView = id =>{
  const recipeID = this.state.cookedRecipes[id].recipeId;
  this.viewInfo(recipeID);
}

handleFormView2 = id => {
  const recipeID = this.state.recipes[id].recipeId;
this.viewInfo(recipeID);
}

viewInfo = id => {
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

handleHideInfo = event => {
  let arr =[];
  this.setState({analyzedInstructions:arr})
  this.setState({nutrients:arr})
  this.setState({ingredients:arr})
  // this.setState({missingIngredients:arr})
  this.setState({ingred:"", nutrent:""})
  this.setState({info:false})
}

    render() {
        return (
      <div className="searchcontainer"> 
      <Container>
        <h2 className="text-center">Your saved recipes!</h2>
        <Row>
    <Col size="md-8">
    <List>
       <h3> Cooked Recipes</h3>
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
                    <button
                      onClick={() => this.handleFormView(i)}
                    >
                      <a class="btn btn-xl js-scroll-trigger" href="#ingredients">View Info</a>
                    </button>
                    &nbsp; &nbsp;
                    <button>
                      <a class="btn btn-xl js-scroll-trigger" href={"/inventory?recipeId="+ result.recipeId}>Update Inventory</a>
                    </button>   
                  </ListItem>
                ))}
              </List>
    <List >
    <h3> Saved for later</h3>
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
              <button
              onClick={() => this.handleFormView2(i)}
              >
              <a class="btn btn-xl js-scroll-trigger" href="#ingredients">View Info</a>
              </button>
                    <FormBtn
                      onClick={this.handleCookSubmit.bind(this,i)}
                      >
                      Cook
                      </FormBtn>
                      
                  </ListItem>
                ))}
              </List>
        </Col>
        <Col size="md-4">
    <section className= "stepslist" id="ingredients">
    {this.state.info ? (
    <List>
      {/* {this.state.missedIng ? (
                  <ListItem key={"mis"}>
                    <strong>
                      Missing Ingredients:
                    </strong>
                    <br></br>
                      <strong>
                        {this.state.missedIng}
                      </strong>
                  </ListItem>):null} */}
                  <ListItem key={"img"}>     
                      <img alt="recipe" src= {this.state.recipeImage}  height="75px" width="75px"></img>
                    <strong>
                        {this.state.recipeTitle}
                    </strong>
                  </ListItem>
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

export default Recipe;