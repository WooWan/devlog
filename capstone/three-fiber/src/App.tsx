import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Canvas} from "@react-three/fiber";

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <Canvas>
         <group>
             <mesh>
                 <torusKnotGeometry />
                 <meshNormalMaterial />
             </mesh>
             <mesh>
                 <boxGeometry />
                 <meshBasicMaterial color="red" />
             </mesh>
          <mesh position={ [ 1, 2, 3 ] } rotation-x={ 0.5 }>
                 <sphereGeometry />
                 <meshBasicMaterial color="orange" />
             </mesh>
         </group>
     </Canvas>
    </div>
  )
}

export default App
