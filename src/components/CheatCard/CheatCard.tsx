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
    <div className={styles.myCard}>
      {props.children}
    </div>
  );
}

export default CheatCard;