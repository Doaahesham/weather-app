import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div className="info">
        {this.props.temprature && (
          <p className="info_key">
            temprature:
            <span className="info_value">{this.props.temprature}</span>
          </p>
        )}
        {this.props.country && (
          <p className="info_key">
            country:<span className="info_value">{this.props.country}</span>
          </p>
        )}
        {this.props.humidity && (
          <p className="info_key">
            humidity:<span className="info_value">{this.props.humidity}</span>
          </p>
        )}
        {this.props.description && (
          <p className="info_key">
            description:
            <span className="info_value">{this.props.description}</span>
          </p>
        )}
        {this.props.error && (
          <p className="info_key">
            error:<span className="info_value">{this.props.error}</span>
          </p>
        )}
      </div>
    );
  }
}

export default Weather;
