import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

if (ENVIRONMENT === 'development') {
  import('@axe-core/react').then(axe => {
    axe.default(React, ReactDOM, 1000);
    ReactDOM.render(<App />, document.getElementById('app'));
  });
} else {
  ReactDOM.render(<App />, document.getElementById('app'));
}
