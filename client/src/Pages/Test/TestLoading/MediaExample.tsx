import React from 'react';
import { Responsive } from 'semantic-ui-react';

const Example = () => (
  <div>
    <div>Device Test!</div>
    <Responsive minWidth={1224}>
      <div>You are a desktop or laptop</div>
      <Responsive minWidth={1824}>
        <div>You also have a huge screen</div>
      </Responsive>
      <Responsive maxWidth={1224}>
        <div>You are sized like a tablet or mobile phone though</div>
      </Responsive>
    </Responsive>
    <Responsive maxWidth={1224}>
      <div>You are a tablet or mobile phone</div>
    </Responsive>
  </div>
);

export default Example;
