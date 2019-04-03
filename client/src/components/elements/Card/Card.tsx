import { css } from '@emotion/core';
import * as React from 'react';

export default class Card extends React.Component<any, any> {
  render() {
    return (
      <div
        css={css`
          box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
            0 4px 20px 0 rgba(0, 0, 0, 0.19);
        `}
      >
        {this.props.children}
      </div>
    );
  }
}
