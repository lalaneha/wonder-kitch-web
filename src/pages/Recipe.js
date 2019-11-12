import React, { Component} from "react";
import Container from "../components/Container";
import axios from 'axios';
import { FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
import Col from "../components/Col";
import Row from "../components/Row";
import DeleteBtn from "../components/DeleteBtn";
import { MDBInput } from 'mdbreact';
import Alert, { openAlert } from "../components/InvAlert";

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
            serving:"",
            cookId:"",
            cookIngredients:[],
            info:false,
            cookInfo:false
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
              this.setState({serving:res.data[0].servingSize})
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
  const recipeID = this.state.recipes[id].recipeId;
  axios.get("http://localhost:3001/recipeNutrition/" +recipeID)
  .then(res => {
    if (res.status === "error") {
      throw new Error(res.data.message);
    }
    this.handleHideInfo();
    this.setState({ cookIngredients: res.data.extendedIngredients, error: "" });
    this.setState({recipeTitle:res.data.title})
    this.setState({recipeImage:res.data.image})
    this.setState({cookId:res.data.id})
    this.setState({Info:false})
    this.setState({cookInfo:true})
  })
  .catch(err => this.setState({ error: err.message }));
}

cook = (id) => {
  let nowDate= new Date();
  axios.post("http://localhost:3001/cook",{
    userID: localStorage.getItem("userID"),
    recipeID: id,
    date:nowDate
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
    let arr =[];
    this.setState({ingred:ing})
    this.setState({nutrent:nut})
    this.setState({recipeTitle:res.data.title})
    this.setState({recipeImage:res.data.image})
    this.setState({ ingredients: res.data.extendedIngredients, error: "" });
    this.setState({ analyzedInstructions: res.data.analyzedInstructions[0].steps, error: "" });
    this.setState({ nutrients: res.data.nutrition.nutrients, error: "" });
    this.setState({ cookIngredients: arr});
    this.setState({cookInfo:false})
    this.setState({info:true})
  })
  .catch(err => this.setState({ error: err.message }));
}

handleHideInfo = event => {
  let arr =[];
  this.setState({analyzedInstructions:arr})
  this.setState({nutrients:arr})
  this.setState({ingredients:arr})
  this.setState({ingred:"", nutrent:""})
  this.setState({info:false})
}

handleServingChange = (event) =>{
  const {name ,value} =event.target;
  this.setState({ [name]: value });
}

handleServingSubmit = event => {
  axios.post("http://localhost:3001/serving",{
    userID: localStorage.getItem("userID"),
    serving: this.state.serving
  }
)
.then(res => {
  if (res.status === "error") {
    throw new Error(res.data.message);
  }
  this.success();
  this.componentDidMount(); 
})
.catch(err => this.setState({ error: err.message }));
}

success = () => {
  openAlert({ message: 'You have successfully updated your serving size', type: 'success' });

}

handleCookUpdateChange = (i,event) => {
  const { name, value } = event.target;
  let users = [...this.state.cookIngredients];
  users[i] = {...users[i], [name]: value};
  this.setState({cookIngredients:users });
}

handleCookUpdateSubmit = (event) => {
  console.log(this.state.cookIngredients)
  for (let i = 0; i < this.state.cookIngredients.length; i++) {
    axios.post("http://localhost:3001/cookItems",{
      userID: localStorage.getItem("userID"),
      name: this.state.cookIngredients[i].name,
      quantity: this.state.cookIngredients[i].amount
    }
  )
    .then(res => {
      if (res.status === "error") {
        throw new Error(res.data.message);
      }
      console.log("okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
    }
    )
    .catch(err => this.setState({ error: err.message }));
  }
  let arr =[];
  this.setState({cookIngredients:arr})
  this.setState({cookInfo:false})
  this.cook(this.state.cookId);
  this.handleHideInfo();
}

    render() {
        return (
      <div className="searchcontainer"> 
      <Container>
        <h2 className="text-center">Your Recipes!</h2>
        <Row>
          <Col size="md-8">
          <strong>
                        Change your serving size:
                        </strong>
                        <MDBInput
                        value={this.state.serving||""}
                        onChange={this.handleServingChange.bind(this)}
                        name="serving"
                        type="number" />
                        <FormBtn
                      onClick={this.handleServingSubmit.bind(this)}
                      >
                      Update
                      </FormBtn>
          </Col>
        </Row>
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
              onClick={()=>this.handleFormView(i)}
              >
              <a class="btn btn-xl js-scroll-trigger" href="#ingredients">View Info</a>
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
              onClick={()=>this.handleFormView2(i)}
              >
              <a class="btn btn-xl js-scroll-trigger" href="#ingredients">View Info</a>
              </button>
              <button
              onClick={this.handleCookSubmit.bind(this,i)}
              >
              <a class="btn btn-xl js-scroll-trigger" href="#ingredients">Cook</a>
              </button>                      
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
              {this.state.cookInfo ? (
                <List>
                <ListItem key={"img"}>     
                    <img alt="recipe" src= {this.state.recipeImage}  height="75px" width="75px"></img>
                  <strong>
                      {this.state.recipeTitle}
                  </strong>
                </ListItem>
                <strong>
                  Ingredients:
                </strong>
                 {this.state.cookIngredients.map((result,i)=>(
                   <ListItem key ={i}>
                     <strong>
                     {result.name}
                     </strong>
                     <MDBInput
                        value={result.amount||""}
                        onChange={this.handleCookUpdateChange.bind(this,i)}
                        name="amount"
                        type="number" />
                  </ListItem>
                 ))}
                        <FormBtn
                      onClick={this.handleCookUpdateSubmit.bind(this)}
                      >
                      Cook and Update your Inventory
                      </FormBtn>
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