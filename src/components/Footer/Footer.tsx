import React from 'react';
import { Link } from 'react-router-dom'

import styles from './Footer.module.scss'



const Footer: React.FunctionComponent = (props) => {
  return(
    <div className={styles.topBox}>
      <h2>The Footer</h2>
      <Link to="/Home">
        Go home, there's nothing to see down here
      </Link>
    </div>
    
  );
}

export default Footer;