interface InextFocusedElement {
  currentFocusTarget: string
  nextX: number
  nextY:number
}
const gridNavigationMap = [

  ['num-1', 'num-2', 'num-3', 'close-btn'],

  ['num-4', 'num-5', 'num-6'],
  
  ['num-7', 'num-8', 'num-9'],
  
  ['backspace', 'num-0'],
  
  ['check'],
  
  ['submit']

];



export const nextFocusedElement = (Xcurrent: number, Ycurrent: number, directionArrow: string): InextFocusedElement  => {

  const lengthY = gridNavigationMap.length;

  switch(directionArrow) {

    case 'ArrowUp' : {

      const X = Xcurrent; 
      let Y = Ycurrent;

        if (Y === 0) {
          Y = lengthY - 1
        } else {
          Y = Ycurrent - 1
        }

      return {
        nextX: X,
        nextY: Y,
        currentFocusTarget: gridNavigationMap[Y][X]
      }

    }

    case 'ArrowDown' : {

      let X = Xcurrent;
      let Y = Ycurrent;

        if (Y === lengthY - 1) {
          Y = 0
        } else {
          Y = Ycurrent + 1
        }

      let currentTarget = gridNavigationMap[Y][X];

        while (!currentTarget) {
          X = Xcurrent - 1
          currentTarget = gridNavigationMap[Y][X];
        }

      return {
          nextX: X,
          nextY: Y,
          currentFocusTarget: currentTarget
        }
    }
    
    case 'ArrowLeft' : {

      const lengthX = gridNavigationMap[Ycurrent].length;

      let X = Xcurrent;
      const Y = Ycurrent;

        if (X === 0) {
          X = lengthX - 1
        } else {
          X = Xcurrent - 1
        }

        return {
          nextX: X,
          nextY: Y,
          currentFocusTarget: gridNavigationMap[Y][X]
        }
     
    }
    
    case 'ArrowRight' : {

      const lengthX = gridNavigationMap[Ycurrent].length;

      let X = Xcurrent;
      const Y = Ycurrent;

        if (X === lengthX - 1) {
          X = 0
        } else {
          X = Xcurrent + 1
        }

        return {
          nextX: X,
          nextY: Y,
          currentFocusTarget: gridNavigationMap[Y][X]
        }
    }

    default: return {
      nextX: Xcurrent,
      nextY: Ycurrent,
      currentFocusTarget: gridNavigationMap[Ycurrent][Xcurrent]
    }
  }
}