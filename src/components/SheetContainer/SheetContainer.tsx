import React, { useEffect } from 'react';

import styles from './SheetContainer.module.scss'

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)



const SheetContainer: React.FunctionComponent = (props) => {

  return(
    
    <React.Fragment>
      
      <div className={styles.container}>
        {props.children}
      </div>
      
    </React.Fragment>
  );
}

export default SheetContainer;