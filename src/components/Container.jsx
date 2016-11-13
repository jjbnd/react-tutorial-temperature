import React, { Component } from 'react';
import './Container.css';

import TemperatureConverter from '../utils/TemperatureConverter';

import TemperatureForm from './TemperatureForm';

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      celDegree: "",
      fahDegree: "",
    }
  }

  onCelChangeHandler(e) {
    let degree = e.target.value;
    this.setState({
      celDegree: degree,
      fahDegree: TemperatureConverter.celToFah(degree),
    });
  }

  onFahChangeHandler(e) {
    let degree = e.target.value;
    this.setState({
      celDegree: TemperatureConverter.fahToCel(degree),
      fahDegree: degree
    });
  }

  render() {
    return (
      <div className="Container">
        {/* Celsius */}
        <TemperatureForm
          legend="온도를 Celsius로 입력하세요 "
          placeholder="100&#x2103;"
          onChange={this.onCelChangeHandler.bind(this)}
          degree={this.state.celDegree}
          />
        {/* Fahrenheit */}
        <TemperatureForm
          legend="온도를 Fahrenheit로 입력하세요 "
          placeholder="212&#x2109;"
          onChange={this.onFahChangeHandler.bind(this)}
          degree={this.state.fahDegree}
          />
      </div>
    );
  }
}

export default Container;
