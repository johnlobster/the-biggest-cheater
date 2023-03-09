import React from 'react';

import Container from '../../components/Container/Container'
import CheatCard from '../../components/CheatCard/CheatCard'
import { allSheets, SheetData} from '../../sheets/all-sheets'

const mySheets: SheetData = [
  allSheets[5],
  allSheets[6],
  
]
// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Page2: React.FunctionComponent = (props) => {
  return(
    <div>
      <Container>
        <h1>I am Page full of cool stuff</h1>

        {mySheets.map( (item, index) => {
          return (
            <React.Fragment key={`sheet_${index}`}>
              <CheatCard>
                <item.reactSheet />
              </CheatCard>
              
            </React.Fragment>
          )
        })}

      </Container>
      
    </div>
  );
}

export default Page2;