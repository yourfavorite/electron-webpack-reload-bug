import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Test from './test';

function render() {
  ReactDOM.render(
    <div id="App">
      <h2>Click it!</h2>
      <Test />
    </div>, document.getElementById('root'));
}

render();