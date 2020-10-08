import React from 'react';

import { MDBBtn } from "mdbreact";

import Accordion from '../../components/Accordion/Accordion'
import Container from '../../components/Container/Container'
import Http from '../../sheets/Http/Http'
import CheatCard from '../../components/CheatCard/CheatCard'
import TSandJS from '../../sheets/TSandJS/TSandJS'
import Markdown from '../../sheets/Markdown/Markdown'

// import styles from './Home.module.scss'


// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Home: React.FunctionComponent = (props) => {
  return(
    <div>
      <Container>
        <h1>
          World's most boring web page
        </h1>

        <CheatCard>
          <Http />
        </CheatCard>
        
        <CheatCard>
          <TSandJS />
        </CheatCard>

        <CheatCard>
          <Markdown />
        </CheatCard>
        <Accordion
          clickable={
            <MDBBtn outline color="primary">
              Oooh, pick me
          </MDBBtn>
          }
        >
          <p>A paragraph about musical instruments</p>
        </Accordion>

        <Accordion
          clickable={
            <p>Click this paragraph</p>
          }
        >
          <p>Something new</p>
        </Accordion>

        {/* <CheatCard>
        <p> A boring paragraph in a card</p>
      </CheatCard> */}
        {/* <button className="mdc-button myButton">
        Boring button
      </button> */}
        <MDBBtn outline color="primary">
          Boring button
      </MDBBtn>
        <MDBBtn outline color="danger">Danger</MDBBtn>
        <MDBBtn outline color="danger">
          Purpler than you
      </MDBBtn>

      </Container>
      
    </div>
  );
}

export default Home;