import React from 'react';

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Home: React.FunctionComponent = (props) => {
  return(
    <div>
      <h1>I am a Home</h1>
    </div>
  );
}

export default Home;