import React from 'react'
import { useCallback } from 'react'
import Button from './Button'
const P5 = () => {
const func=useCallback((e:React.MouseEvent<HTMLElement>)=>{
  console.log(e.currentTarget.innerHTML)
},[])
  return (
    <div>
        <Button aria-label='p5 task button'  hover='hover:bg-blue-700/50 hover:cursor-pointer' disabled={false} variant='primary' onClick={func} size='sm'>click me</Button>
    </div>
  )
}

export default P5