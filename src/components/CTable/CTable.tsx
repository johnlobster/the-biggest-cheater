import React from 'react';
import CGrid from '../../components/CGrid/CGrid';
import styles from './CTable.module.scss';

interface TableDefElement  {
  width: number;
  text?: boolean;
}

type Ctel = number | [number] | [number, "code"];


// interface  TableDef  {
//   tableInfo: TableDefElement[];
// }
interface MoreProps {
  tableDef: Ctel[];
  tableData: string[][];

}
const CTable: React.FunctionComponent<MoreProps> = (props) => {
  return(
    <React.Fragment>
      {props.tableData.map((dataItem, index, array) => {
        return(
          <React.Fragment>
            <CGrid row>
              {/* <div>{props.tableDef}</div> */}
              {props.tableDef.map((item,index,array) => {
                return (
                  <React.Fragment>
                    {(typeof(item) === "number") ? 
                      (
                        <CGrid xs={item} md={item}>
                          {dataItem[index]}
                        </CGrid>
                      ):(
                        (item[1] === "code") ? (
                          <CGrid xs={item[0]} md={item[0]}>
                            <span className={styles.codeStyling}>{dataItem[index]}</span>
                          </CGrid>
                        ) : (
                          <CGrid xs={item[0]} md={item[0]}>
                            {dataItem[index]}
                          </CGrid>
                        )
                      )
                    }
                    

                  </React.Fragment>
                  
                )
              })}

            </CGrid>
            
          </React.Fragment>
        )})}
    </React.Fragment>
  )
}

export default CTable;
