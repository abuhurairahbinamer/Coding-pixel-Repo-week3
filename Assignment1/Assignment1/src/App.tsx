import Timer from './components/Timer'
import InputFocus from './components/inputFocus'
import ToggleComponent from './components/Toggle'
import './App.css'
import ToggleP1Task from '../Practice/P1'
import P3 from '../Practice/P3'
import P4 from '../Practice/p4'
import P5 from '../Practice/p5'
function App() {
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
    </div>
    </>
  )
}

export default App
