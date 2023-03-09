import React from 'react';

import styles from './CodeBox.module.scss'

interface MoreProps {
  codeString: string;
}

const CodeBox: React.FunctionComponent<MoreProps> = (props) => {
  return (
    <pre className={styles.codeBlock}>
      {props.codeString}
    </pre>
  )
}

export default CodeBox;
