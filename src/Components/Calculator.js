import { Component } from 'react';
import calculate from '../Logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      operation: null,
      next: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState((obj) => calculate(obj, e.target.innerText));
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col border p-4 bg-secondary text-light ">{(total || '') + (operation || '') + (next || '') || 0 }</div>
        </div>
        <div className="row">
          <button type="button" className="col-3 text-center border p-3" onClick={this.handleClick}>
            AC
          </button>
          <button type="button" className="col-3 text-center border p-3" onClick={this.handleClick}>
            +/-
          </button>
          <button type="button" className="col-3 text-center border p-3" onClick={this.handleClick}>
            %
          </button>
          <button type="button" className="col-3 text-center border p-3 bg-warning" onClick={this.handleClick}>
            &divide;
          </button>
        </div>
        <div className="row">
          <button type="button" className="col-3 text-center border p-3" onClick={this.handleClick}>
            7
          </button>
          <button type="button" className="col-3 text-center border p-3" onClick={this.handleClick}>
            8
          </button>
          <button type="button" className="col-3 text-center border p-3" onClick={this.handleClick}>
            9
          </button>
          <button type="button" className="col-3 text-center border p-3 bg-warning" onClick={this.handleClick}>
            x
          </button>
        </div>
        <div className="row">
          <button type="button" className="col-3 text-center border p-3" onClick={this.handleClick}>
            4
          </button>
          <button type="button" className="col-3 text-center border p-3" onClick={this.handleClick}>
            5
          </button>
          <button type="button" className="col-3 text-center border p-3" onClick={this.handleClick}>
            6
          </button>
          <button type="button" className="col-3 text-center border p-3 bg-warning" onClick={this.handleClick}>
            -
          </button>
        </div>
        <div className="row">
          <button type="button" className="col-3 text-center border p-3" onClick={this.handleClick}>
            1
          </button>
          <button type="button" className="col-3 text-center border p-3" onClick={this.handleClick}>
            2
          </button>
          <button type="button" className="col-3 text-center border p-3" onClick={this.handleClick}>
            3
          </button>
          <button type="button" className="col-3 text-center border p-3 bg-warning" onClick={this.handleClick}>
            +
          </button>
        </div>
        <div className="row">
          <button type="button" className="col-6 text-center border p-3" onClick={this.handleClick}>
            0
          </button>
          <button type="button" className="col-3 text-center border p-3" onClick={this.handleClick}>
            .
          </button>
          <button type="button" className="col-3 text-center border p-3 bg-warning" onClick={this.handleClick}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
