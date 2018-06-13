import React from 'react';

const FullExample = () => (
  <div>
    <p>{String(process.env.NODE_ENV_STAGING)}</p>
  </div>
);

export default FullExample;
