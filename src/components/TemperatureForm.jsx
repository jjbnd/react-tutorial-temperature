import React, { Component } from 'react';
import EventBinder from '../utils/EventBinder';

import './TemperatureForm.css';

class TemperatureForm extends Component {
  constructor(props) {
    super(props);

    this.handlers = EventBinder.extractHanders(props, 'on');
  }

  render() {
    return (
      <div className="TemperatureForm">
        <fieldset>
          <legend>{this.props.legend}</legend>
          <input
            placeholder={this.props.placeholder}
            value={this.props.degree}
            {...this.handlers}
            />
        </fieldset>
      </div>
    );
  }
}

export default TemperatureForm;
