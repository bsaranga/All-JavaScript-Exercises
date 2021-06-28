import React from 'react'
import {hot} from 'react-hot-loader';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset className="ml-6 mt-6 border-2 w-64 px-4 rounded-md">
                <legend className="text-xs px-1 -ml-1">Enter temperature in <strong>{scaleNames[scale]}</strong></legend>
                <input className="border rounded mt-2 text-sm py-1 pl-2 mb-6" value={temperature} onChange={this.handleChange}/>
            </fieldset>
        )
    }
}

export default hot(module)(TemperatureInput)