import React from 'react';

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const The404: React.FunctionComponent = (props) => {
  return(
    <div>
      <h1>I am a The404</h1>
    </div>
  );
}

export default The404;