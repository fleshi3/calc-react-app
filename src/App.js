import React, {Component} from 'react';
import './App.scss';

// Basic math functions
function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      mod: '',
      calcValue: 0,
    };
    this.handleNumber = this.handleNumber.bind(this);
  }
  render() {
    const {calcValue, value1} = this.state;
    const {handleMod, handleNumber, evalCalc} = this;
    return (
      <div className="App">
        <div className="calcValue">
          <p>{calcValue}</p>
        </div>
        <div className="calc row1">
          <button value="+" onClick={e => handleMod(e, calcValue)}>
            +
          </button>
          <button value="-" onClick={e => handleMod(e, calcValue)}>
            -
          </button>
          <button value="*" onClick={e => handleMod(e, calcValue)}>
            *
          </button>
          <button value="/" onClick={e => handleMod(e, calcValue)}>
            /
          </button>
        </div>
        <div className="calc row2">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>pi</button>
        </div>
        <div className="calc row2">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button onClick={() => this.clearAll()}>C</button>
        </div>
        <div className="calc row3">
          <button
            className="One"
            value="1"
            onClick={e => handleNumber(calcValue, e)}>
            1
          </button>
          <button
            className="Two"
            value="2"
            onClick={e => handleNumber(calcValue, e)}>
            2
          </button>
          <button
            className="Three"
            value="3"
            onClick={e => handleNumber(calcValue, e)}>
            3
          </button>
          <button
            className="Equals"
            onClick={(calcValue, value1) => evalCalc(calcValue, value1)}>
            =
          </button>
          <button className="Zero">0</button>
          <button className="Dot">.</button>
        </div>
      </div>
    );
  }

  // Functions
  //

  clearAll = () => {
    this.setState({
      calcValue: 0,
      value1: 0,
      mod: '',
    });
  };

  handleNumber = (state, e) => {
    const {mod, calcValue, value1} = this.state;
    const valueX = (calcValue, e) => {
      if (calcValue === 0) {
        return calcValue + e.target.value;
      } else if (calcValue !== 0) {
        return e.target.value;
      }
      return e.target.value;
    };
    this.setState({
      calcValue: Math.trunc(valueX(calcValue, e)),
    });
  };

  handleMod = (e, state) => {
    const {value1, value2, calcValue, mod} = this.state;
    const resultMod = (value1, calcValue, mod) => {
      if (value1 !== 0) {
        switch (mod) {
          case '+':
            return add(value1, calcValue);
          case '-':
            return subtract(value1, calcValue);
          case '*':
            return multiply(value1, calcValue);
          case '/':
            return divide(value1, calcValue);
        }
        return calcValue;
      }
    };

    this.setState({
      mod: e.target.value,
      value1: resultMod(value1, calcValue, mod),
            //calcValue: resultMod(value1, calcValue, mod),
      // value1: Math.trunc(calcValue),
       calcValue: '',
    });
    console.log(this.state.mod);
  };

  evalCalc = state => {
    const {value1, value2, calcValue, mod} = this.state;
    // const result = add(value1, calcValue);
    const result = (value1, calcValue, mod) => {
      switch (mod) {
        case '+':
          return add(value1, calcValue);
        case '-':
          return subtract(value1, calcValue);
        case '*':
          return multiply(value1, calcValue);
        case '/':
          return divide(value1, calcValue);
      }
    };
    console.log(result);
    this.setState({
      calcValue: result(value1, calcValue, mod),
    });
  };
}

export default App;
