import React from 'react'
import { useRef,memo } from 'react'
import type {Style} from '../../src/types/type'
const Child:React.FC<Style> = ({style,func}) => {
    const ref=useRef(0)
    ref.current+=1
console.log("P3 task child rendered : ",ref.current," times")
  return (<>
    <div style={style}>P3 task: Child component</div>
    <button className='p-3 bg-emerald-800/40 rounded-3xl hover:bg-emerald-800/70 cursor-pointer' onClick={func}>click for P3 deeper</button>
    </>
  )
}

export default memo(Child);