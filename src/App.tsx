import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Route, Routes, useParams } from 'react-router-dom';

// import * as pageInfo from "./pages/all-pages";
import Header from './components/Header/Header' 
import Footer from './components/Footer/Footer'
import Container from './components/Container/Container';
import CheatCard from './components/CheatCard/CheatCard'
import The404 from './pages/The404/The404'
import Home from './pages/Home/Home'

import Page1 from './pages/Page1/Page1'
import Page2 from './pages/Page2/Page2'
import Page3 from './pages/Page3/Page3'


import { allSheets, SheetDataItem } from './sheets/all-sheets'

import  './App.scss'

///////////////////////////////////////////////////////////////////////////////////////////////////
// Show sheet is a component that allows a single sheet to be displayed
// uses the react router parameter sheetName to select from the global list of sheets

const ShowSheet: React.FunctionComponent = () => {
  const { sheetName } = useParams();

  return (
    <React.Fragment>
      <Container>
        <CheatCard>
          
          {allSheets.map( (item) => {
            return (
              <React.Fragment>
                { (item.name === sheetName) &&
                  <item.reactSheet />
                }
              </React.Fragment>
              
            )
          })}

        </CheatCard>
      </Container>
      
    </React.Fragment>
    
  )
}



///////////////////////////////////////////////////////////////////////////////////////////////////////
// Main component: App
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
            element={<ShowSheet />}
            />

            <Route path='/Page1' element={<Page1 />} />
            <Route path='/Page2' element={<Page2 />} />
            <Route path='/Page3' element={<Page3 />} />

          

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
