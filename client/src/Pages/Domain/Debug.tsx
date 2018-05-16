import * as React from 'react';

interface IProps {
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

const Debug: React.SFC<IProps> = props => {
  return (
    <ul className="w3-ul">
      <li>Loading: {String(props.loading)}</li>
      <li>Error: {String(props.error)}</li>
      <li>Error Message: {String(props.errorMessage)}</li>
    </ul>
  );
};

export default Debug;
