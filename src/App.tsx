import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Switch, Route, } from 'react-router-dom';

import * as pageInfo from "./pages/all-pages";
import Header from './components/Header/Header' 
import Footer from './components/Footer/Footer'
import The404 from './pages/The404/The404'


// import { BrowserRouter as Router} from 'react-router-dom';
// import CheatCard from './components/CheatCard/CheatCard'

// import  './App.scss'


const App: React.FunctionComponent = () => {
  return (
    <div>
      <Router>
        
        <Header />
        <Switch>
          <Route exact path='/' component={pageInfo.allPages[0].reactPage} />

          <Route exact path='/index.html' component={pageInfo.allPages[0].reactPage} />


          {pageInfo.allPages.map((item, index) => {
            return <Route path={`/${item.name}`} component={item.reactPage} key={`${item.name}_${index}`} />
          })}

          <Route component={The404} />

        </Switch>
        <Footer />
        
      </Router>
      
    </div>
    
  ); 
}

export default App;
