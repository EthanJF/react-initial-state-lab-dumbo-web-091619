// your Bomb code here!
import React, { Component } from "react";

export default class ImageSlider extends Component {

    state = {
        secondsLeft: this.props.initialCount
    }

    render(){
        if (this.state.secondsLeft === 0) {
            return(
                <p>Boom!</p>
            )
        } else {
            return (
                <p>{this.state.secondsLeft} seconds left before I go boom!</p>
            )
        }
       
    }
}