import React from 'react';

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Sass: React.FunctionComponent = (props) => {
  return(
    <div>
      <h1>I am a Sass</h1>

      <a href="https://sass-lang.com/documentation">sass/scss documentation</a>
    </div>
  );
}

export default Sass;