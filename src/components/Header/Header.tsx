import React from 'react';
import {Link} from 'react-router-dom'

import Container from '../Container/Container'

import styles from './Header.module.scss'

// interface MoreProps {
//   desktop: boolean
// }

const Header: React.FunctionComponent = () => {

  
  return(
    <div className={styles.topBox}>
      <Container >
        <h1>Cheatsheet</h1>
        <h2>Page menu</h2>
        <h4 >
          <Link to="/Home">Go home</Link>
        </h4>
        <h4 >
          <Link to="/Page1">Page 1</Link>
        </h4>
        <h4 >
          <Link to="/Page2">Page 2</Link>
        </h4>
        <h4 >
          <Link to="/The404">Go away</Link>
        </h4>
      </Container>
    </div>
    
  );
}

export default Header;