import React from "react";
import axios from "axios";

class JokesTrivia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null,
            triva: null,
        };
        this.getJoke()
        this.getTrivia()
    }
    getJoke = () => {
        if (this.state.message === null) {

            axios.get("http://localhost:3000/recipeJoke")
                .then(res => {
                    this.setState({
                        message: res.data.text
                    })
                })
        }
    }

    getTrivia = () => {
        if (this.state.message === null) {
            axios.get("http://localhost:3000/recipeTrivia")
                .then(res => {
                    this.setState({
                        trivia: res.data.text
                    })
                })
        }
    }
    render() {
        return ( 
            <div>
           <h4> Have a joke before you go!</h4>
             <p>{this.state.message} </p> 
            <h4>Guess What?...</h4>
            <p>{this.state.trivia}</p>
            </div>
        );
    }
}

export default JokesTrivia;