import React from 'react';


import styles from './AccordionButton.module.scss'


const AccordionButton: React.FunctionComponent = (props) => {

  
  return(
    <div className={`btn btn-outline-secondary ${styles.buttonBox}`} >
      
      {props.children}
      
    </div>
  );
}

export default AccordionButton;