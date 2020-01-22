import classNames from 'classnames';
import * as React from 'react';

export const Body = props => (
  <div className="w3-container">{props.children}</div>
);
export const Row = props => <div className="w3-row">{props.children}</div>;
export const RowPadding = props => (
  <div className="w3-row-padding">{props.children}</div>
);
export const Col = ({
  sm = 0,
  md = 0,
  lg = 0,
  half = false,
  third = false,
  quarter = false,
  children
}) => {
  const colClasses = classNames({
    'w3-half': half,
    'w3-third': third,
    'w3-quarter': quarter,
    column: `w3-col s${sm} m${md} l${lg}`
  });
  return <div className={colClasses}>{children}</div>;
};
