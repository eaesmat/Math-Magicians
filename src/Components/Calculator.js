import { useState } from 'react';
import calculate from '../Logic/calculate';

const Calculator = () => {
  const [calAction, setCalAction] = useState(() => ({ total: 0, operation: null, next: null }));

  const btnClick = (e) => {
    setCalAction((obj) => calculate(obj, e.target.innerText));
  };
  const { total, operation, next } = calAction;
  return (
    <div>
      <div className="row">
        <div className="col border p-4 bg-secondary text-light ">{(total || '') + (operation || '') + (next || '') || 0 }</div>
      </div>
      <div className="row">
        <button type="button" className="col-3 text-center border p-3" onClick={btnClick}>
          AC
        </button>
        <button type="button" className="col-3 text-center border p-3" onClick={btnClick}>
          +/-
        </button>
        <button type="button" className="col-3 text-center border p-3" onClick={btnClick}>
          %
        </button>
        <button type="button" className="col-3 text-center border p-3 bg-warning" onClick={btnClick}>
          &divide;
        </button>
      </div>
      <div className="row">
        <button type="button" className="col-3 text-center border p-3" onClick={btnClick}>
          7
        </button>
        <button type="button" className="col-3 text-center border p-3" onClick={btnClick}>
          8
        </button>
        <button type="button" className="col-3 text-center border p-3" onClick={btnClick}>
          9
        </button>
        <button type="button" className="col-3 text-center border p-3 bg-warning" onClick={btnClick}>
          x
        </button>
      </div>
      <div className="row">
        <button type="button" className="col-3 text-center border p-3" onClick={btnClick}>
          4
        </button>
        <button type="button" className="col-3 text-center border p-3" onClick={btnClick}>
          5
        </button>
        <button type="button" className="col-3 text-center border p-3" onClick={btnClick}>
          6
        </button>
        <button type="button" className="col-3 text-center border p-3 bg-warning" onClick={btnClick}>
          -
        </button>
      </div>
      <div className="row">
        <button type="button" className="col-3 text-center border p-3" onClick={btnClick}>
          1
        </button>
        <button type="button" className="col-3 text-center border p-3" onClick={btnClick}>
          2
        </button>
        <button type="button" className="col-3 text-center border p-3" onClick={btnClick}>
          3
        </button>
        <button type="button" className="col-3 text-center border p-3 bg-warning" onClick={btnClick}>
          +
        </button>
      </div>
      <div className="row">
        <button type="button" className="col-6 text-center border p-3" onClick={btnClick}>
          0
        </button>
        <button type="button" className="col-3 text-center border p-3" onClick={btnClick}>
          .
        </button>
        <button type="button" className="col-3 text-center border p-3 bg-warning" onClick={btnClick}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
