import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Route, Routes, useParams } from 'react-router-dom';

// import * as pageInfo from "./pages/all-pages";
import Header from './components/Header/Header' 
import Footer from './components/Footer/Footer'
import The404 from './pages/The404/The404'
import Home from './pages/Home/Home'

import Page1 from './pages/Page1/Page1'
import Page2 from './pages/Page2/Page2'

import { allSheets } from './sheets/all-sheets'

import  './App.scss'

const ShowSheet: React.FunctionComponent = () => {
  const { sheetName } = useParams()
  const sheetComponent = allSheets[0].reactSheet
  return (
    <React.Fragment>
      <h4>Show a sheet</h4>
      <h5>{sheetName}</h5>
    </React.Fragment>
    
  )
}
const App: React.FunctionComponent = () => {
  return (
    <div>

      
      <Router>
        
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/index.html' element={<Home />} />
            <Route path='/Home' element={<Home />} />

            <Route

            path="/sheets/:sheetName"

            loader={({ params }) => {
              console.log("Router found " + params.sheetName); // 
            }}
            // element={allSheets[0].reactSheet }
            element={ <ShowSheet/ >}
              
            />

            <Route path='/Page1' element={<Page1 />} />

            <Route path='/Page2' element={<Page2 />} />

          

            {/* {pageInfo.allPages.map((item, index) => {
              return <Route path={`/${item.name}`} element={item.reactPage} key={`${item.name}_${index}`} />
            })} */}

            <Route path = '*' element={<The404 />} />
          </Routes>
                  
        <Footer />
        
      </Router>
      
    </div>
    
  ); 
}

export default App;
