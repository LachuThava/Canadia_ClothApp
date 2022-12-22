import React from 'react';
import Cards from 'react-credit-cards';
 import 'react-credit-cards/es/styles-compiled.css';
export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form className='col justify-center items-center flex-col flex  mt-10'>
        	<input
            type="tel"
            name="number"
            className='border-2 row h-10 bg-gray-100'
            value={this.state.number}
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="text"
            name="expiry"
            className='border-2 row h-10 bg-gray-100'
            value={this.state.expiry}
            placeholder="MM/YY Expiry"
            onChange={(e) => {this.setState({expiry:e.target.value})}}
            onFocus={this.handleInputFocus}
          />

          <input
            type="text"
            name="name"
            className='border-2 row h-10 bg-gray-100'
            value={this.state.name}
            placeholder="Name"
            onChange={(e) => {this.setState({name:e.target.value})}}
            onFocus={this.handleInputFocus}
          />

          <input
            type="tel"
            name="cvc"
            className='border-2 row h-10 bg-gray-100'
            value={this.state.cvc}
            placeholder="CVC"
            onChange={(e) => {this.setState({cvc:e.target.value})}}
            onFocus={this.handleInputFocus}
          />
          
        </form>
      </div>
    );
  }
}