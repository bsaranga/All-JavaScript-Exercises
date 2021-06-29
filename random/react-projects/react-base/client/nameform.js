import React from 'react';
import {hot} from 'react-hot-loader';

class NameForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            placeholder: 'Type your first name'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert(`Name ${this.state.value} was submitted`);
        event.preventDefault();
    }

    handleFocus(event) {
        this.setState({placeholder: ''});
    }

    handleBlur(event) {
        this.setState({placeholder: 'Type your first name'});
    }

    render() {
        return (
            <form className="ml-6 mt-6" onSubmit={this.handleSubmit}>
                <label className="inline-block text-xs ml-1">Name</label>
                <input className="block border-gray-400 border rounded text-sm py-1 pl-1" type="text" placeholder={this.state.placeholder} value={this.state.value} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur}/>
                <input className="block p-1 bg-gray-300 rounded-md px-2 mt-2 text-sm" type="submit" value="Submit"/>
            </form>
        )
    }
}


export default hot(module)(NameForm);