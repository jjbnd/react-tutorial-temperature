import React, { Component } from 'react';
import './Container.css';

import TemperatureConverter from '../utils/TemperatureConverter';

import TemperatureForm from './TemperatureForm';
import MessageBox from './MessageBox';

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      celDegree: "",
      fahDegree: "",
      isBoiling: false,
    }
  }

  checkBoilingPoint(celDegree) {
    return celDegree >= 100;
  }

  onCelChangeHandler(e) {
    let degree = e.target.value;
    this.setState({
      celDegree: degree,
      fahDegree: TemperatureConverter.celToFah(degree),
      isBoiling: this.checkBoilingPoint(degree),
    });
  }

  onFahChangeHandler(e) {
    let degree = e.target.value;
    let celDegree = TemperatureConverter.fahToCel(degree);
    this.setState({
      celDegree: celDegree,
      fahDegree: degree,
      isBoiling: this.checkBoilingPoint(celDegree),
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
        <MessageBox
          msg={
            this.state.isBoiling ?
              '물이 끓고 있어요.' :
              '물이 아직 안끓고 있어요.'
            }
          alert={this.state.isBoiling}
          />
      </div>
    );
  }
}

export default Container;
