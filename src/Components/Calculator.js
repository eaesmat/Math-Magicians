import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col border p-4 bg-secondary text-light ">0</div>
        </div>
        <div className="row">
          <button type="button" className="col-3 text-center border p-3">
            AC
          </button>
          <button type="button" className="col-3 text-center border p-3">
            +/-
          </button>
          <button type="button" className="col-3 text-center border p-3">
            %
          </button>
          <button type="button" className="col-3 text-center border p-3 bg-warning">
            &divide;
          </button>
        </div>
        <div className="row">
          <button type="button" className="col-3 text-center border p-3">
            7
          </button>
          <button type="button" className="col-3 text-center border p-3">
            8
          </button>
          <button type="button" className="col-3 text-center border p-3">
            9
          </button>
          <button type="button" className="col-3 text-center border p-3 bg-warning">
            &times;
          </button>
        </div>
        <div className="row">
          <button type="button" className="col-3 text-center border p-3">
            4
          </button>
          <button type="button" className="col-3 text-center border p-3">
            5
          </button>
          <button type="button" className="col-3 text-center border p-3">
            6
          </button>
          <button type="button" className="col-3 text-center border p-3 bg-warning">
            -
          </button>
        </div>
        <div className="row">
          <button type="button" className="col-3 text-center border p-3">
            1
          </button>
          <button type="button" className="col-3 text-center border p-3">
            2
          </button>
          <button type="button" className="col-3 text-center border p-3">
            3
          </button>
          <button type="button" className="col-3 text-center border p-3 bg-warning">
            +
          </button>
        </div>
        <div className="row">
          <button type="button" className="col-6 text-center border p-3">
            0
          </button>
          <button type="button" className="col-3 text-center border p-3">
            .
          </button>
          <button type="button" className="col-3 text-center border p-3 bg-warning">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
