import React, { useEffect } from 'react';

/*
      A css grid component wrapper
      Maybe could fall back to flexbox if run in an old browser
    */

import './CGrid.module.scss'

// import theme from "../../global/theme"

const theme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
}



// type cgridOpption = boolean | undefined
// type gridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined

type gridSize = number | undefined
enum ScreenSize { xs, sm, md, lg, xl} 

type SizeMatrix = number[]
const defaultMatrix: SizeMatrix = [12,12,12,12,12]

// type gridType = "row" | "item" | undefined
interface MoreProps {
  row?: boolean;
  item?: boolean; // default is item 

  xs?: gridSize;                          // Grid responsive sizing default is 12
  sm?: gridSize;
  md?: gridSize;
  lg?: gridSize;
  xl?: gridSize;

  id?: string;   // set id to get debug logging 
}

const createMatrix: (allProps: MoreProps) => SizeMatrix = (allProps) => {
  let matrix = defaultMatrix
  if (allProps.xs) {
    matrix = [
      allProps.xs,
      allProps.xs,
      allProps.xs,
      allProps.xs,
      allProps.xs,
    ]
  }
  if (allProps.sm) {
    matrix = [
      matrix[0],
      allProps.sm,
      allProps.sm,
      allProps.sm,
      allProps.sm,
    ]
  }
  if (allProps.md) {
    matrix = [
      matrix[0],
      matrix[1],
      allProps.md,
      allProps.md,
      allProps.md,
    ]
  }
  if (allProps.lg) {
    matrix = [
      matrix[0],
      matrix[1],
      matrix[2],
      allProps.lg,
      allProps.lg,
    ]
  }
  if (allProps.xl) {
    matrix = [
      matrix[0],
      matrix[1],
      matrix[2],
      matrix[3],
      allProps.xl,
    ]
  }
  return(matrix)
}
const CGrid: React.FunctionComponent<MoreProps> = (props) => {

  const getWindowSize: () => ScreenSize = () => {
    let size = ScreenSize.xs
    const width = window.innerWidth
    if (width < theme.breakpoints.values.sm) {
      size = ScreenSize.xs
    } else if (width < theme.breakpoints.values.md) {
      size = ScreenSize.sm
    } else if (width < theme.breakpoints.values.lg) {
      size = ScreenSize.md
    } else {
      size = ScreenSize.lg
    }
    return size
  }

  // const [itemWidth, updateItemWidth] = React.useState(0)
  const [itemWidthStyle, updateItemWidthStyle] = React.useState("md-jww-cgrid-itemSpan12")
  const [screenSize, updateScreenSize] = React.useState(getWindowSize())
  const [sizeMatrix, updateSizeMatrix] = React.useState(defaultMatrix)

  // useEffect(() => {
  //   let width = 12 // default, fill whole row
  //   if ( props.xs ) {
  //     width=props.xs
  //   }
  //   updateItemWidth(width)
  // }, [])

  // create a reference of the item size for each different screen width. Only dependent on attributes
  useEffect( () => {
    
    const matrix = createMatrix({ xs: props.xs, sm: props.sm, md: props.md, lg: props.lg, xl: props.xl})
    // props.id && console.log(`CGrid: ${props.id} Update size matrix to ${matrix}`)
    updateSizeMatrix(matrix)
  }, [props.xs, props.sm, props.md, props.lg, props.xl, props.id])

  
  // component redraws when screen size changes, updating screenSize state
  useEffect(() => {
    const handleWindowResize = () => {
      updateScreenSize(getWindowSize())
      // props.id && console.log(`CGrid: ${props.id} window resize`)
    }
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect( () => {
    // ToDo turn this into an iteration
    props.id && console.log(`CGrid: ${props.id} Update element class`)
    if (screenSize === ScreenSize.xs) {
      updateItemWidthStyle(`md-jww-cgrid-itemSpan${sizeMatrix[0]}`)
    }
    if (screenSize === ScreenSize.sm) {
      updateItemWidthStyle(`md-jww-cgrid-itemSpan${sizeMatrix[1]}`)
    }
    if (screenSize === ScreenSize.md) {
      updateItemWidthStyle(`md-jww-cgrid-itemSpan${sizeMatrix[2]}`)
    }
    if (screenSize === ScreenSize.lg) {
      updateItemWidthStyle(`md-jww-cgrid-itemSpan${sizeMatrix[3]}`)
    }
    if (screenSize === ScreenSize.xl) {
      updateItemWidthStyle(`md-jww-cgrid-itemSpan${sizeMatrix[4]}`)
    }
  }, [sizeMatrix, screenSize, props.id])

  // run when screenSize state changes or size props change, updates itemWidthStyle: class used to control item width
  // useEffect( () => {
  //   console.log(`CGrid: update item class ScreenSize ${screenSize} props: xs ${props.xs} sm ${props.sm} md ${props.md} lg ${props.lg}`)
  //   if (screenSize === ScreenSize.xs) {
  //     if (props.xs) {
  //       if ((props.xs > 12) || (props.xs < 1)) {
  //         console.log("CGrid: xs parameter not 1 -12, use default of 12 ")
  //         updateItemWidthStyle("md-jww-cgrid-itemSpan12")
  //       } else if (props.xs === 6) {
  //         updateItemWidthStyle("md-jww-cgrid-itemSpan6")
  //       } else if (props.xs === 4) {
  //         updateItemWidthStyle("md-jww-cgrid-itemSpan4")
  //       } else {
  //         updateItemWidthStyle("md-jww-cgrid-itemSpan12")
  //       }
  //     } else {
  //       // undefined, maybe should be hidden
  //       updateItemWidthStyle("md-jww-cgrid-itemSpan12")
  //     }
  //   } else if (screenSize === ScreenSize.sm) {
  //     if (props.sm) {
  //       if ((props.sm > 12) || (props.sm < 1)) {
  //         console.log("CGrid: sm parameter not 1 -12, use default of 12 ")
  //         updateItemWidthStyle("md-jww-cgrid-itemSpan12")
  //       } else if (props.sm === 6) {
  //         updateItemWidthStyle("md-jww-cgrid-itemSpan6")
  //       } else if (props.sm === 4) {
  //         updateItemWidthStyle("md-jww-cgrid-itemSpan4")
  //       } else {
  //         updateItemWidthStyle("md-jww-cgrid-itemSpan12")
  //       }
  //     } else {
  //       // undefined, maybe should be hidden
  //       updateItemWidthStyle("md-jww-cgrid-itemSpan12")
  //     }
  //   } else if (screenSize === ScreenSize.md) {
  //     if (props.md) {
  //       if ((props.md > 12) || (props.md < 1)) {
  //         console.log("CGrid: md parameter not 1 -12, use default of 12 ")
  //         updateItemWidthStyle("md-jww-cgrid-itemSpan12")
  //       } else if (props.md === 6) {
  //         updateItemWidthStyle("md-jww-cgrid-itemSpan6")
  //       } else if (props.md === 4) {
  //         updateItemWidthStyle("md-jww-cgrid-itemSpan4")
  //       } else {
  //         updateItemWidthStyle("md-jww-cgrid-itemSpan12")
  //       }
  //     } else {
  //       // undefined, maybe should be hidden
  //       updateItemWidthStyle("md-jww-cgrid-itemSpan12")
  //     }
  //   } else if (screenSize === ScreenSize.lg) {
  //     if (props.lg) {
  //       if ((props.lg > 12) || (props.lg < 1)) {
  //         console.log("CGrid: lg parameter not 1 -12, use default of 12 ")
  //         updateItemWidthStyle("md-jww-cgrid-itemSpan12")
  //       } else if (props.lg === 6) {
  //         updateItemWidthStyle("md-jww-cgrid-itemSpan6")
  //       } else if (props.lg === 4) {
  //         updateItemWidthStyle("md-jww-cgrid-itemSpan4")
  //       } else {
  //         updateItemWidthStyle("md-jww-cgrid-itemSpan12")
  //       }
  //     } else {
  //       // undefined, maybe should be hidden, or inherit previous
  //       updateItemWidthStyle("md-jww-cgrid-itemSpan12")
  //     }
  //   }
  // }, [screenSize, props.xs, props.sm, props.md, props.lg, props.xl])

  // const getWidthStyle: (width: number) => string = (width) => {
  //   if (itemWidth === 12) {
  //     return (styles.itemSpan12)
  //   } else if (itemWidth === 6) {
  //     return (styles.itemSpan6)
  //   } else if (itemWidth === 6) {
  //     return (styles.itemSpan4)
  //   } else {
  //     return (styles.itemSpan12)
  //   }
    
  // }

  return(
    <React.Fragment>
      {props.row ? (
        <div className="md-jww-cgrid-row">
          {props.children}
        </div>
      ): (
        <div className={itemWidthStyle}>
          {props.children}
        </div>
      )}
    </React.Fragment>
      
  
  );
}

export default CGrid;

{/* <div className={`${styles.itemSpan4}`}>
  {props.children}
</div> */}
    
// const CGrid: React.FunctionComponent<MoreProps> = (props) => {
//   return(
//     {props.container && (
//           <div className={styles.topBox}>
//           </div>
//         )}
//         {props.item && (
//           <div><props.children</div>
//     )}
//   );
// }