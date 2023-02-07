import { useState } from 'react'
import './App.css'
import AlertExample from './components/AlertExample'
import ToastExample from './components/ToastExample'
import colors from "./components/ColorsExample";
import ColorExample from './components/ColorsExample';
import CollapseExample from './components/TypographyExample';
import ButtonExample from './components/ButtonExample';
import Utilities from './components/Utilities';
import ContainerExample from './components/ContainerExample';
import GridsExample from './components/GridsExample';
import SmallIntroWebApp from "./components/SmallIntroWebApp";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        {/* <h1>This is a Bootstrap</h1> */}
        {/* <ToastExample/>  */}
        {/* <AlertExample/> */}
       {/* <ColorExample/> */}
       {/* <CollapseExample/> */}
       {/* <ButtonExample/> */}
       {/* <Utilities/> */}
       <ContainerExample/>
       {/* <GridsExample/> */}
       {/* <SmallIntroWebApp/> */}
    </div>
  )
}

export default App
