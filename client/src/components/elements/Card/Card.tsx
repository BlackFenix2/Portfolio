import * as React from 'react';
import styles from './card.module.css';

export default class App extends React.Component<any, any> {
  public render() {
    return <div className={styles.card}>{this.props.children}</div>;
  }
}
