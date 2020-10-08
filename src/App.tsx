import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Switch, Route, } from 'react-router-dom';

import * as pageInfo from "./pages/all-pages"; 
import The404 from './pages/The404/The404'


// import { BrowserRouter as Router} from 'react-router-dom';
// import CheatCard from './components/CheatCard/CheatCard'

// import  './App.scss'

import { MDBBtn } from "mdbreact";

import Accordion from './components/Accordion/Accordion'

import styles from './App.module.scss'

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Router>
        <h1>
          World's most boring web page
      </h1>
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
        <MDBBtn outline color="danger" className={styles.myButton}>
          Purpler than you
      </MDBBtn>

        <Switch>
          <Route exact path='/' component={pageInfo.allPages[0].reactPage} />

          <Route exact path='/index.html' component={pageInfo.allPages[0].reactPage} />


          {pageInfo.allPages.map((item, index) => {
            return <Route path={`/${item.name}`} component={item.reactPage} key={`${item.name}_${index}`} />
          })}

          <Route component={The404} />

        </Switch>
      </Router>
      
    </div>
    
  ); 
}

export default App;
