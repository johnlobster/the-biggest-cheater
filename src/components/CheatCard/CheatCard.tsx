import React from 'react';

// import Card from '@material/card'
// import { MDCRipple } from '@material/ripple'

import styles from './CheatCard.module.scss'

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const CheatCard: React.FunctionComponent = (props) => {
  return(
    <div className={`mdc-card mdc-card--outlined ${styles.myCard}`}>
      <h1>I am a CheatCard</h1>
      {props.children}
    </div>
  );
}

export default CheatCard;