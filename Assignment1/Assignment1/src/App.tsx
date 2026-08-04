import Timer from './components/Timer'
import InputFocus from './components/inputFocus'
import ToggleComponent from './components/Toggle'
import './App.css'
import ToggleP1Task from '../Practice/P1'
import P3 from '../Practice/P3'
import P4 from '../Practice/p4'
import P5 from '../Practice/p5'
import P6 from '../Practice/P6'
import { useState } from 'react'
function App() {
const [ToggleforP6Tasks,setToogle]=useState(true);
const callToggle=()=>{
  setToogle(pre=>!pre)
}
const result=ToggleforP6Tasks? <P6/>:""
// p1 task with deeper 
ToggleP1Task()
P5()
// p1 task with deeper 
  return (
    <>
      <div>
      <h1>Hooks Drill</h1>
      <Timer />
      <InputFocus />
      <ToggleComponent/>
    </div>
    <div>
      {/*  p3 task with deeper  */}
      <P3/>
      {/*  p3 task with deeper  */}
    </div>
    <div>
      <br /><br />
        {/*  p4 task with deeper  */}
      <P4/>
        {/*  p4 task with deeper  */}
<div>
  <br /><br /><br />
        {/* P6 task done with deeper */}
        <button onClick={callToggle}>toggle P6 to unmount component</button>
       {result}
        {/* p6 task done with deeper */}
</div>
    </div>
    </>
  )
}

export default App
