import React from 'react';

import Container from '../../components/Container/Container'
import dog from '../../images/dog.png'
import styles from './The404.module.scss'

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const The404: React.FunctionComponent = (props) => {
  return(
    <div>
      <Container>
        <h1>Oh no, a 404 ! This was all a big mistake, you went to a page that doesn't exist</h1>

        <h2>Go to the <a href='/Home'> home page</a> or just go to <a href="https://stackexchange.com/">stack exchange</a> instead</h2>

        <div className={styles.doggyBox}>
          <img src={dog} alt="An embarrassed dog" />
        </div>
      </Container>
      


    </div>
  );
}

export default The404;