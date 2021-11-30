
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterConfig from './application/navigation/routerConfig';

function App() {
  return (
    <div>
        <Router>
            <RouterConfig/>
        </Router>
    </div>
  );
}

export default App;
