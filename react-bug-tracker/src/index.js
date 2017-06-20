import React from 'react';
import ReactDOM from 'react-dom';

import BugForm from './App.js'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<BugForm />,document.getElementById('root'));
registerServiceWorker();
