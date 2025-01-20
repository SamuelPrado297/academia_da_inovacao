import { Card } from "./component/card"
import { RiNextjsLine } from "react-icons/ri";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-28">
      <RiNextjsLine className="text-9xl text-green-500 p-2" />
      <h2 className="text-3xl font-bold pb-3 text-green-400">Componentes com Next.js</h2>
      <Card /> {/*Inserindo componente no jsx*/}
    </div>  
  )
}