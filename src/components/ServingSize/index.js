import React from "react";
import axios from "axios";

class ServingSize extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: null,
       
      };
      this.checkServings(this.props.servings)
    }


    checkServings=(recipeServing)=>{
        if(this.state.message===null) {

       
       axios.get("http://localhost:3000/profile")
        .then(res=>{
          var userServing = (res.data.servingSize)
          console.log(userServing)
        if (userServing > recipeServing){ 
          this.setState ({
              message: "You need to make more!"
        })
        }
        else if (userServing ===recipeServing) {
        this.setState ({
            message: "Perfect Serving Match!"
        })
    
        }
        else {
            this.setState ({
                message: "You've got more than enough!"
          
        })
        }
      })
    }
    }
    render() {
      return (
        <p>
        Recipe Serving Size is {this.props.servings}. {this.state.message}
        </p>
      );
    }
  }

  export default ServingSize;