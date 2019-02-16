import * as React from 'react';
import styles from './card.module.css';

export default class Card extends React.Component<any, any> {
  render() {
    return <div className={styles.card}>{this.props.children}</div>;
  }
}
