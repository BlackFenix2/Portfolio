import * as React from 'react';

export interface Props {
  pageName: string;
}

export default class Page extends React.Component<Props, any> {
  render() {
    return (
      <div>
        <h2>Pages</h2>
      </div>
    );
  }
}
