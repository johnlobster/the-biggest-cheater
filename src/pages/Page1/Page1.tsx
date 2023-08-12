import React from 'react';

import Container from '../../components/Container/Container'
import CheatCard from '../../components/CheatCard/CheatCard'
import { allSheets, SheetData} from '../../sheets/all-sheets'

const mySheets: SheetData = [
  allSheets[2],
  allSheets[7],
  
]
// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Page1: React.FunctionComponent = () => {
  return(
    <div>
      <Container>
        <h1>Javascript and friends</h1>

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

export default Page1;