import React, { Component } from "react";

class Form extends Component {
  render() {
    
    return (
       
      <form onSubmit={this.props.getWeather}>
        <input type="text" className="city" placeholder="Enter City .." />
        <input type="text" className="country" placeholder="Enter Country .." />
        <button>GET WEATHER</button>
        
      </form>
    );
  }
}

export default Form;
