import Timer from './components/Timer'
import InputFocus from './components/inputFocus'
import ToggleComponent from './components/Toggle'
import './App.css'
import ToggleP1Task from '../Practice/P1'


function App() {
// p1 task with deeper 
ToggleP1Task()
// p1 task with deeper 
  return (
    <>
      <div>
      <h1>Hooks Drill</h1>
      <Timer />
      <InputFocus />
      <ToggleComponent/>
    </div>
    </>
  )
}

export default App
