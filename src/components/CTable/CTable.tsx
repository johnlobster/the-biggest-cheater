import React from 'react';
import styles from './CTable.module.scss';

interface TableDefElement  {
  width: number;
  text?: boolean;
}

type Ctel = number | [number] | [number, "code"];

interface GridProps {
  row? : boolean;
  xs?: number;
  md?: number;

}
// Used bootstrap as previous CTGrid was too hard to figure out what was going wrong (copied from MDB bootstrap)

const CTGrid:React.FunctionComponent<GridProps> = (props) => {
  return (
    <React.Fragment>
      { props.row && (
        <div className='row'>
          {props.children}
        </div>
      ) }
      
      { props.xs && (
        <div className={`col-s-${props.xs} col-md-${props.md}`}>
          { props.children }
        </div>
      )}

    </React.Fragment>
  )
}
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
          <div key={`dataItem_${dataItem}`}>
            <CTGrid row>
              {/* <div>{props.tableDef}</div> */}
              {props.tableDef.map((item,index,array) => {
                return (
                  <React.Fragment>
                    {(typeof(item) === "number") ? 
                      (
                        <CTGrid xs={item} md={item} key={`tableEntry_${ item }`} >
                          {dataItem[index]}
                        </CTGrid>
                      ):(
                        (item[1] === "code") ? (
                          <CTGrid xs={item[0]} md={item[0]} key={`tableEntry_${item}`}>
                            <span className={styles.codeStyling}>{dataItem[index]}</span>
                          </CTGrid>
                        ) : (
                          <CTGrid xs={item[0]} md={item[0]} key={`tableEntry_${item}`}>
                            {dataItem[index]}
                          </CTGrid>
                        )
                      )
                    }
                    

                  </React.Fragment>
                  
                )
              })}

            </CTGrid>
            
          </div>
        )})}
    </React.Fragment>
  )
}

export default CTable;
