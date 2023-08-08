import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom';

import * as pageInfo from "./pages/all-pages";
import Header from './components/Header/Header' 
import Footer from './components/Footer/Footer'
import The404 from './pages/The404/The404'

import Page1 from './pages/Page1/Page1'
import Page2 from './pages/Page2/Page2'


// import { BrowserRouter as Router} from 'react-router-dom';
// import CheatCard from './components/CheatCard/CheatCard'

import  './App.scss'


const App: React.FunctionComponent = () => {
  return (
    <div>
      <Router>
        
        <Header />
          <Routes>
            <Route path='/' element={pageInfo.allPages[0].reactPage} />

            <Route path='/index.html' element={pageInfo.allPages[0].reactPage} />

            <Route path='/Page1' element={<Page1 />} />
          {/* <Route path='/Page1' element={pageInfo.allPages[1].reactPage} /> */}

          <Route path='/Page2' element={<Page2 />} />

            {/* <Route path='/Page1' element={pageInfo.allPages[1].reactPage} /> */}


            {/* {pageInfo.allPages.map((item, index) => {
              return <Route path={`/${item.name}`} element={item.reactPage} key={`${item.name}_${index}`} />
            })} */}

            <Route path = '/*' element={<The404 />} />
          </Routes>
          

        
        <Footer />
        
      </Router>
      
    </div>
    
  ); 
}

export default App;
