import React from 'react';
import {array} from '../algorithms/array';


//form for the size of the array and number to search for
// 
export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      size: 0, 
      number: 0,
      array: [],
      range: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSizeChange(value) {
    this.setState({
      size: value,
      array: array.initializeArray(value, 1000)
    })
  }

  handleNumberChange(value) {
    this.setState({
      number: value
    })
  }
  handleSubmit(event) {
    //call createArray and store in this.state.array
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <form>
          <label>
            Size of the Array:
            <input type="number" value={this.state.size} onChange={e => this.handleSizeChange(e.target.value)}/>
          </label>
          <label>
            Number to Search For:
            <input type="number" value={this.state.number} onChange={e => this.handleNumberChange(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}