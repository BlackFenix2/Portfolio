import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Responsive } from 'semantic-ui-react';

const Example = () => {
  return (
    <div>
      <div>
        <h3>Responsive Test</h3>
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
      <div>
        <h3>Device Check Test</h3>
        <BrowserView>
          <h4> This is rendered only in browser </h4>
        </BrowserView>
        <MobileView>
          <h4> This is rendered only on mobile </h4>
        </MobileView>
      </div>
    </div>
  );
};

export default Example;
