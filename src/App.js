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
      value1: 0,
      value2: 0,
      mod: '',
      calcValue: 0,
    };
  }
  render() {
    const {calcValue, value1, value2} = this.state;
    const {handleMod, handleNumber, evalCalc} = this;
    return (
      <div className="App">
        <div className="Background">
          <div className="color7">
            <span>c</span>
            <span>a</span>
            <span>l</span>
            <span>c</span>
            <span>-</span>
            <span>r</span>
            <span>e</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
            <span>-</span>
            <span>a</span>
            <span>p</span>
            <span>p</span>
          </div>
          <div className="color6" />
          <div className="color5" />
          <div className="color4" />
          <div className="color3" />
          <div className="color2"></div>
          <div className="color1" />
        </div>
        <div className="calcContainer">
          <div className="calcValue">
            <p>{calcValue}</p>
          </div>
          <div className="calc row1">
            <button
              value="+"
              onClick={(e, value1, value2, mod) =>
                handleMod(e, value1, value2, mod)
              }>
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
            <button value="7" onClick={e => handleNumber(calcValue, e)}>
              7
            </button>
            <button value="8" onClick={e => handleNumber(calcValue, e)}>
              8
            </button>
            <button value="9" onClick={e => handleNumber(calcValue, e)}>
              9
            </button>
            <button value="3.142" onClick={e => handleNumber(calcValue, e)}>
              pi
            </button>
          </div>
          <div className="calc row2">
            <button value="4" onClick={e => handleNumber(calcValue, e)}>
              4
            </button>
            <button value="5" onClick={e => handleNumber(calcValue, e)}>
              5
            </button>
            <button value="6" onClick={e => handleNumber(calcValue, e)}>
              6
            </button>
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
            <button
              className="Zero"
              value="0"
              onClick={e => handleNumber(calcValue, e)}>
              0
            </button>
            <button
              className="Dot"
              value="."
              onClick={e => handleNumber(calcValue, e)}>
              .
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Functions
  //

  clearAll = () => {
    this.setState({
      calcValue: '',
      value1: '',
      value2: '',
      mod: '',
    });
  };

  handleNumber = (state, e) => {
    const {mod, calcValue, value1, value2} = this.state;
    const valueX = (calcValue, e) => {
      if (calcValue === 0) {
        return e.target.value;
      } else if (calcValue !== 0) {
        return e.target.value;
      }
      return e.target.value;
    };
    const valueY = (e, mod, value2) => {
      if (mod === '') {
        return 0;
      } else if (e.target.value === '.') {
        return value2 + e.target.value;
      } else if (value2 === 0) {
        return e.target.value;
      }
      return value2 + e.target.value;
    };
    const valueOnce = (e, mod, value1) => {
      if (value1 === 0) {
        return e.target.value;
      } else if (e.target.value === '.' && mod === '') {
        return value1 + e.target.value;
      } else if (mod === '') {
        return value1 + e.target.value;
      }
      return value1;
    };
    const shownValue = (e, mod, value1) => {
      if (value1 === 0) {
        return e.target.value;
      } else if (mod === '') {
        return value1 + e.target.value;
      } else if (e.target.value === '.' && mod === '') {
        return value1 + e.target.value;
      } else if (value2 === 0 && value1 !== 0 && mod !== 0) {
        return e.target.value;
      } else if (e.target.value === '.' && value1 !== 0 && mod !== '') {
        return value2 + e.target.value;
      } else if (value1 !== 0 && mod !== '') {
        return value2 + e.target.value;
      }
      return value1;
    };
    this.setState({
      calcValue: shownValue(e, mod, value1),
      value1: valueOnce(e, mod, value1),
      value2: valueY(e, mod, value2),
    });
  };

  handleMod = (e, state) => {
    const {value2, mod, value1} = this.state;
    console.log(value1);
    const resultMod = () => {
      if (value2 === 0 || value2 === '') {
        return value1;
      }
      switch (mod) {
        case '+':
          return add(parseFloat(value1), parseFloat(value2));
        case '-':
          return subtract(parseFloat(value1), parseFloat(value2));
        case '*':
          return multiply(parseFloat(value1), parseFloat(value2));
        case '/':
          return divide(parseFloat(value1), parseFloat(value2));
      }
    };
    const setMod = () => {
      if (value1 === 0 || value1 === '') {
        return '';
      }
      return e.target.value;
    };

    this.setState({
      mod: setMod(e, value1),
      value1: resultMod(value2, mod, value1),
      calcValue: resultMod(value2, mod, value1),
      value2: '',
      //calcValue: resultMod(value1, calcValue, mod),
      // value1: Math.trunc(calcValue),
    });
  };

  evalCalc = state => {
    const {value1, value2, calcValue, mod} = this.state;
    // const result = add(value1, calcValue);
    const result = (value1, value2, mod) => {
      if (value1 !== 0 && value2 !== 0 && mod !== '') {
        switch (mod) {
          case '+':
            return add(parseFloat(value1), parseFloat(value2));
          case '-':
            return subtract(parseFloat(value1), parseFloat(value2));
          case '*':
            return multiply(parseFloat(value1), parseFloat(value2));
          case '/':
            return divide(parseFloat(value1), parseFloat(value2));
        }
      }
      return value1;
    };
    this.setState({
      calcValue: result(value1, value2, mod)
        .toFixed(3)
        .replace(/[.,]000$/, ''),
      value1: result(value1, value2, mod),
      value2: 0,
    });
  };
}

export default App;
