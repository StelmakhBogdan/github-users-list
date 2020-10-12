import React from 'react';

import Routes  from '../../routes/Routes';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';

const App = () => {
  return (
    <ErrorBoundry>
      <Routes/>
    </ErrorBoundry>
  );
};

export default App;