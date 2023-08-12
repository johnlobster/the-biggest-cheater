import React from 'react';

import Container from '../../components/Container/Container'
import CheatCard from '../../components/CheatCard/CheatCard'
import { allSheets, SheetData} from '../../sheets/all-sheets'

const mySheets: SheetData = [
  allSheets[6],
  allSheets[5],
  allSheets[1],
  allSheets[0],

  
]
// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Page3: React.FunctionComponent = (props) => {
  return(
    <div>
      <Container>
        <h1>Support</h1>

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

export default Page3;