import * as React from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Error from './Error';

class Page extends React.Component {
  public render() {
    return (
      <Error>
        <TransitionGroup>
          <CSSTransition classNames="fade" timeout={300}>
            {this.props.children}
          </CSSTransition>
        </TransitionGroup>
      </Error>
    );
  }
}

export default Page;
