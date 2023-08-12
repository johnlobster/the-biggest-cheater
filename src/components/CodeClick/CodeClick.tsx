import React from 'react';

import { MDBBtn } from "mdbreact";

import styles from './CodeClick.module.scss'

interface MoreProps {
  title?: string;                   // optional title
  other?: string;                   // A paragraph of extra text
  codeString: string;               // code to display/copy
}

const CodeClick: React.FunctionComponent<MoreProps> = (props) => {

  const copyData: () => void = () => {
    navigator.clipboard.writeText(props.codeString)
  }

  return (
    <React.Fragment>
      {props.title && <h4>{props.title}</h4>}
      {props.other && <p>{props.other}</p>}
      <div className={styles.boxStyling}>
        <div className={styles.clearfix}>
          <div onClick={copyData} className={`btn btn-outline-secondary ${styles.buttonBox}`}>
            Copy
          </div>
          

        </div>
        <div className={styles.codeBox}>
          <pre className={styles.codeStyling}>
            {props.codeString}
          </pre>
        </div>
        
      </div>
    </React.Fragment>
    
  )
}

export default CodeClick;
