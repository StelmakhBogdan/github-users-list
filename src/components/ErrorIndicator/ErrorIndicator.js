import React from 'react';

import './errorIndicator.css';
import icon from './errorIcon.png';

const ErrorIndicator = ( { error }) => {
  return (
    <div className="error-indicator">
      <img src={icon} style={{ width: "50%" }} alt="error icon"/>
      <h1>{error || ''}</h1>
      <span className="warning">Warning</span>
      <span>
                Something has gon terribly wrong
            </span>
      <span>
                ( but we are already start to fix this issue )
            </span>
    </div>
  );
};

export default ErrorIndicator;