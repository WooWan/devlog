import {useRef, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, Stats, useGLTF,Clone} from "@react-three/drei";

function Model({ url }:{url:string }) {
    console.log(url)
    const { scene } = useGLTF(url)
    return <primitive object={scene} />
}

function App() {
    const model = useGLTF("./models/hamburger.glb")

    // const { title } = useControls({
    //     title: {
    //         options: Models.map(({ title }) => title),
    //     },
    // })
    // const models = Models[Models.findIndex((m) => m.title === title)].url
    // console.log('models', models)
  return (
     <div>
         dsfsdf
     </div>
  )
}

export default App
