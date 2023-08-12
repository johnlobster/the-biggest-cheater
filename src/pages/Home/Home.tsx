// Home page
// List of Clickable links to access each sheet


import React from 'react';
import {Link} from 'react-router-dom';

// import { MDBBtn } from "mdbreact";


import Container from '../../components/Container/Container'

// import styles from './Home.module.scss'

import {allSheets} from '../../sheets/all-sheets'

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Home: React.FunctionComponent = () => {
  const sortedAllSheets = allSheets.sort( (a,b) => {
    let val = 0
    if (a.title > b.title) {
      val = 1
    } else if ( a.title < b.title) {
      val = -1
    } else {
      val = 0
    }
    return val})

  return(
    <div>
      <Container>
        <h1>
          The biggest cheater 
        </h1>
        <h4>All you ever wanted to know about web design but were afraid to ask</h4>

        <h4> Click to get info on the following</h4>
        
        {sortedAllSheets.map((item, index, array) => {
          const destination: string = "/sheets/" + item.name
          return (
            <h5 key={item.name}>
              <Link to={destination} > {item.title}</Link>
            </h5>
          )
        })}

      </Container>
      
    </div>
  );
}

export default Home;