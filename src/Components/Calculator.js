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
  }

  btnClick = (e) => {
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
          <button type="button" className="col-3 text-center border p-3" onClick={this.btnClick}>
            AC
          </button>
          <button type="button" className="col-3 text-center border p-3" onClick={this.btnClick}>
            +/-
          </button>
          <button type="button" className="col-3 text-center border p-3" onClick={this.btnClick}>
            %
          </button>
          <button type="button" className="col-3 text-center border p-3 bg-warning" onClick={this.btnClick}>
            &divide;
          </button>
        </div>
        <div className="row">
          <button type="button" className="col-3 text-center border p-3" onClick={this.btnClick}>
            7
          </button>
          <button type="button" className="col-3 text-center border p-3" onClick={this.btnClick}>
            8
          </button>
          <button type="button" className="col-3 text-center border p-3" onClick={this.btnClick}>
            9
          </button>
          <button type="button" className="col-3 text-center border p-3 bg-warning" onClick={this.btnClick}>
            x
          </button>
        </div>
        <div className="row">
          <button type="button" className="col-3 text-center border p-3" onClick={this.btnClick}>
            4
          </button>
          <button type="button" className="col-3 text-center border p-3" onClick={this.btnClick}>
            5
          </button>
          <button type="button" className="col-3 text-center border p-3" onClick={this.btnClick}>
            6
          </button>
          <button type="button" className="col-3 text-center border p-3 bg-warning" onClick={this.btnClick}>
            -
          </button>
        </div>
        <div className="row">
          <button type="button" className="col-3 text-center border p-3" onClick={this.btnClick}>
            1
          </button>
          <button type="button" className="col-3 text-center border p-3" onClick={this.btnClick}>
            2
          </button>
          <button type="button" className="col-3 text-center border p-3" onClick={this.btnClick}>
            3
          </button>
          <button type="button" className="col-3 text-center border p-3 bg-warning" onClick={this.btnClick}>
            +
          </button>
        </div>
        <div className="row">
          <button type="button" className="col-6 text-center border p-3" onClick={this.btnClick}>
            0
          </button>
          <button type="button" className="col-3 text-center border p-3" onClick={this.btnClick}>
            .
          </button>
          <button type="button" className="col-3 text-center border p-3 bg-warning" onClick={this.btnClick}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
