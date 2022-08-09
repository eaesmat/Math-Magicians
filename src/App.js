import React from 'react';
import Calculator from './Components/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="container col-4 mt-5 pt-5">
        <Calculator />
      </div>
    );
  }
}

export default App;
