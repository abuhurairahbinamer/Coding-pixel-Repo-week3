import Button from "./components/Button"
import  Card  from "./components/Cards"
import  Input  from "./components/Input"
import Spinner from './components/spinner'
import { useState } from "react";
import { users } from "./utils/utils";
import { useCallback } from "react";
import P3 from '../Practice/P3/parent'
import P4 from '../Practice/p4/Parent'
function App() {
  const [text, setText] = useState("");
// console.log('parent component rendered')
const func=useCallback((e:React.MouseEvent<HTMLElement>)=>{
  console.log(e.currentTarget.innerHTML)
},[])

const textSet=(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)=>{
setText(e.target.value)
}

  return (
    <div>
      <p className="text-2xl"><b>Note:To check re-rendering you can enter the text in input filed</b> </p>
      <br />
   <Button variant="danger" focus="focus:bg-green-500 focus:rounded-full" hover="hover:bg-blue-500" onClick={func}>hellow wolrd</Button>
   <br />
     {users.map((user) => (
        <Card key={user.id} name={user.name} role={user.role} email={user.email} Status={user.status} hover="hover:bg-gray-500/20 hover:cursor-pointer " focus="focus:bg-green-700/20 focus:rounded-3xl"/>
      ))}
      <br />
   <Input
          value={text}
          onChange={textSet}
          placeholder="Type something..."
          className="w-50"
          focus="focus:bg-blue-500/20"
          hover="hover:bg-green-500/20"
        />
        <br /><br />
    <Spinner  focus="focus:border-violet-500 focus:border-t-transparent" hover="hover:border-orange-500 hover:border-t-transparent" size="lg" color="green"/>

<br />
<h1>Pratice questions</h1>
<P3/>
<P4/>
    </div>
  )
}

export default App
