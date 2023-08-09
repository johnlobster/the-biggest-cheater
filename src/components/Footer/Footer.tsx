import React from 'react';
import { Link } from 'react-router-dom'

import Container from '../Container/Container'

import styles from './Footer.module.scss'



const Footer: React.FunctionComponent = () => {
  return(
    <Container>
      <div className={styles.footerBox}>
        <h2>Cheatsheet</h2>
        <Link to="/Home">
          Return to home page
        </Link>
      </div>
    </Container>
    
  );
}

export default Footer;