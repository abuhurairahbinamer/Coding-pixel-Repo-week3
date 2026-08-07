import Child from './child'
import { useMemo ,useCallback} from 'react'
const P3 = () => {
    const style={margin:30}
    const memoizedStyle=useMemo(()=>style,[])
    const func=useCallback(()=>{
    console.log('Deeper button')
    },[])
  return (<>
    <div><Child func={func} style={memoizedStyle}/></div>
    </>
  )
}

export default P3

//deeper
//An inline onClick={() => ...} has the same problem as it is creating new function ()=>{...} with new refrence,so when it is passed as prop ,on every render child component will run beacause react would detect the change.so the  useCallback hook fixes it.