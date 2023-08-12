import React from 'react';

import Container from '../../components/Container/Container'
import CheatCard from '../../components/CheatCard/CheatCard'
import { allSheets, SheetData} from '../../sheets/all-sheets'

const mySheets: SheetData = [
  allSheets[3],
  
]
// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Page2: React.FunctionComponent = () => {
  return(
    <div>
      <Container>
        <h1>Layout</h1>

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